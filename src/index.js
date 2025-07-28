import "./css/normalize.css";
import "./css/style.css";
import "./css/style-mobile.css";

import "./js/module";
import "./js/form";
import "./js/toggleMenu";


document.addEventListener("DOMContentLoaded", () => {
    // Инициализация select2 (оставим jQuery, так как select2 требует его)
    // $(".modal__select").select2({
    //     minimumResultsForSearch: Infinity,
    //     dropdownParent: "body",
    //     width: "100%",
    // });

    const modal = document.querySelector(".modal");
    const modalContainer = document.querySelector(".modal__container");
    const orderButtons = document.querySelectorAll(".playstation__order, .game__btn");
    const closeButtons = document.querySelectorAll(".modal__close");
    const otherItemButtons = document.querySelectorAll(".other__item-btn");

    const openModal = () => {
        modal.classList.add("active");
    };

    const closeModal = () => {
        modal.classList.remove("active");
    };

    orderButtons.forEach(btn => {
        btn.addEventListener("click", openModal);
    });

    otherItemButtons.forEach(btn => {
        btn.addEventListener("click", openModal);
    });

    closeButtons.forEach(btn => {
        btn.addEventListener("click", (event) => {
            if (event.target.closest(".modal__close")) {
                closeModal();
            }
        });
    });

    modal.addEventListener("click", (event) => {
        if (event.target === modal) {
            closeModal();
        }
    });

    modalContainer.addEventListener("click", (event) => {
        event.stopPropagation();
    });

    const playstationTabs = document.querySelectorAll(".playstation__tab");

    playstationTabs.forEach(tab => {
        tab.addEventListener("click", (event) => {
            document.querySelector(".playstation__tab.active")?.classList.remove("active");
            event.currentTarget.classList.add("active");
        });
    });
});

const container = document.querySelector('.widget__items-container');
const toggleBtn = document.querySelector('.widget__item-btn');
const iconDefault = toggleBtn.querySelector('.icon-default');
const iconActive = toggleBtn.querySelector('.icon-active');

let isOpen = false;

toggleBtn.addEventListener('click', () => {
    isOpen = !isOpen;

    if (isOpen) {
        container.classList.remove('hidden');
        container.classList.add('active');
        iconDefault.style.opacity = '0';
        iconActive.style.opacity = '1';
    } else {
        container.classList.remove('active');
        container.classList.add('hidden');
        iconDefault.style.opacity = '1';
        iconActive.style.opacity = '0';
    }
});
