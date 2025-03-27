document.addEventListener('DOMContentLoaded', function () {
    const faqItems = document.querySelectorAll('.faq__item');

    faqItems.forEach(item => {
        const header = item.querySelector('.faq__item-container');
        const answer = item.querySelector('.faq__answer');
        const toggleIcon = item.querySelector('.faq__toggle');
        if (!header || !answer || !toggleIcon) return;
        header.addEventListener('click', () => {
            if (item.classList.contains('active')) {
                slideUp(answer, 300);
                item.classList.remove('active');
                toggleIcon.style.transform = 'rotate(0deg)';
                return;
            }

            document.querySelectorAll('.faq__item.active').forEach(activeItem => {
                if (activeItem !== item) {
                    const activeAnswer = activeItem.querySelector('.faq__answer');
                    slideUp(activeAnswer, 300);
                    activeItem.classList.remove('active');
                    activeItem.querySelector('.faq__toggle').style.transform = 'rotate(0deg)';
                }
            });

            slideDown(answer, 300);
            item.classList.add('active');
            toggleIcon.style.transform = 'rotate(45deg)';
        });
    });

    function slideDown(element, duration) {
        element.style.display = 'block';
        const height = element.scrollHeight;
        element.style.overflow = 'hidden';
        element.style.height = '0px';
        element.style.transition = `height ${duration}ms ease-out`;

        setTimeout(() => {
            element.style.height = `${height}px`;
        }, 10);

        setTimeout(() => {
            element.style.height = '';
            element.style.overflow = '';
            element.style.transition = '';
        }, duration + 10);
    }

    function slideUp(element, duration) {
        const height = element.scrollHeight;
        element.style.overflow = 'hidden';
        element.style.height = `${height}px`;
        element.style.transition = `height ${duration}ms ease-out`;

        setTimeout(() => {
            element.style.height = '0px';
        }, 10);

        setTimeout(() => {
            element.style.display = 'none';
            element.style.height = '';
            element.style.overflow = '';
            element.style.transition = '';
        }, duration + 10);
    }
});