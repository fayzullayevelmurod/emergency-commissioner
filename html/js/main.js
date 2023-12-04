let burger_btn = document.querySelector('.burger_btn');
let menu = document.querySelector('.menu');
let menu_close = document.querySelector('.menu_close');

burger_btn.addEventListener('click', () => {
    menu.classList.toggle('active');
});

menu_close.addEventListener('click', () => {
    menu.classList.remove('active')
})

let init = false;
let example_card_1;
let example = document.querySelector('#examples')

if (example) {
    function swiperCard() {
        if (window.innerWidth <= 992) {
            if (!init) {
                init = true;
                example_card_1 = new Swiper("#examples .card_1", {
                    slidesPerView: 1.1,
                    centeredSlides: true,
                    spaceBetween: 11,
                    loop: true,
                    pagination: {
                        el: ".example_card_1_pagination",
                        clickable: true,
                    },
                    breakpoints: {
                        500: {
                            slidesPerView: 2,
                        }
                    }
                });
            }
        } else if (init) {
            example_card_1.destroy();
            init = false;
        }
    }
    swiperCard();
    window.addEventListener("resize", swiperCard);

    let example_card_2_wrappers = document.querySelectorAll('#examples .card_wrapper .card_item');
    example_card_2_wrappers.forEach(item => {
        let slide = item.querySelector('.card_2')
        let paginate = item.querySelector('.example_card_2_pagination')
        let card_2 = new Swiper(slide, {
            slidesPerView: 1,
            spaceBetween: 0,
            pagination: {
                el: paginate,
                clickable: true,
            },
        });
    })
}

let init2 = false;
let scheme_work_1;
let example_2 = document.querySelector('.scheme_work')

if (example_2) {
    function swiperCard2() {
        if (window.innerWidth <= 992) {
            if (!init2) {
                init2 = true;
                scheme_work_1 = new Swiper(".scheme_work .sheme_work_slider", {
                    slidesPerView: 1.1,
                    centeredSlides: true,
                    spaceBetween: 10,
                    loop: true,
                    pagination: {
                        el: ".scheme_work_1_pagination",
                        clickable: true,
                    },
                    breakpoints: {
                        500: {
                            slidesPerView: 2,
                        }
                    }
                });
            }
        } else if (init2) {
            scheme_work_1.destroy();
            init2 = false;
        }
    }
    swiperCard2();
    window.addEventListener("resize", swiperCard2);
}

let real_company = document.querySelector('.real_company_cards')

if (real_company) {
    let real_company_cards = new Swiper(real_company, {
        slidesPerView: 1.1,
        spaceBetween: 10,
        loop: true,
        pagination: {
            el: ".real_company_cards_pagination",
            clickable: true,
        },
        breakpoints: {
            992: {
                spaceBetween: 44,
                slidesPerView: 3,
                loop: false,
            }
        }
    })
}

let init3 = false;
let scheme_work_3;
let example_3 = document.querySelector('.index_card_1')

if (example_3) {
    function swiperCard3() {
        if (window.innerWidth <= 992) {
            if (!init3) {
                init3 = true;
                scheme_work_3 = new Swiper(".accident .index_card_1", {
                    slidesPerView: 1.1,
                    centeredSlides: true,
                    spaceBetween: 10,
                    loop: true,
                    pagination: {
                        el: ".scheme_work_3_pagination",
                        clickable: true,
                    },
                    breakpoints: {
                        500: {
                            slidesPerView: 2,
                        }
                    }
                });
            }
        } else if (init3) {
            scheme_work_3.destroy();
            init2 = false;
        }
    }
    swiperCard3();
    window.addEventListener("resize", swiperCard3);
}

let assistance = document.querySelector('.assistance_slider');
if (assistance) {
    let assist = new Swiper(assistance, {
        slidesPerView: 1.2,
        spaceBetween: 20,
        centeredSlides: true,
        pagination: {
            el: ".assistance_slider_pagination",
            clickable: true,
        },
        breakpoints: {
            992: {
                slidesPerView: 5,
                centeredSlides: false,
            },

            768: {
                slidesPerView: 3,
                centeredSlides: false,
            }
        }
    })
}