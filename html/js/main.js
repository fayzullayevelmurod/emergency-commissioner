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