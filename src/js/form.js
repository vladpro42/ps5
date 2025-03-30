const form = document.querySelector(".main-form");

document
  .querySelector('.main-form__input[name="phone"]')
  .addEventListener("input", function (e) {
    this.value = this.value.replace(/[^0-9+]/g, "");
  });

if (form) {
  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    const nameBlock = form.querySelector('.main-form__input[name="name"]');
    const phoneBlock = form.querySelector('.main-form__input[name="phone"]');
    const messageBlock = form.querySelector(
      '.main-form__textarea[name="message"]'
    );

    if (!nameBlock.value.length) {
      alert("Ведите имя.");
      return;
    }

    if (!phoneBlock.value.length) {
      alert("Ведите телефон.");
      return;
    }

    if (messageBlock.value.length > 2000) {
      alert("Максимальная длина символов 2000");
      return;
    }

    const formData = new FormData(event.currentTargets);

    formData.append("name", nameBlock.value.trim());
    formData.append("phone", phoneBlock.value.trim());
    formData.append("message", messageBlock.value.trim());
    formData.append("submit", "");

    try {
      const res = await fetch("/", {
        method: "POST",
        body: formData,
      });
      const json = await res.json();
      console.log(json);
    } catch (error) {
      console.log(error);
      alert("Произошла ошибка попробуйте перезагрузить страницу.");
    }
  });
}
