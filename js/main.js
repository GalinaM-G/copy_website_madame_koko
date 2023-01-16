// tabs

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


const swiper = new Swiper('.swiper', {
    
    direction: 'horizontal',
    loop: true,
    spaceBetween: 10,
    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 1,
            
        },
        // when window width is >= 480px
        480: {
            slidesPerView: 2,
        },
        // when window width is >= 640px
        640: {
            slidesPerView: 5,
        }
    },
   
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

});

