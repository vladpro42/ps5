<?php
function my_ajax_scripts()
{
    wp_enqueue_script('my-ajax-script', get_template_directory_uri() . '/js/script.js', array('jquery'), null, true);

    wp_localize_script('my-ajax-script', 'ajax_object', array(
        'ajaxurl' => admin_url('admin-ajax.php')
    ));
}
add_action('wp_enqueue_scripts', 'my_ajax_scripts');
add_action('wp_ajax_submit_custom_form', 'handle_custom_form');
add_action('wp_ajax_nopriv_submit_custom_form', 'handle_custom_form');

function handle_custom_form()
{
    // Проверка nonce
    check_ajax_referer('custom_form_nonce', 'form_nonce');

    global $wpdb;
    $table_name = $wpdb->prefix . 'form_submissions';

    // Валидация и санитизация
    $name = sanitize_text_field($_POST['name'] ?? '');
    $phone = sanitize_text_field($_POST['phone'] ?? '');
    $message = sanitize_textarea_field($_POST['message'] ?? '');
    $ip = $_SERVER['REMOTE_ADDR'];

    // Проверка данных
    if (empty($name) || empty($phone)) {
        wp_send_json_error('Заполните обязательные поля');
    }

    if (!preg_match('/^\+375\s?[\(]?\d{2}[\)]?\s?\d{3}[\-]?\d{2}[\-]?\d{2}$/', $phone)) {
        wp_send_json_error('Введите корректный номер телефона');
    }

    // Сохранение в БД
    $inserted = $wpdb->insert($table_name, [
        'name' => $name,
        'phone' => $phone,
        'message' => $message,
        'ip_address' => $ip
    ]);

    if ($inserted) {
        // Отправка email (опционально)
        $to = get_option('admin_email');
        $subject = 'Новая заявка от ' . $name;
        $body = "Имя: $name\nТелефон: $phone\nСообщение: $message\nIP: $ip";
        wp_mail($to, $subject, $body);

        wp_send_json_success('Спасибо! Ваша заявка #' . $wpdb->insert_id . ' принята.');
    } else {
        wp_send_json_error('Ошибка при сохранении данных: ' . $wpdb->last_error);
    }
}

function handle_custom_form()
{
    check_ajax_referer('custom_form_nonce', 'form_nonce');
    $name = sanitize_text_field($_POST['name'] ?? '');
    $phone = sanitize_text_field($_POST['phone'] ?? '');
    $message = sanitize_textarea_field($_POST['message'] ?? '');

    // Проверка обязательных полей
    if (empty($name)) {
        wp_send_json_error('Укажите ваше имя');
    }

    if (!preg_match('/^\+375\s?[\(]?\d{2}[\)]?\s?\d{3}[\-]?\d{2}[\-]?\d{2}$/', $phone)) {
        wp_send_json_error('Введите телефон в формате +375 (__) ___-__-__');
    }

    // Здесь можно сохранить данные в БД или отправить email
    // Например:
    $to = get_option('admin_email');
    $subject = 'Новая заявка с сайта';
    $body = "Имя: $name\nТелефон: $phone\nСообщение: $message";

    if (wp_mail($to, $subject, $body)) {
        wp_send_json_success('Спасибо! Ваша заявка успешно отправлена.');
    } else {
        wp_send_json_error('Ошибка при отправке формы. Попробуйте позже.');
    }
}

function create_form_submissions_table()
{
    global $wpdb;

    $table_name = $wpdb->prefix . 'form_submissions';
    $charset_collate = $wpdb->get_charset_collate();

    $sql = "CREATE TABLE IF NOT EXISTS $table_name (
        id mediumint(9) NOT NULL AUTO_INCREMENT,
        name varchar(100) NOT NULL,
        phone varchar(30) NOT NULL,
        message text,
        created_at datetime DEFAULT CURRENT_TIMESTAMP NOT NULL,
        ip_address varchar(45) NOT NULL,
        PRIMARY KEY (id)
    ) $charset_collate;";

    require_once(ABSPATH . 'wp-admin/includes/upgrade.php');
    dbDelta($sql);
}
register_activation_hook(__FILE__, 'create_form_submissions_table');


function add_form_submissions_menu()
{
    add_menu_page(
        'Заявки с формы',
        'Формы',
        'manage_options',
        'form-submissions',
        'display_form_submissions',
        'dashicons-feedback',
        30
    );
}
add_action('admin_menu', 'add_form_submissions_menu');

// Отображение данных
function display_form_submissions()
{
    global $wpdb;
    $table_name = $wpdb->prefix . 'form_submissions';
    $submissions = $wpdb->get_results("SELECT * FROM $table_name ORDER BY created_at DESC");

    echo '<div class="wrap"><h1>Заявки с формы</h1>';

    if ($submissions) {
        echo '<table class="wp-list-table widefat fixed striped">';
        echo '<thead><tr>
                <th>ID</th>
                <th>Имя</th>
                <th>Телефон</th>
                <th>Сообщение</th>
                <th>Дата</th>
                <th>IP</th>
              </tr></thead>';
        echo '<tbody>';

        foreach ($submissions as $submission) {
            echo '<tr>';
            echo '<td>' . $submission->id . '</td>';
            echo '<td>' . esc_html($submission->name) . '</td>';
            echo '<td>' . esc_html($submission->phone) . '</td>';
            echo '<td>' . esc_html($submission->message) . '</td>';
            echo '<td>' . date('d.m.Y H:i', strtotime($submission->created_at)) . '</td>';
            echo '<td>' . $submission->ip_address . '</td>';
            echo '</tr>';
        }

        echo '</tbody></table>';
    } else {
        echo '<p>Нет сохраненных заявок</p>';
    }

    echo '</div>';
}


function add_export_button()
{
    if (isset($_GET['page']) && $_GET['page'] === 'form-submissions') {
        echo '<a href="' . admin_url('admin-post.php?action=export_form_submissions') . '" class="page-title-action">Экспорт в CSV</a>';
    }
}
add_action('admin_notices', 'add_export_button');

function handle_export()
{
    if (current_user_can('manage_options') && $_GET['action'] === 'export_form_submissions') {
        global $wpdb;
        $table_name = $wpdb->prefix . 'form_submissions';
        $submissions = $wpdb->get_results("SELECT * FROM $table_name ORDER BY created_at DESC");

        header('Content-Type: text/csv');
        header('Content-Disposition: attachment; filename="form_submissions_' . date('Y-m-d') . '.csv"');

        $output = fopen('php://output', 'w');
        fputcsv($output, ['ID', 'Имя', 'Телефон', 'Сообщение', 'Дата', 'IP']);

        foreach ($submissions as $submission) {
            fputcsv($output, [
                $submission->id,
                $submission->name,
                $submission->phone,
                $submission->message,
                $submission->created_at,
                $submission->ip_address
            ]);
        }

        fclose($output);
        exit;
    }
}
add_action('admin_post_export_form_submissions', 'handle_export');
