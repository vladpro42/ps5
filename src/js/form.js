document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("#ajax-form");
    if (!form) return;

    const loader = form.querySelector(".svg-loader");
    const successMsg = form.querySelector(".success-message");
    const errorMsg = form.querySelector(".error-message");
    const submitBtn = form.querySelector(".main-form__btn");

    form.addEventListener("submit", async (e) => {
        e.preventDefault();

        const phoneInput = form.querySelector('[name="phone"]');
        const phone = phoneInput?.value.trim();

        // Валидация телефона
        if (!phone || phone.replace(/\D/g, "").length < 7) {
            errorMsg.textContent = "Введите корректный номер телефона";
            errorMsg.style.display = "block";
            return;
        }

        // Показываем лоадер и отключаем кнопку
        loader.style.display = "block";
        submitBtn.disabled = true;
        errorMsg.style.display = "none";
        successMsg.style.display = "none";

        const formData = new FormData(form);

        try {
            const response = await fetch(ajax_object.ajaxurl, {
                method: "POST",
                body: formData,
            });

            const data = await response.json();

            if (data.success) {
                form.reset();
                successMsg.innerHTML = data.data;
                successMsg.style.display = "block";

                // Добавляем скрытое поле с submission_id
                const hiddenInput = document.createElement("input");
                hiddenInput.type = "hidden";
                hiddenInput.name = "submission_id";
                hiddenInput.value = data.insert_id || "";
                form.appendChild(hiddenInput);
            } else {
                errorMsg.innerHTML = data.data || "Произошла ошибка";
                errorMsg.style.display = "block";
            }
        } catch (error) {
            errorMsg.innerHTML = "Ошибка соединения";
            errorMsg.style.display = "block";
        } finally {
            loader.style.display = "none";
            submitBtn.disabled = false;
        }
    });
});
