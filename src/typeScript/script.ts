document.addEventListener("DOMContentLoaded", () => {
    var accordions: NodeListOf<HTMLElement> = document.querySelectorAll(".accordion");

    accordions.forEach((accordion: HTMLElement) => {
        var el: HTMLElement = accordion.querySelector(".accordion__intro") as HTMLElement;


        el.addEventListener("click", () => {
            if (!accordion.classList.contains("active")) {
                accordion.classList.toggle("active");
                openAccordion(accordion);
            } else {
                accordion.classList.toggle("active");
                closeAccordion(accordion);
            }

        })
    });

    const openAccordion = (accordion: HTMLElement) => {
        const content: HTMLElement = accordion.querySelector(".accordion__content") as HTMLElement;
        content.style.maxHeight = content.scrollHeight + "px";
    };

    const closeAccordion = (accordion: HTMLElement) => {
        const content: HTMLElement = accordion.querySelector(".accordion__content") as HTMLElement;
        content.style.maxHeight = 0 + "px";
    };


    let menu: HTMLElement = document.querySelector(".menu") as HTMLElement;
    let burger: HTMLElement = document.querySelector(".burger") as HTMLElement;

    burger.addEventListener("click", () => {

        if (menu.classList.contains("active")) {
            document.body.style.overflow = "scroll";
        } else {
            document.body.style.overflow = "hidden";
        }
        menu.classList.toggle("active");
        menu.style.overflow = "scroll";
        burger.classList.toggle("active");
    });
});