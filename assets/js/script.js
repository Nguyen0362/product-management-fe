const htmlsH4 = document.querySelector(".header-menu .header-menu__title");
const displayNone = document.querySelector(".header-menu .display-none");

if (htmlsH4) {
    htmlsH4.addEventListener("click", () => {
        if (window.getComputedStyle(displayNone).display === "none") {
            displayNone.style.display = "block";
        } else {
            displayNone.style.display = "none";
        }
    })
}

// header top fixed
const headerTop = document.querySelector('.header-top');

if (headerTop) {
    const menuOffset = headerTop.offsetTop;

    window.addEventListener('scroll', () => {
        const screenWidth = window.innerWidth;
        if (screenWidth < parseInt(992)) {
            if (window.pageYOffset > menuOffset) {
                headerTop.classList.add('header-top__fixed');
                headerTop.classList.add('animate__animated');
                headerTop.classList.add('animate__fadeInDown');
            } else {
                headerTop.classList.remove('header-top__fixed');
                headerTop.classList.remove('animate__animated');
                headerTop.classList.remove('animate__fadeInDown');
            }
        }
    });
}
// End header top fixed

// header menu fixed
const headerMenu = document.querySelector('.header-menu');

if (headerMenu) {
    const menuOffset = headerMenu.offsetTop;

    window.addEventListener('scroll', () => {
        const screenWidth = window.innerWidth;
        if (screenWidth > parseInt(992)) {
            if (window.pageYOffset > menuOffset) {
                headerMenu.classList.add('header-menu__fixed');
                headerMenu.classList.add('animate__animated');
                headerMenu.classList.add('animate__fadeInDown');
            } else {
                headerMenu.classList.remove('header-menu__fixed');
                headerMenu.classList.remove('animate__animated');
                headerMenu.classList.remove('animate__fadeInDown');
            }
        }
    });
}


// End header menu fixed

//AOS
AOS.init();
//End AOS

//off canvas
const offcanvasToggle = document.querySelectorAll(".offcanvas-toggle");

if (offcanvasToggle.length > 0) {
    const body = document.querySelector("body")
    const offCanvasOverplay = document.querySelector(".offcanvas-overlay");
    const offCanvasMobileMenu = document.querySelector(".offcanvas-mobile-menu");
    const offCanvasMobileWishlist = document.querySelector(".offcanvas-mobile-wishlist");
    const offCanvasMobileCart = document.querySelector(".offcanvas-mobile-cart");
    const offcanvaClose = document.querySelectorAll(".offcanva-close");

    offcanvasToggle.forEach(element => {
        if (element.classList.contains("offcanvas-menu")) {
            element.addEventListener("click", () => {
                body.classList.add("offcanvas-hidden");
                if (window.getComputedStyle(offCanvasOverplay).display === "none") {
                    offCanvasOverplay.style.display = "block";
                }
                if (offCanvasMobileMenu) {
                    offCanvasMobileMenu.classList.add("offcanvas-open")
                }
            });
        } else if (element.classList.contains("offcanvas-wishlist")) {
            element.addEventListener("click", () => {
                body.classList.add("offcanvas-hidden");
                if (window.getComputedStyle(offCanvasOverplay).display === "none") {
                    offCanvasOverplay.style.display = "block";
                }
                if (offCanvasMobileWishlist) {
                    offCanvasMobileWishlist.classList.add("offcanvas-open")
                }
            });
        } else if (element.classList.contains("offcanvas-cart")) {
            element.addEventListener("click", () => {
                body.classList.add("offcanvas-hidden");
                if (window.getComputedStyle(offCanvasOverplay).display === "none") {
                    offCanvasOverplay.style.display = "block";
                }
                if (offCanvasMobileCart) {
                    offCanvasMobileCart.classList.add("offcanvas-open")
                }
            });
        }
    });


    offcanvaClose.forEach(element => {
        element.addEventListener("click", () => {
            body.classList.remove("offcanvas-hidden");
            if (window.getComputedStyle(offCanvasOverplay).display === "block") {
                offCanvasOverplay.style.display = "none";
                offCanvasMobileMenu.classList.remove("offcanvas-open")
                offCanvasMobileWishlist.classList.remove("offcanvas-open")
                offCanvasMobileCart.classList.remove("offcanvas-open")
            }
        })
    });
}
//end off canvas

//swiper
var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    autoplay: {
        delay: 4000,
        disableOnInteraction: true
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    effect: "fade",
    fadeEffect: {
        crossFade: true, // Tạo sự mượt mà giữa các slide
    },
    speed: 800,
    on: {
        slideChange: function () {
            let slides = this.slides;
            // Reset animation cho tất cả slide

            slides.forEach(slide => {
                const title = slide.querySelector('.slider-area .title');

                if (title.classList.contains("animate__fadeInDown")) {
                    slide.querySelector('.slider-area .title').classList.remove('animate__fadeInDown');
                    slide.querySelector('.slider-area .desc').classList.remove('animate__fadeInLeft');
                    slide.querySelector('.slider-area .button').classList.remove('animate__zoomIn');
                } else if (title.classList.contains("animate__bounceInDown")) {
                    slide.querySelector('.slider-area .title').classList.remove('animate__bounceInDown');
                    slide.querySelector('.slider-area .desc').classList.remove('animate__bounceInDown');
                    slide.querySelector('.slider-area .button').classList.remove('animate__zoomIn');
                } else if (title.classList.contains("animate__fadeInUp")) {
                    slide.querySelector('.slider-area .title').classList.remove('animate__fadeInUp');
                    slide.querySelector('.slider-area .desc').classList.remove('animate__fadeInRight');
                    slide.querySelector('.slider-area .button').classList.remove('animate__zoomIn');
                }
            });

            let currentSlide = this.slides[this.activeIndex];
            const sliderPages = currentSlide.getAttribute('aria-label');
            // Thêm lại hiệu ứng animation cho slide hiện tại

            if (sliderPages == "1 / 3") {
                currentSlide.querySelector('.slider-area .title').classList.add('animate__fadeInDown');
                currentSlide.querySelector('.slider-area .desc').classList.add('animate__fadeInLeft');
                currentSlide.querySelector('.slider-area .button').classList.add('animate__zoomIn');
            } else if (sliderPages == "2 / 3") {
                currentSlide.querySelector('.slider-area .title').classList.add('animate__bounceInDown');
                currentSlide.querySelector('.slider-area .desc').classList.add('animate__bounceInDown');
                currentSlide.querySelector('.slider-area .button').classList.add('animate__zoomIn');
            } else if (sliderPages == "3 / 3") {
                currentSlide.querySelector('.slider-area .title').classList.add('animate__fadeInUp');
                currentSlide.querySelector('.slider-area .desc').classList.add('animate__fadeInRight');
                currentSlide.querySelector('.slider-area .button').classList.add('animate__zoomIn');
            }
        }
    }
});

swiper.emit('slideChange');
//swipper

//swipper feature
var swiperFeature = new Swiper(".mySwiper-feature", {
    slidesPerView: 2,
    breakpoints: {
        991: {
            slidesPerView: 3,
        },
        480: {
            slidesPerView: 2,
        },
        0:{
            slidesPerView: 1,
        }
    },
    centeredSlides: false,
    spaceBetween: 0,
    speed: 1500,
    navigation: {
        nextEl: ".slick-button-next",
        prevEl: ".slick-button-prev",
    },
});

//End swipper feature

//swipper hotDeals
var swiperFeature = new Swiper(".mySwiper-hotDeals", {
    spaceBetween: 0,
    speed: 1000,
    navigation: {
        nextEl: ".hotDeals-button-next",
        prevEl: ".hotDeals-button-prev",
    },
});
//End swipper hotDeals

//swipper best seller
var swiperBestSeller = new Swiper(".mySwiper-best-seller", {
    spaceBetween: 0,
    speed: 2000,
    navigation: {
        nextEl: ".best-seller-button-next",
        prevEl: ".best-seller-button-prev",
    },
});
//End swipper best seller

//swipper arrival
var swiperTab1 = new Swiper(".mySwiper-tab-1", {
    slidesPerView: 4,
    breakpoints: {
        991: {
            slidesPerView: 4,
        },

        767: {
            slidesPerView: 3,
        },
        576: {
            slidesPerView: 2,
        },
        0:{
            slidesPerView: 1,
        }
    },
    spaceBetween: 0,
    speed: 2000,
    navigation: {
        nextEl: ".tab1-button-next",
        prevEl: ".tab1-button-prev",
    },
});

var swiperTab2 = new Swiper(".mySwiper-tab-2", {
    slidesPerView: 4,
    breakpoints: {
        991: {
            slidesPerView: 4,
        },

        767: {
            slidesPerView: 3,
        },
        576: {
            slidesPerView: 2,
        },
        0:{
            slidesPerView: 1,
        }
    },
    spaceBetween: 0,
    speed: 2000,
    navigation: {
        nextEl: ".tab2-button-next",
        prevEl: ".tab2-button-prev",
    },
});

var swiperTab3 = new Swiper(".mySwiper-tab-3", {
    slidesPerView: 4,
    breakpoints: {
        991: {
            slidesPerView: 4,
        },

        767: {
            slidesPerView: 3,
        },
        576: {
            slidesPerView: 2,
        },
        0:{
            slidesPerView: 1,
        }
    },
    spaceBetween: 0,
    speed: 2000,
    navigation: {
        nextEl: ".tab3-button-next",
        prevEl: ".tab3-button-prev",
    },
});
//End swipper arrival

//swipper category
var swiperCategory1 = new Swiper(".mySwiper-category-1", {
    spaceBetween: 0,
    speed: 1000,
    navigation: {
        nextEl: ".category1-button-next",
        prevEl: ".category1-button-prev",
    },
});

var swiperCategory2 = new Swiper(".mySwiper-category-2", {
    spaceBetween: 0,
    speed: 1000,
    navigation: {
        nextEl: ".category2-button-next",
        prevEl: ".category2-button-prev",
    },
});

var swiperCategory3 = new Swiper(".mySwiper-category-3", {
    spaceBetween: 0,
    speed: 1000,
    navigation: {
        nextEl: ".category3-button-next",
        prevEl: ".category3-button-prev",
    },
});
//End swipper category

//swipper brand
var swiperBrand = new Swiper(".mySwiper-brand", {
    slidesPerView: 4,
    breakpoints: {
        991: {
            slidesPerView: 4,
        },

        767: {
            slidesPerView: 3,
        },
        400: {
            slidesPerView: 2,
        },
        0:{
            slidesPerView: 1,
        }
    },
    spaceBetween: 0,
    speed: 2000,
});
//End swipper brand

//swipper popular
var swiperPopular = new Swiper(".mySwiper-popular", {
    slidesPerView: 4,
    breakpoints: {
        991: {
            slidesPerView: 4,
        },

        767: {
            slidesPerView: 3,
        },
        490: {
            slidesPerView: 2,
        },
        0:{
            slidesPerView: 1,
        }
    },
    spaceBetween: 30,
    speed: 2000,
    navigation: {
        nextEl: ".popular-button-next",
        prevEl: ".popular-button-prev",
    },
});
//End swipper popular

//swipper footer
var swiperFooterTop = new Swiper(".mySwiper-footer-top", {
    spaceBetween: 0,
    speed: 1000,
    navigation: {
        nextEl: ".footer-top-button-next",
        prevEl: ".footer-top-button-prev",
    },
});
//End swipper footer

//Dừng autoplay khi hover
const swiperContainer = document.querySelector('.mySwiper');
swiperContainer.addEventListener('mouseenter', () => {
    swiper.autoplay.stop();
});

swiperContainer.addEventListener('mouseleave', () => {
    swiper.autoplay.start();
});
//Hết dừng autoplay khi hover
//End swiper

// arrival tab
const navLink = document.querySelectorAll(".arrival-area .nav-tabs .nav-link");
const tabPane = document.querySelectorAll(".arrival-area .tab-content .tab-pane");
if(navLink.length > 0 && tabPane.length > 0){
    navLink.forEach(item => {
        item.addEventListener("click", (event) => {
            event.preventDefault();
            
            navLink.forEach(item => {
                if(item.classList.contains("active")){
                    item.classList.remove("active");
                }
            })

            tabPane.forEach(element => {
                if(element.classList.contains("active")){
                    element.classList.remove("active");
                }
            })

            tabPane.forEach(element => {
                const itemId = item.id;
                if(element.id == itemId){
                    element.classList.add("active");
                }
            })

            if(!item.classList.contains("active")){
                item.classList.add("active");
            }
        })
    })
}
// End arrival tab