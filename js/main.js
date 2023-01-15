const offerCont = document.querySelector(".offer__content");
const btns = document.querySelectorAll(".offer__btn");
const tabs = document.querySelectorAll(".offer__item");



offerCont.addEventListener("click", function (e) {
    const id = e.target.dataset.id;
    if (id) {
        // remove selected from other buttons
        btns.forEach(function (btn) {
            btn.classList.remove("active");
        });
        e.target.classList.add("active");
        // hide other tabs
        tabs.forEach(function (article) {
            article.classList.remove("active");
        });
        const element = document.getElementById(id);
        element.classList.add("active");
    }
});