document.addEventListener("DOMContentLoaded", function () {
    var accordions = document.querySelectorAll(".accordion");
    accordions.forEach(function (accordion) {
        var el = accordion.querySelector(".accordion__intro");
        el.addEventListener("click", function () {
            if (!accordion.classList.contains("active")) {
                accordion.classList.toggle("active");
                openAccordion(accordion);
            }
            else {
                accordion.classList.toggle("active");
                closeAccordion(accordion);
            }
        });
    });
    var openAccordion = function (accordion) {
        var content = accordion.querySelector(".accordion__content");
        content.style.maxHeight = content.scrollHeight + "px";
    };
    var closeAccordion = function (accordion) {
        var content = accordion.querySelector(".accordion__content");
        content.style.maxHeight = 0 + "px";
    };
    var menu = document.querySelector(".menu");
    var burger = document.querySelector(".burger");
    burger.addEventListener("click", function () {
        if (menu.classList.contains("active")) {
            document.body.style.overflow = "scroll";
        }
        else {
            document.body.style.overflow = "hidden";
        }
        menu.classList.toggle("active");
        menu.style.overflow = "scroll";
        burger.classList.toggle("active");
    });
});
