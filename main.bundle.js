/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/css/normalize.css":
/*!*******************************!*\
  !*** ./src/css/normalize.css ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/css/style.css":
/*!***************************!*\
  !*** ./src/css/style.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/css/style_992.css":
/*!*******************************!*\
  !*** ./src/css/style_992.css ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/js/form.js":
/*!************************!*\
  !*** ./src/js/form.js ***!
  \************************/
/***/ (() => {

const form = document.querySelector('.main-form')

document.querySelector('.main-form__input[name="phone"]').addEventListener('input', function (e) {
    this.value = this.value.replace(/[^0-9+]/g, '');
});

if (form) {
    form.addEventListener('submit', async event => {
        event.preventDefault();
        const nameBlock = form.querySelector('.main-form__input[name="name"]')
        const phoneBlock = form.querySelector('.main-form__input[name="phone"]')
        const messageBlock = form.querySelector('.main-form__textarea[name="message"]')


        if (!nameBlock.value.length) {
            alert('Ведите имя.')
            return;
        }

        if (!phoneBlock.value.length) {
            alert('Ведите телефон.')
            return;
        }

        if (messageBlock.value.length > 2000) {
            alert('Максимальная длина символов 2000')
            return;
        }

        const formData = new FormData(event.currentTargets);

        formData.append('name', nameBlock.value.trim())
        formData.append('phone', phoneBlock.value.trim())
        formData.append('message', messageBlock.value.trim())
        formData.append('submit', '')

        try {
            const res = await fetch('/', {
                method: 'POST',
                body: formData
            })
            const json = await res.json();
            console.log(json)
        } catch (error) {
            console.log(error)
            alert('Произошла ошибка попробуйте перезагрузить страницу.')
        }
    })
}

/***/ }),

/***/ "./src/js/module.js":
/*!**************************!*\
  !*** ./src/js/module.js ***!
  \**************************/
/***/ (() => {

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

/***/ }),

/***/ "./src/js/toggleMenu.js":
/*!******************************!*\
  !*** ./src/js/toggleMenu.js ***!
  \******************************/
/***/ (() => {

const btn = document.querySelector('.toggle-menu__btn')

if(btn) {
    btn.addEventListener('click', toogleMenu)
}

function toogleMenu (event) {
    const toggleMenu = document.querySelector('.toggle-menu__body')

    event.currentTarget.classList.toggle('toggle-menu__btn--active')

    if(toggleMenu) {
        toggleMenu.classList.toggle('toggle-menu__body--active')
    }
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css/style.css */ "./src/css/style.css");
/* harmony import */ var _css_style_992_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./css/style_992.css */ "./src/css/style_992.css");
/* harmony import */ var _css_normalize_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./css/normalize.css */ "./src/css/normalize.css");
/* harmony import */ var _js_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./js/module */ "./src/js/module.js");
/* harmony import */ var _js_module__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_js_module__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _js_form__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./js/form */ "./src/js/form.js");
/* harmony import */ var _js_form__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_js_form__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _js_toggleMenu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./js/toggleMenu */ "./src/js/toggleMenu.js");
/* harmony import */ var _js_toggleMenu__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_js_toggleMenu__WEBPACK_IMPORTED_MODULE_5__);







})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7Ozs7Ozs7OztBQ2hEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2Q0FBNkMsU0FBUztBQUN0RDtBQUNBO0FBQ0Esc0NBQXNDLE9BQU87QUFDN0MsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQyxPQUFPO0FBQ3pDLDZDQUE2QyxTQUFTO0FBQ3REO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxDQUFDOzs7Ozs7Ozs7O0FDbEVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztVQ2RBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOd0I7QUFDSTtBQUNBO0FBQzVCO0FBQ29CO0FBQ0YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9sYXlvdXQvLi9zcmMvY3NzL25vcm1hbGl6ZS5jc3M/NGM4YiIsIndlYnBhY2s6Ly9sYXlvdXQvLi9zcmMvY3NzL3N0eWxlLmNzcz82YjdiIiwid2VicGFjazovL2xheW91dC8uL3NyYy9jc3Mvc3R5bGVfOTkyLmNzcz80NWEyIiwid2VicGFjazovL2xheW91dC8uL3NyYy9qcy9mb3JtLmpzIiwid2VicGFjazovL2xheW91dC8uL3NyYy9qcy9tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vbGF5b3V0Ly4vc3JjL2pzL3RvZ2dsZU1lbnUuanMiLCJ3ZWJwYWNrOi8vbGF5b3V0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2xheW91dC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9sYXlvdXQvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2xheW91dC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2xheW91dC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2xheW91dC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCJjb25zdCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4tZm9ybScpXHJcblxyXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbi1mb3JtX19pbnB1dFtuYW1lPVwicGhvbmVcIl0nKS5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICB0aGlzLnZhbHVlID0gdGhpcy52YWx1ZS5yZXBsYWNlKC9bXjAtOStdL2csICcnKTtcclxufSk7XHJcblxyXG5pZiAoZm9ybSkge1xyXG4gICAgZm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCBhc3luYyBldmVudCA9PiB7XHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBjb25zdCBuYW1lQmxvY2sgPSBmb3JtLnF1ZXJ5U2VsZWN0b3IoJy5tYWluLWZvcm1fX2lucHV0W25hbWU9XCJuYW1lXCJdJylcclxuICAgICAgICBjb25zdCBwaG9uZUJsb2NrID0gZm9ybS5xdWVyeVNlbGVjdG9yKCcubWFpbi1mb3JtX19pbnB1dFtuYW1lPVwicGhvbmVcIl0nKVxyXG4gICAgICAgIGNvbnN0IG1lc3NhZ2VCbG9jayA9IGZvcm0ucXVlcnlTZWxlY3RvcignLm1haW4tZm9ybV9fdGV4dGFyZWFbbmFtZT1cIm1lc3NhZ2VcIl0nKVxyXG5cclxuXHJcbiAgICAgICAgaWYgKCFuYW1lQmxvY2sudmFsdWUubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIGFsZXJ0KCfQktC10LTQuNGC0LUg0LjQvNGPLicpXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICghcGhvbmVCbG9jay52YWx1ZS5sZW5ndGgpIHtcclxuICAgICAgICAgICAgYWxlcnQoJ9CS0LXQtNC40YLQtSDRgtC10LvQtdGE0L7QvS4nKVxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAobWVzc2FnZUJsb2NrLnZhbHVlLmxlbmd0aCA+IDIwMDApIHtcclxuICAgICAgICAgICAgYWxlcnQoJ9Cc0LDQutGB0LjQvNCw0LvRjNC90LDRjyDQtNC70LjQvdCwINGB0LjQvNCy0L7Qu9C+0LIgMjAwMCcpXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKGV2ZW50LmN1cnJlbnRUYXJnZXRzKTtcclxuXHJcbiAgICAgICAgZm9ybURhdGEuYXBwZW5kKCduYW1lJywgbmFtZUJsb2NrLnZhbHVlLnRyaW0oKSlcclxuICAgICAgICBmb3JtRGF0YS5hcHBlbmQoJ3Bob25lJywgcGhvbmVCbG9jay52YWx1ZS50cmltKCkpXHJcbiAgICAgICAgZm9ybURhdGEuYXBwZW5kKCdtZXNzYWdlJywgbWVzc2FnZUJsb2NrLnZhbHVlLnRyaW0oKSlcclxuICAgICAgICBmb3JtRGF0YS5hcHBlbmQoJ3N1Ym1pdCcsICcnKVxyXG5cclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaCgnLycsIHtcclxuICAgICAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgICAgICAgICAgYm9keTogZm9ybURhdGFcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgY29uc3QganNvbiA9IGF3YWl0IHJlcy5qc29uKCk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGpzb24pXHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpXHJcbiAgICAgICAgICAgIGFsZXJ0KCfQn9GA0L7QuNC30L7RiNC70LAg0L7RiNC40LHQutCwINC/0L7Qv9GA0L7QsdGD0LnRgtC1INC/0LXRgNC10LfQsNCz0YDRg9C30LjRgtGMINGB0YLRgNCw0L3QuNGG0YMuJylcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG59IiwiZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGZ1bmN0aW9uICgpIHtcclxuICAgIGNvbnN0IGZhcUl0ZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmZhcV9faXRlbScpO1xyXG5cclxuICAgIGZhcUl0ZW1zLmZvckVhY2goaXRlbSA9PiB7XHJcbiAgICAgICAgY29uc3QgaGVhZGVyID0gaXRlbS5xdWVyeVNlbGVjdG9yKCcuZmFxX19pdGVtLWNvbnRhaW5lcicpO1xyXG4gICAgICAgIGNvbnN0IGFuc3dlciA9IGl0ZW0ucXVlcnlTZWxlY3RvcignLmZhcV9fYW5zd2VyJyk7XHJcbiAgICAgICAgY29uc3QgdG9nZ2xlSWNvbiA9IGl0ZW0ucXVlcnlTZWxlY3RvcignLmZhcV9fdG9nZ2xlJyk7XHJcbiAgICAgICAgaWYgKCFoZWFkZXIgfHwgIWFuc3dlciB8fCAhdG9nZ2xlSWNvbikgcmV0dXJuO1xyXG4gICAgICAgIGhlYWRlci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgaWYgKGl0ZW0uY2xhc3NMaXN0LmNvbnRhaW5zKCdhY3RpdmUnKSkge1xyXG4gICAgICAgICAgICAgICAgc2xpZGVVcChhbnN3ZXIsIDMwMCk7XHJcbiAgICAgICAgICAgICAgICBpdGVtLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xyXG4gICAgICAgICAgICAgICAgdG9nZ2xlSWNvbi5zdHlsZS50cmFuc2Zvcm0gPSAncm90YXRlKDBkZWcpJztcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmZhcV9faXRlbS5hY3RpdmUnKS5mb3JFYWNoKGFjdGl2ZUl0ZW0gPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGFjdGl2ZUl0ZW0gIT09IGl0ZW0pIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBhY3RpdmVBbnN3ZXIgPSBhY3RpdmVJdGVtLnF1ZXJ5U2VsZWN0b3IoJy5mYXFfX2Fuc3dlcicpO1xyXG4gICAgICAgICAgICAgICAgICAgIHNsaWRlVXAoYWN0aXZlQW5zd2VyLCAzMDApO1xyXG4gICAgICAgICAgICAgICAgICAgIGFjdGl2ZUl0ZW0uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgYWN0aXZlSXRlbS5xdWVyeVNlbGVjdG9yKCcuZmFxX190b2dnbGUnKS5zdHlsZS50cmFuc2Zvcm0gPSAncm90YXRlKDBkZWcpJztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBzbGlkZURvd24oYW5zd2VyLCAzMDApO1xyXG4gICAgICAgICAgICBpdGVtLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xyXG4gICAgICAgICAgICB0b2dnbGVJY29uLnN0eWxlLnRyYW5zZm9ybSA9ICdyb3RhdGUoNDVkZWcpJztcclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG5cclxuICAgIGZ1bmN0aW9uIHNsaWRlRG93bihlbGVtZW50LCBkdXJhdGlvbikge1xyXG4gICAgICAgIGVsZW1lbnQuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcbiAgICAgICAgY29uc3QgaGVpZ2h0ID0gZWxlbWVudC5zY3JvbGxIZWlnaHQ7XHJcbiAgICAgICAgZWxlbWVudC5zdHlsZS5vdmVyZmxvdyA9ICdoaWRkZW4nO1xyXG4gICAgICAgIGVsZW1lbnQuc3R5bGUuaGVpZ2h0ID0gJzBweCc7XHJcbiAgICAgICAgZWxlbWVudC5zdHlsZS50cmFuc2l0aW9uID0gYGhlaWdodCAke2R1cmF0aW9ufW1zIGVhc2Utb3V0YDtcclxuXHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgIGVsZW1lbnQuc3R5bGUuaGVpZ2h0ID0gYCR7aGVpZ2h0fXB4YDtcclxuICAgICAgICB9LCAxMCk7XHJcblxyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICBlbGVtZW50LnN0eWxlLmhlaWdodCA9ICcnO1xyXG4gICAgICAgICAgICBlbGVtZW50LnN0eWxlLm92ZXJmbG93ID0gJyc7XHJcbiAgICAgICAgICAgIGVsZW1lbnQuc3R5bGUudHJhbnNpdGlvbiA9ICcnO1xyXG4gICAgICAgIH0sIGR1cmF0aW9uICsgMTApO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHNsaWRlVXAoZWxlbWVudCwgZHVyYXRpb24pIHtcclxuICAgICAgICBjb25zdCBoZWlnaHQgPSBlbGVtZW50LnNjcm9sbEhlaWdodDtcclxuICAgICAgICBlbGVtZW50LnN0eWxlLm92ZXJmbG93ID0gJ2hpZGRlbic7XHJcbiAgICAgICAgZWxlbWVudC5zdHlsZS5oZWlnaHQgPSBgJHtoZWlnaHR9cHhgO1xyXG4gICAgICAgIGVsZW1lbnQuc3R5bGUudHJhbnNpdGlvbiA9IGBoZWlnaHQgJHtkdXJhdGlvbn1tcyBlYXNlLW91dGA7XHJcblxyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICBlbGVtZW50LnN0eWxlLmhlaWdodCA9ICcwcHgnO1xyXG4gICAgICAgIH0sIDEwKTtcclxuXHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgIGVsZW1lbnQuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgICAgICAgZWxlbWVudC5zdHlsZS5oZWlnaHQgPSAnJztcclxuICAgICAgICAgICAgZWxlbWVudC5zdHlsZS5vdmVyZmxvdyA9ICcnO1xyXG4gICAgICAgICAgICBlbGVtZW50LnN0eWxlLnRyYW5zaXRpb24gPSAnJztcclxuICAgICAgICB9LCBkdXJhdGlvbiArIDEwKTtcclxuICAgIH1cclxufSk7IiwiY29uc3QgYnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvZ2dsZS1tZW51X19idG4nKVxyXG5cclxuaWYoYnRuKSB7XHJcbiAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0b29nbGVNZW51KVxyXG59XHJcblxyXG5mdW5jdGlvbiB0b29nbGVNZW51IChldmVudCkge1xyXG4gICAgY29uc3QgdG9nZ2xlTWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b2dnbGUtbWVudV9fYm9keScpXHJcblxyXG4gICAgZXZlbnQuY3VycmVudFRhcmdldC5jbGFzc0xpc3QudG9nZ2xlKCd0b2dnbGUtbWVudV9fYnRuLS1hY3RpdmUnKVxyXG5cclxuICAgIGlmKHRvZ2dsZU1lbnUpIHtcclxuICAgICAgICB0b2dnbGVNZW51LmNsYXNzTGlzdC50b2dnbGUoJ3RvZ2dsZS1tZW51X19ib2R5LS1hY3RpdmUnKVxyXG4gICAgfVxyXG59XHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgXCIuL2Nzcy9zdHlsZS5jc3NcIlxyXG5pbXBvcnQgXCIuL2Nzcy9zdHlsZV85OTIuY3NzXCJcclxuaW1wb3J0IFwiLi9jc3Mvbm9ybWFsaXplLmNzc1wiXHJcblxyXG5pbXBvcnQgJy4vanMvbW9kdWxlJ1xyXG5pbXBvcnQgJy4vanMvZm9ybSdcclxuaW1wb3J0ICcuL2pzL3RvZ2dsZU1lbnUnIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9