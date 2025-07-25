import "./css/style.css";
import "./css/style_992.css";
import "./css/normalize.css";

import "./js/module";
import "./js/form";
import "./js/toggleMenu";

$(document).ready(function () {
  $(".modal__select").select2({
    minimumResultsForSearch: Infinity,
    dropdownParent: "body",
    width: "100%",
  });

  const $modal = $(".modal");
  const $modalContainer = $(".modal__container");
  const $orderButtons = $(".playstation__order, .game__btn");
  const $closeButtons = $(".modal__close");

  $orderButtons.on("click", function () {
    $modal.addClass("active");
  });

  $closeButtons.on("click", function (event) {
    if ($(event.target).closest(".modal__close").length) {
      $modal.removeClass("active");
    }
  });

  $modal.on("click", function (event) {
    if ($(event.target).is($modal)) {
      $modal.removeClass("active");
    }
  });

  $modalContainer.on("click", function (event) {
    event.stopPropagation();
  });
});

jQuery(document).ready(function ($) {
  const $form = $("#ajax-form");
  const $loader = $form.find(".svg-loader");
  const $successMsg = $form.find(".success-message");
  const $errorMsg = $form.find(".error-message");
  const $submitBtn = $form.find(".main-form__btn");

  $form.on("submit", function (e) {
    e.preventDefault();

    // Валидация телефона
    const phone = $form.find('[name="phone"]').val();
    if (!phone || phone.replace(/\D/g, "").length < 7) {
      $errorMsg.text("Введите корректный номер телефона").show();
      return false;
    }

    // Показать лоадер
    $loader.show();
    $submitBtn.prop("disabled", true);
    $errorMsg.hide();
    $successMsg.hide();

    // AJAX запрос
    $.ajax({
      url: ajax_object.ajaxurl, // Используем WordPress AJAX
      type: "POST",
      data: $form.serialize(),
      dataType: "json",
      success: function (response) {
        if (response.success) {
          $form[0].reset();
          $successMsg.html(response.data).show();

          // Можно добавить номер заявки в форму
          $form.append(
            '<input type="hidden" name="submission_id" value="' +
              response.insert_id +
              '">'
          );
        } else {
          $errorMsg.html(response.data).show();
        }
      },
      error: function (xhr) {
        let message = "Ошибка соединения";
        if (xhr.responseJSON && xhr.responseJSON.data) {
          message = xhr.responseJSON.data;
        }
        $errorMsg.html(message).show();
      },
      complete: function () {
        $loader.hide();
        $submitBtn.prop("disabled", false);
      },
    });
  });
});
