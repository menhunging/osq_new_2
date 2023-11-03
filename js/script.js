gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

addEventListener("scroll", (event) => {
  currentScroll = $(window).scrollTop();

  // console.log(currentScroll);

  if ($(window).width() >= 1200) {
    if ($(".indexPage").length > 0) {
      let invisPosition = 6500;

      if ($(window).width() < 1440) {
        invisPosition = 6500;
      }

      if (currentScroll > invisPosition) {
        $(".incision").addClass("visible");
      } else {
        $(".incision").removeClass("visible");
      }
    }
  }

  if ($(".btn-top-page").length > 0) {
    let btnTopPage = $(".btn-top-page");
    let scrollWhich = $(".footer").offset().top;

    if (currentScroll > scrollWhich - 1000) {
      !btnTopPage.hasClass("show") && btnTopPage.addClass("show");
    } else {
      btnTopPage.hasClass("show") && btnTopPage.removeClass("show");
    }
  }
});

$(document).ready(function () {
  if ($("[data-aos]").length > 0) {
    if ($(window).width() >= 1200) {
      $("[data-aos]").each((i, el) => {
        AOS.init({
          offset: 0,
          duration: 1500,
          // once: true,
        });
      });
    } else {
      $("[data-aos]").map((i, el) => {
        $(el).removeAttr("data-aos");
      });
    }
  }

  if ($(".grettings__slider").length > 0) {
    const swiper = new Swiper(".grettings__slider", {
      slidesPerView: 1,
      slidesPerGroup: 1,
      loop: true,
      effect: "cards",
      speed: 1000,
      autoplay: {
        delay: 4000,
        disableOnInteraction: false,
      },
      navigation: {
        nextEl: ".grettings .swiper-button-next",
        prevEl: ".grettings .swiper-button-prev",
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });

    $(".grettings__slider .swiper-slide").on("click", function () {
      let index = $(this).index();
      swiper.slideTo(index);
    });
  }

  if ($(".typeFood__slider").length > 0) {
    const swiper = new Swiper(".typeFood__slider", {
      slidesPerView: 1,
      slidesPerGroup: 1,
      loop: true,
      effect: "cards",
      navigation: {
        nextEl: ".typeFood__slider__next",
        prevEl: ".typeFood__slider__prev",
      },
      pagination: {
        el: ".typeFood__slider__pagination",
        type: "progressbar",
      },
      breakpoints: {
        0: {
          slidesPerView: 1,
          slidesPerGroup: 1,
          effect: "flip",
          speed:600,
        },
        1024: {
          slidesPerView: 1,
          slidesPerGroup: 1,
          effect: "cards",
        },
      },
    });
  }

  if ($(".typeFood-picture__slider").length > 0) {
    const sliders = document.querySelectorAll(".typeFood-picture__slider");

    let mySwipers = [];

    function sliderinit() {
      sliders.forEach((slider, index) => {
        if (!slider.swiper) {
          mySwipers[index] = new Swiper(slider, {
            slidesPerView: 1,
            slidesPerGroup: 1,
            navigation: {
              nextEl: ".typeFood-picture__slider .swiper-button-next",
              prevEl: ".typeFood-picture__slider .swiper-button-prev",
            },
            pagination: {
              el: ".typeFood-picture__slider .swiper-pagination",
              type: "fraction",
              renderFraction: function (currentClass, totalClass) {
                return (
                  '<span class="' +
                  currentClass +
                  '"></span>' +
                  " из " +
                  '<span class="' +
                  totalClass +
                  '"></span>'
                );
              },
            },
            on: {
              init: function (swiper) {},
            },
            breakpoints: {},
          });
        } else {
          return;
        }
      });
    }

    sliders.length && sliderinit();
  }

  if ($(".sertificate__slider").length > 0) {
    const swiper = new Swiper(".sertificate__slider", {
      spaceBetween: 80,
      autoHeight: true,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
      loop: true,
      centeredSlides: true,
      slidesPerView: "auto",
      navigation: {
        nextEl: ".sertificate__slider .swiper-button-next",
        prevEl: ".sertificate__slider .swiper-button-prev",
      },
      pagination: {
        el: ".sertificate__slider .swiper-pagination",
        type: "progressbar",
      },
      on: {
        init: function (swiper) {
          setTimeout(function () {
            swiper.slideTo(2);
            $(".sertificate__slider").addClass("init");
          }, 600);
        },
      },
    });
  }

  if ($(".catalog-main__slider").length > 0) {
    const swiper = new Swiper(".catalog-main__slider", {
      loopedSlides: 4,
      slidesPerView: 5,
      loop: true,
      spaceBetween: 0,
      centeredSlides: true,
      initialSlide: 2,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
      on: {
        init: function () {
          let title = $(".catalog-main__slider .swiper-slide")
            .eq(5)
            .attr("data-title");
          let text = $(".catalog-main__slider .swiper-slide")
            .eq(5)
            .attr("data-text");

          changeTextCatalog(title, text);
        },
      },
      effect: "creative",
      // slideToClickedSlide: true,
      creativeEffect: {
        prev: {
          translate: ["-200%", 25, 0],
          rotate: [0, 0, 0],
        },
        next: {
          translate: ["200%", 25, 0],
          rotate: [0, 0, 0],
        },
      },
      navigation: {
        nextEl: ".catalog-main__slider .swiper-button-next",
        prevEl: ".catalog-main__slider .swiper-button-prev",
      },
      pagination: {
        el: ".catalog-main__slider .swiper-pagination",
        type: "progressbar",
      },
      breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        992: {
          slidesPerView: 5,
          spaceBetween: 0,
        },
      },
    });

    $("body").on("click", ".catalog-main__slider .swiper-slide", function (e) {
      if ($(this).hasClass("swiper-slide-next")) {
        e.preventDefault();
        $(".catalog-main__slider .swiper-button-next").trigger("click");
      } else if ($(this).hasClass("swiper-slide-prev")) {
        e.preventDefault();
        $(".catalog-main__slider .swiper-button-prev").trigger("click");
      } else if ($(this).prev().hasClass("swiper-slide-next")) {
        e.preventDefault();
        $(".catalog-main__slider .swiper-button-next").trigger("click");
        setTimeout(function (e) {
          $(".catalog-main__slider .swiper-button-next").trigger("click");
        }, 400);
      } else if ($(this).next().hasClass("swiper-slide-prev")) {
        e.preventDefault();
        $(".catalog-main__slider .swiper-button-prev").trigger("click");
        setTimeout(function (e) {
          $(".catalog-main__slider .swiper-button-prev").trigger("click");
        }, 400);
      }
    });

    swiper.on("init", function () {});

    swiper.on("slideChange", function () {
      let title = $(".catalog-main__slider .swiper-slide")
        .eq(swiper.activeIndex)
        .attr("data-title");
      let text = $(".catalog-main__slider .swiper-slide")
        .eq(swiper.activeIndex)
        .attr("data-text");

      changeTextCatalog(title, text);
    });
  }

  if ($(".production__slider").length > 0) {
    const swiper = new Swiper(".production__slider", {
      slidesPerView: 1,
      autoHeight: true,
      navigation: {
        nextEl: ".production__slider .swiper-button-next",
        prevEl: ".production__slider .swiper-button-prev",
      },
      pagination: {
        el: ".production__slider .swiper-pagination",
        type: "progressbar",
      },
    });
  }

  if ($(".production-page__slider").length > 0) {
    const swiper = new Swiper(".production-page__slider", {
      slidesPerView: 1,
      autoHeight: true,
      effect: "fade",
      fadeEffect: { crossFade: true },
      navigation: {
        nextEl: ".production-page__sliderWrapper .swiper-button-next",
        prevEl: ".production-page__sliderWrapper .swiper-button-prev",
      },
      pagination: {
        el: ".production-page__slider .swiper-pagination",
        type: "progressbar",
      },
    });
  }

  if ($(".delivery-slider").length > 0) {
    const swiper = new Swiper(".delivery-slider", {
      slidesPerView: 1,
      autoHeight: true,
      navigation: {
        nextEl: ".delivery-slider .swiper-button-next",
        prevEl: ".delivery-slider .swiper-button-prev",
      },
      pagination: {
        el: ".delivery-slider .swiper-pagination",
        type: "progressbar",
      },
    });
  }

  if ($(".events-slider").length > 0) {
    const swiper = new Swiper(".events-slider", {
      slidesPerView: 1,
      autoHeight: true,
      effect: "fade",
      fadeEffect: { crossFade: true },
      navigation: {
        nextEl: ".events-slider__wrap .swiper-button-next",
        prevEl: ".events-slider__wrap .swiper-button-prev",
      },
      pagination: {
        el: ".events-slider .swiper-pagination",
        type: "progressbar",
      },
    });
  }

  if ($(".slider-simple").length > 0) {
    const swiper = new Swiper(".slider-simple", {
      slidesPerView: 1,
      autoHeight: true,
      effect: "fade",
      fadeEffect: { crossFade: true },
      navigation: {
        nextEl: ".slider-simple__wrap .swiper-button-next",
        prevEl: ".slider-simple__wrap .swiper-button-prev",
      },
      pagination: {
        el: ".slider-simple .swiper-pagination",
        type: "progressbar",
      },
    });
  }

  if ($(".universal-containers").length > 0) {
    const swiper = new Swiper(".universal-containers__slider", {
      slidesPerView: 1,
      autoHeight: true,
      initialSlide: 1,
      navigation: {
        nextEl: ".universal-containers .swiper-button-next",
        prevEl: ".universal-containers .swiper-button-prev",
      },
      pagination: {
        el: ".universal-containers__slider .swiper-pagination",
        type: "fraction",
        renderFraction: function (currentClass, totalClass) {
          return (
            '<span class="' +
            currentClass +
            '"></span>' +
            " из " +
            '<span class="' +
            totalClass +
            '"></span>'
          );
        },
      },
    });

    swiper.on("slideChange", function () {
      $(".universal-containers__item img").map(function () {
        let url = $(this).attr("data-picture-dafault");
        $(this).attr("src", url);
      });
    });

    $(".universal-gallery__item").hover(function () {
      let url = $(this).attr("data-picture");

      $(this)
        .parents(".universal-containers__item")
        .find("img")
        .attr("src", url);
    });
  }

  if ($(".reviews-product").length > 0) {
    const swiper = new Swiper(".reviews-product__slider", {
      slidesPerView: 1,
      autoHeight: true,
      navigation: {
        nextEl: ".reviews-product .swiper-button-next",
        prevEl: ".reviews-product .swiper-button-prev",
      },
      pagination: {
        el: ".reviews-product__slider .swiper-pagination",
        type: "progressbar",
      },
    });
  }

  if ($(".gallery-slider").length > 0) {
    const swiper = new Swiper(".gallery-slider", {
      slidesPerView: 3,
      spaceBetween: 30,
      loop: true,
      navigation: {
        nextEl: ".reviews-product .swiper-button-next",
        prevEl: ".reviews-product .swiper-button-prev",
      },
      pagination: {
        el: ".reviews-product .swiper-pagination",
        type: "progressbar",
      },
      breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 20,
          autoHeight: true,
          loop: true,
        },
        640: {
          slidesPerView: 2,
          spaceBetween: 20,
          loop: true,
        },
        992: {
          slidesPerView: 3,
          spaceBetween: 20,
          loop: true,
        },
      },
    });
  }

  if ($(".catalog-invis__slider").length > 0) {
    const swiper = new Swiper(".catalog-invis__slider", {
      slidesPerView: 1,
      autoHeight: true,
      pagination: {
        el: ".catalog-invis__slider .swiper-pagination",
        type: "progressbar",
      },
    });
  }

  if ($(".eventList-small").length > 0) {
    const sliders = document.querySelectorAll(".eventList-small");

    let mySwipers = [];

    function sliderinit() {
      sliders.forEach((slider, index) => {
        if (!slider.swiper) {
          mySwipers[index] = new Swiper(slider, {
            slidesPerView: 4,
            slidesPerGroup: 1,
            spaceBetween: 37,
            autoHeight: true,
            on: {
              init: function (swiper) {},
            },
            breakpoints: {
              1024: {
                slidesPerView: 3,
                spaceBetween: 15,
              },
              1200: {
                slidesPerView: 4,
                spaceBetween: 15,
              },
              1440: {
                slidesPerView: 4,
                spaceBetween: 37,
              },
            },
          });
        } else {
          return;
        }
      });
    }

    sliders.length && sliderinit();
  }

  if ($(".product__picture").length > 0) {
    const swiperNavigation = new Swiper(".swiper-navigation", {
      loop: false,
      spaceBetween: 10,
      slidesPerView: 5,
      freeMode: true,
      loop: true,
      watchSlidesProgress: true,
      breakpoints: {
        0: {
          slidesPerView: 3,
        },
        480: {
          slidesPerView: 4,
        },
        640: {
          slidesPerView: 5,
        },
      },
    });

    const swiper = new Swiper(".product__picture__slider", {
      slidesPerView: 1,
      autoHeight: true,
      loop: true,
      navigation: {
        nextEl: ".product__picture .swiper-button-next",
        prevEl: ".product__picture .swiper-button-prev",
      },
      pagination: {
        el: ".product__picture .swiper-pagination",
        type: "fraction",
        renderFraction: function (currentClass, totalClass) {
          return (
            '<span class="' +
            currentClass +
            '"></span>' +
            " из " +
            '<span class="' +
            totalClass +
            '"></span>'
          );
        },
      },
      thumbs: {
        swiper: swiperNavigation,
      },
    });
  }

  if ($(".thisYear").length > 0) {
    let date = new Date();
    $(".thisYear").text(date.getFullYear());
  }

  if ($(".phone-input").length > 0) {
    $(".phone-input").map(function () {
      $(this).inputmask({
        mask: "+7(999) 999-99-99",
        placeholder: "*",
        showMaskOnHover: false,
        showMaskOnFocus: true,
        clearIncomplete: true,
      });
    });
  }

  if ($(".tabs").length > 0) {
    $(".tabs").tabslet({
      mouseevent: "click",
      attribute: "href",
      animation: true,
    });

    $(".tabs").on("_before", function () {
      if ($(".list-cites").length > 0) {
        isVisibleMapBlock();
      }
    });

    // исправление бага в chrome
    $(".tabs-links li").eq(0).find("a").trigger("click");

    $(".tabs").on("_after", function () {
      $(".tabs-body").removeClass("swiper-wait");
    });
  }

  if ($(".incision-adv__item").length > 0) {
    $(".incision-adv__item").on("click", function () {
      $(".incision-adv__item").removeClass("active");
      $(this).addClass("active");
    });
  }

  if ($("select").length > 0) {
    $("select").map(function () {
      if ($(this).attr("multiple")) {
        $(this).selectric({
          multiple: {
            separator: ", ",
            keepMenuOpen: true,
            maxLabelEntries: false,
          },
        });
      } else {
        $(this).selectric({
          onOpen: function () {},
          onChange: function (element) {
            if ($(element).attr("id") === "select-city") {
              if ($(element).val() === "Москва") {
                $(".google-map").stop().slideDown();
                $(".distr-section .contacts-map").stop().slideUp();
              } else {
                $(".google-map").stop().slideUp();
                $(".distr-section .contacts-map").stop().slideDown();
              }
            }
          },
          onClose: function () {},
        });
      }
    });
  }

  if ($(".distr-section .list-cites .btn").length > 0) {
    $(".distr-section .list-cites .btn").on("click", function () {
      $(".google-map").stop().slideDown();
      $(".distr-section .contacts-map").stop().slideUp();

      setTimeout(function () {
        scrollGoogleMap();
      }, 400);
    });

    function scrollGoogleMap() {
      let mapBlock = $(".google-map");
      $("html, body").animate({ scrollTop: mapBlock.offset().top }, 300);
      return false;
    }
  }

  if ($(".play-video").length > 0) {
    $(".play-video").on("click", function (e) {
      e.preventDefault();
      $(this).addClass("played");
      $(this).siblings("video").trigger("play");
      $(this).siblings("video")[0].setAttribute("controls", true);
    });
  }

  if ($(".modal").length > 0) {
    MicroModal.init({
      openTrigger: "data-modal",
      disableScroll: true,
      awaitOpenAnimation: true,
      awaitCloseAnimation: true,

      onShow: () => {
        $("body").addClass("modal-open");
      },

      onClose: () => {
        $("body").removeClass("modal-open");
      },
    });

    $("a[data-modal]").map(function () {
      $(this).click((e) => e.preventDefault());
    });
  }

  if ($(".btn-phone-add").length > 0) {
    $(".btn-phone-add").on("click", function (event) {
      event.preventDefault();

      let parents = $(this).parents(".input-list");
      let phones = parents.find(".phone-input");
      let id = phones.length + 1;

      let html = `<div class="input-wrapper">
      <input type="text" placeholder="Телефон*" class="phone-input" id='phone-${id}'>
      </div>`;

      parents
        .find(phones[phones.length - 1])
        .parents(".input-wrapper")
        .after(html);

      parents.find(`.phone-input`).map(function () {
        $(this).inputmask({
          mask: "+7(999) 999-99-99",
          placeholder: "*",
          showMaskOnHover: false,
          showMaskOnFocus: true,
          clearIncomplete: true,
        });
      });
    });
  }

  if ($(".our-brands__item").length > 0) {
    $(".our-brands__item").on("click", function () {
      if ($(this).hasClass("opened")) {
        close();
      } else {
        close();
        $(this).addClass("opened");
        $(this).find(".our-invis").stop().slideDown();
      }

      function close() {
        $(".our-brands__item").removeClass("opened");
        $(".our-invis").stop().slideUp("opened");
      }
    });
  }

  if ($(".loop").length > 0) {
    if ($(window).width() >= 1200) {
      $(".loop").map(function () {
        let url = $(this).attr("href");

        $(this).zoom({
          url: url,
          magnify: 1.2,
          // callback: function () {
          //   // $(this).colorbox({ href: this.src });
          // },
        });
      });
    }
  }

  if ($(".counter-box").length > 0) {
    if ($(window).width() > 768) {
      let show = true;
      let countbox = ".counter-box";

      $(window).on("scroll load resize", function () {
        if (!show) return false; // Отменяем показ анимации, если она уже была выполнена
        var w_top = $(window).scrollTop(); // Количество пикселей на которое была прокручена страница
        var e_top = $(countbox).offset().top; // Расстояние от блока со счетчиками до верха всего документа
        var w_height = $(window).height(); // Высота окна браузера
        var d_height = $(document).height(); // Высота всего документа
        var e_height = $(countbox).outerHeight(); // Полная высота блока со счетчиками
        if (
          w_top + 500 >= e_top ||
          w_height + w_top == d_height ||
          e_height + e_top < w_height
        ) {
          $(".benefits__number").css("opacity", "1");
          $(".about-numbers__list .num").spincrement({
            thousandSeparator: "",
            duration: 3000,
          });

          $(".possibilities .num").spincrement({
            thousandSeparator: "",
            duration: 5000,
          });

          show = false;
        }
      });
    }
  }

  if ($(".city-bl").length > 0) {
    $(".city-bl").on("click", function (event) {
      event.preventDefault();

      $(".city-bl").removeClass("active");
      $(".list-cites .btn").removeClass("show");
      $(this).addClass("active");
      $(this).next(".btn").addClass("show");
    });

    isVisibleMapBlock();
  }

  if ($("#calendar").length > 0) {
    let current = 28;
    let old = 27;

    let months = [
      "Январь",
      "Февраль",
      "Март",
      "Апрель",
      "Май",
      "Июнь",
      "Июль",
      "Август",
      "Сентябрь",
      "Октябрь",
      "Ноябрь",
      "Декабрь",
    ];

    function Calendar(id, year, month) {
      let Dlast = new Date(year, month + 1, 0).getDate(),
        D = new Date(year, month, Dlast),
        DNlast = new Date(D.getFullYear(), D.getMonth(), Dlast).getDay(),
        DNfirst = new Date(D.getFullYear(), D.getMonth(), 1).getDay(),
        calendar = "<div class='tr'>";

      if (DNfirst != 0) {
        for (let i = 1; i < DNfirst; i++) calendar += "<div class='td'></div>";
      } else {
        for (let i = 0; i < 6; i++) calendar += "<div class='td'></div>";
      }

      for (let i = 1; i <= Dlast; i++) {
        if (
          i == new Date().getDate() &&
          D.getFullYear() == new Date().getFullYear() &&
          D.getMonth() == new Date().getMonth()
        ) {
          calendar += "<div class='td today'>" + i + "</div>";
        } else {
          let custom = "";
          switch (i) {
            case current:
              custom = "coming";
              break;

            case old:
              custom = "past";
              break;

            default:
              custom = "";
              break;
          }

          calendar += `<div class='td ${custom}'>${i}</div>`;
        }
        if (new Date(D.getFullYear(), D.getMonth(), i).getDay() == 0) {
          calendar += "</div><div class='tr'>";
        }
      }

      for (var i = DNlast; i < 7; i++)
        calendar += "<div class='td td-empty'>&nbsp;";

      document.querySelector("#" + id + " .tbody").innerHTML =
        calendar + "</div>";

      document.querySelector(".events .calendarTitle .month").innerHTML =
        months[D.getMonth()];

      document.querySelector(".events .calendarTitle .year").innerHTML =
        D.getFullYear();

      document.querySelector(".events .calendarTitle .month").dataset.month =
        D.getMonth();

      document.querySelector(".events .calendarTitle .year").dataset.year =
        D.getFullYear();

      // переключение месяцев
      if ($(".listMount").length > 0) {
        $(".listMount li").eq(D.getMonth()).addClass("active");
        $(".listMount li").click(function () {
          $(".listMount li").removeClass("active");
          $(this).addClass("active");
          let current = $(this).index();
          Calendar(
            "calendar",
            document.querySelector(".events .calendarTitle .year").dataset.year,
            current
          );
        });
      }
    }

    Calendar("calendar", new Date().getFullYear(), new Date().getMonth());

    // переключатель минус месяц
    document.querySelector(".events .calendarPrev").onclick = function () {
      $(".listMount li").removeClass("active");
      Calendar(
        "calendar",
        document.querySelector(".events .calendarTitle .year").dataset.year,
        parseFloat(
          document.querySelector(".events .calendarTitle .month").dataset.month
        ) - 1
      );
    };

    // переключатель плюс месяц
    document.querySelector(".events .calendarNext").onclick = function () {
      $(".listMount li").removeClass("active");
      Calendar(
        "calendar",
        document.querySelector(".events .calendarTitle .year").dataset.year,
        parseFloat(
          document.querySelector(".events .calendarTitle .month").dataset.month
        ) + 1
      );
    };
  }

  if ($(".events-all").length > 0) {
    let eventDateArray = [12, 24];

    let months = [
      "Январь",
      "Февраль",
      "Март",
      "Апрель",
      "Май",
      "Июнь",
      "Июль",
      "Август",
      "Сентябрь",
      "Октябрь",
      "Ноябрь",
      "Декабрь",
    ];

    $(".events-mons__item").map(function (index, event) {
      let calendarID = `calendar${index}`;

      $(this).find(".calendar").attr("id", calendarID);
      $(this).find(".calendarTitle .month").text(months[index]);

      Calendar(calendarID, new Date().getFullYear(), index);
    });

    function Calendar(id, year, month) {
      let Dlast = new Date(year, month + 1, 0).getDate(),
        D = new Date(year, month, Dlast),
        DNlast = new Date(D.getFullYear(), D.getMonth(), Dlast).getDay(),
        DNfirst = new Date(D.getFullYear(), D.getMonth(), 1).getDay(),
        calendar = "<div class='tr'>";

      if (DNfirst != 0) {
        for (let i = 1; i < DNfirst; i++) calendar += "<div class='td'></div>";
      } else {
        for (let i = 0; i < 6; i++) calendar += "<div class='td'></div>";
      }

      for (let i = 1; i <= Dlast; i++) {
        let custom = "";

        if (eventDateArray.includes(i)) {
          custom = "event";
        }

        calendar += `<div class='td ${custom}'>${i}</div>`;
        if (new Date(D.getFullYear(), D.getMonth(), i).getDay() == 0) {
          calendar += "</div><div class='tr'>";
        }
      }

      for (var i = DNlast; i < 7; i++)
        calendar += "<div class='td td-empty'>&nbsp;";

      document.querySelector("#" + id + " .tbody").innerHTML =
        calendar + "</div>";
    }
  }

  if ($(".js-action-link").length > 0) {
    let isLeave = false;

    if ($(window).width() > 1024) {
      $(".js-action-link").mouseover(function (event) {
        let than = $(this);
        let block = than.attr("data-open");

        if (than.hasClass("active")) {
          return false;
        }

        if ($(".js-action-link").hasClass("active")) {
          $(".js-action-link").removeClass("active");
          $(".invis-block").removeClass("open").slideUp(100);
          $(".invis-block").off("mouseover");
          isLeave = false;
          setTimeout(function () {
            openInvisBlock(than, block, isLeave);
          }, 200);
        } else {
          openInvisBlock(than, block, isLeave);
        }
      });
    } else {
      $(".js-action-link").on("click", function (event) {
        let than = $(this);
        let attr = than.attr("data-open");

        $(".menu").addClass("sub-menu-opened");

        $(".sub-menu-mobile").map(function () {
          if ($(this).attr("data-mobile-open") === attr) {
            $(this).addClass("opened");
          }
        });

        return false;
      });

      $(".sub-menu-mobile__back").on("click", function () {
        $(".menu").removeClass("sub-menu-opened");
        $(".sub-menu-mobile").removeClass("opened");
      });
    }
  }

  if ($(".btn-search").length > 0) {
    let searchBlock = $(".search-invis");
    let searchInput = searchBlock.find("input");

    $(".btn-search").on("mouseover", function (event) {
      event.preventDefault();
      searchBlock.toggleClass("opened");

      let timer = setTimeout(function () {
        searchBlock.removeClass("opened").off("mouseleave");
      }, 5000);

      searchBlock.mouseover(function () {
        clearInterval(timer);
      });

      $(document).mouseup(function (e) {
        if (
          !searchBlock.is(e.target) &&
          searchBlock.has(e.target).length === 0 &&
          !$(".btn-search").is(e.target)
        ) {
          searchBlock.removeClass("opened");
          $(document).off("mouseup");
        }
      });
    });

    searchBlock.mouseleave(function () {
      let timer = setTimeout(function () {
        searchBlock.removeClass("opened").off("mouseleave");
      }, 5000);

      searchInput.off("input");

      searchInput.on("input", function () {
        clearInterval(timer);
      });
    });

    $(".btn-close-search").on("click", function (event) {
      event.preventDefault();
      $(".search-invis").removeClass("opened");
    });
  }

  if ($(".storage-section__tabs").length > 0) {
    $(".storage-section__tabs .contacts-info__bottom .btn").on(
      "click",
      function (event) {
        event.preventDefault();
        openGoogleMap($(this));
      }
    );

    $(".storage-section__tabs .list-cites .btn").on("click", function (event) {
      event.preventDefault();
      openGoogleMap($(this));
    });

    function openGoogleMap(than) {
      let parents = than.parents(".tabs-body");
      let mapBlock = $(".google-map");

      than.toggleClass("active");
      parents.find(".google-map").stop().slideDown();
      parents.find(".contacts-map").stop().slideUp();

      setTimeout(function () {
        scrollGoogleMap();
      }, 400);
    }

    function scrollGoogleMap() {
      let mapBlock = $(".google-map");
      $("html, body").animate({ scrollTop: mapBlock.offset().top }, 1000);
      return false;
    }
  }

  if ($(".terms-text").length > 0) {
    $(".terms-text").map(function () {
      $(this).scroll(function () {
        let heightScroll = $(this)[0].scrollHeight;
        let height = $(this).height();

        if ($(this).scrollTop() >= heightScroll - height) {
          $(this).parents(".modal").find(".read-to").addClass("hide");
          $(this)
            .parents(".modal")
            .find(".modal__controls")
            .addClass("visible");
        }
      });
    });
  }

  if ($(window).width() >= 1200) {
    if ($("#lottie-1").length > 0) {
      let number = $("#lottie-1").offset().top;

      let theWindow = $(window);
      let winHeight = theWindow.height();
      let animDuration = 1600;
      let animData = {
        container: document.getElementById("lottie-1"),
        renderer: "svg",
        loop: false,
        autoplay: false,
        path: "json/block1.json",
      };

      let anim = bodymovin.loadAnimation(animData);

      function animatebodymovin(duration, animObject) {
        let scrollPosition = theWindow.scrollTop() - number;
        let maxFrames = animObject.totalFrames;
        let frame = (maxFrames / 100) * (scrollPosition / (duration / 100));
        animObject.goToAndStop(frame, true);
      }

      anim.addEventListener("enterFrame", function (animation) {
        if (animation.currentTime > anim.totalFrames - 1) {
          // animObject.pause();
          anim.pause();
        }
      });

      $(window).scroll(function () {
        if ($(this).scrollTop() > number && currentScroll < "4400") {
          animatebodymovin(animDuration, anim);
        }
      });
    }

    if ($("#lottie-2").length > 0) {
      let number = $("#lottie-2").offset().top;
      let positionLottie2Paused = 6740;

      let theWindow = $(window);
      let winHeight = theWindow.height();
      let animDuration = 4000;
      let animData = {
        container: document.getElementById("lottie-2"),
        renderer: "svg",
        loop: true,
        autoplay: false,
        path: "json/block2.json",
      };

      let anim = bodymovin.loadAnimation(animData);

      function animatebodymovin(duration, animObject, paused = 0) {
        let scrollPosition = theWindow.scrollTop() - number - paused;
        let maxFrames = animObject.totalFrames;
        let frame = (maxFrames / 100) * (scrollPosition / (duration / 100));
        animObject.goToAndStop(frame, true);
      }

      $(window).scroll(function () {
        if ($(window).width() < 1440) {
          positionLottie2Paused = 6600;
        }

        if (
          $(this).scrollTop() > number &&
          currentScroll < positionLottie2Paused
        ) {
          animatebodymovin(animDuration, anim);
        }

        if (currentScroll < "6000") {
          $("#lottie-2").removeClass("fixed");
        }

        if (currentScroll > positionLottie2Paused) {
          $("#lottie-2").addClass("paused");
        } else {
          $("#lottie-2").removeClass("paused");
        }

        if (currentScroll >= "6000" && currentScroll <= "7500") {
          $("#lottie-2").addClass("fixed");
          $(".animation-text").addClass("hide");
          anim.pause();
        } else {
          $(".animation-text").removeClass("hide");
        }
      });
    }

    if ($("#lottie-2-2").length > 0) {
      let number = 7500;

      let theWindow = $(window);
      let winHeight = theWindow.height();
      let animDuration = 2000;
      let animData = {
        container: document.getElementById("lottie-2-2"),
        renderer: "svg",
        loop: true,
        autoplay: false,
        path: "json/block2_2.json",
      };

      let anim = bodymovin.loadAnimation(animData);

      function animatebodymovin(duration, animObject, paused = 0) {
        let scrollPosition = theWindow.scrollTop() - number - paused;
        let maxFrames = animObject.totalFrames;
        let frame = (maxFrames / 100) * (scrollPosition / (duration / 100));
        animObject.goToAndStop(frame, true);
      }

      $(window).scroll(function () {
        if ($(this).scrollTop() > number && currentScroll < "9200") {
          animatebodymovin(animDuration, anim);
        }

        if (currentScroll >= number) {
          $("#lottie-2-2").addClass("show");
        } else {
          $("#lottie-2-2").removeClass("show");
        }
      });
    }

    if ($("#lottie-3").length > 0) {
      let number = 10300;
      let scrollStop = 12700;

      if ($(window).width() < 1500) {
        number = 9400;
        scrollStop = 11800;
      }

      let theWindow = $(window);
      let winHeight = theWindow.height();
      let animDuration = 2500;
      let animData = {
        container: document.getElementById("lottie-3"),
        renderer: "svg",
        loop: false,
        autoplay: false,
        path: "json/block3.json",
      };

      let anim = bodymovin.loadAnimation(animData);

      function animatebodymovin(duration, animObject) {
        let scrollPosition = theWindow.scrollTop() - number;
        let maxFrames = animObject.totalFrames;
        let frame = (maxFrames / 100) * (scrollPosition / (duration / 100));
        animObject.goToAndStop(frame, true);
      }

      $(window).scroll(function () {
        if ($(this).scrollTop() > number && currentScroll < scrollStop) {
          animatebodymovin(animDuration, anim);
        }

        if (currentScroll >= "10000") {
          $(".delivery--v1 .desc").addClass("visible");
          $(".delivery--v1 .caption").addClass("visible");
        } else {
          $(".delivery--v1 .desc").removeClass("visible");
          $(".delivery--v1 .caption").removeClass("visible");
        }

        if (currentScroll >= "11000") {
          $(".delivery--v1").addClass("fixed");
        } else {
          $(".delivery--v1").removeClass("fixed");
        }

        if (currentScroll >= "12600") {
          $(".delivery .btn").addClass("show");
        } else {
          $(".delivery .btn").removeClass("show");
        }

        if (currentScroll >= "13250") {
          anim.pause();
        }
      });
    }
  }

  if ($(".indexPage").length > 0) {
    if ($(window).width() >= 1200) {
      if (ScrollTrigger.isTouch !== 1) {
        if ($(window).width() < 1440) {
          gsap.fromTo(
            "#lottie-2",
            { y: 0 },
            {
              y: -930,
              scrollTrigger: {
                trigger: ".production",
                start: "-600",
                scrub: true,
              },
            }
          );

          // delivery

          gsap.fromTo(
            ".delivery .line",
            { opacity: 0 },
            {
              opacity: 1,
              scrollTrigger: {
                trigger: ".delivery",
                start: "2100",
                end: "2130",
                scrub: true,
              },
            }
          );

          gsap.fromTo(
            ".delivery .desc",
            { x: 0 },
            {
              x: 650,
              scrollTrigger: {
                trigger: ".delivery",
                start: "2100",
                end: "2130",
                scrub: true,
              },
            }
          );

          gsap.fromTo(
            ".delivery .caption",
            { x: 0 },
            {
              x: 650,
              scrollTrigger: {
                trigger: ".delivery",
                start: "2100",
                end: "2130",
                scrub: true,
              },
            }
          );
        } else {
          gsap.fromTo(
            "#lottie-2",
            { y: 0 },
            {
              y: -1090,
              scrollTrigger: {
                trigger: ".production",
                start: "-980",
                scrub: true,
              },
            }
          );

          // delivery

          gsap.fromTo(
            ".delivery .line",
            { opacity: 0 },
            {
              opacity: 1,
              scrollTrigger: {
                trigger: ".delivery",
                start: "2400",
                end: "2430",
                scrub: true,
              },
            }
          );

          gsap.fromTo(
            ".delivery .desc",
            { x: 0 },
            {
              x: 700,
              scrollTrigger: {
                trigger: ".delivery",
                start: "2400",
                end: "2430",
                scrub: true,
              },
            }
          );

          gsap.fromTo(
            ".delivery .caption",
            { x: 0 },
            {
              x: 700,
              scrollTrigger: {
                trigger: ".delivery",
                start: "2400",
                end: "2430",
                scrub: true,
              },
            }
          );
        }
      }
    }
  }

  if ($(".your-lines").length > 0) {
    $(".b-product-lines__cart").on("click", function (e) {
      if (
        !$(".b-product-lines__cart-arrow-wrap").is(e.target) &&
        $(".b-product-lines__cart-arrow-wrap").has(e.target).length === 0
      ) {
        $(".b-product-lines__cart").removeClass("active");

        let parentT = $(".b-product-lines__switch-item-wrap.active"),
          parentTchildren = parentT.find(".b-product-lines__cart");

        for (let n = 0; n < parentTchildren.length; n++) {
          if (parentTchildren.index(n) < $(this).index() + 1) {
            for (let i = 0; i < $(this).index(); i++) {
              parentTchildren
                .eq(i)
                .css("border-radius", "10px 0 0 10px")
                .addClass("b");
            }
          } else {
            for (let b = $(this).index() - 1; b < parentTchildren.length; b++) {
              parentTchildren
                .eq(b)
                .css("border-radius", "0px 10px 10px 0px")
                .addClass("n");
            }
          }
          $(this).addClass("active");
          $(this).css("border-radius", "10px");
        }
      }
    });

    let cartWidth = $(".b-product-lines__cart.active").width(),
      bodyWidth = cartWidth - 16 * 9;

    $(".b-product-lines__cart-body").css("width", bodyWidth + "px");
    $(".b-product-lines__cart-body").css("min-width", bodyWidth + "px");

    $(".b-product-lines__switch-btn").on("click", function (e) {
      let id = $(this).attr("data-id");
      pickLineapItemByDataId(id);
    });

    $(".b-product-lines__cart-arrow_next").on("click", function () {
      let parentT = $(".b-product-lines__switch-item-wrap.active"),
        parentTchildren = parentT.find(".b-product-lines__cart"),
        cartActive = parentT.find(".b-product-lines__cart.active");

      if (cartActive.index() != parentTchildren.length - 1) {
        $(".b-product-lines__cart").removeClass("active");

        for (let n = 0; n < parentTchildren.length; n++) {
          if (parentTchildren.index(n) < cartActive + 1) {
            for (let i = 0; i < cartActive; i++) {
              parentTchildren
                .eq(i)
                .css("border-radius", "10px 0 0 10px")
                .addClass("b");
            }
          } else {
            for (let b = cartActive - 1; b < parentTchildren.length; b++) {
              parentTchildren
                .eq(b)
                .css("border-radius", "0px 10px 10px 0px")
                .addClass("n");
            }
          }
        }

        parentTchildren.eq(cartActive.index() + 1).addClass("active");
        parentTchildren.eq(cartActive.index() + 1).css("border-radius", "10px");
      }
    });

    $(".b-product-lines__cart-arrow_prev").on("click", function () {
      let parentT = $(".b-product-lines__switch-item-wrap.active"),
        parentTchildren = parentT.find(".b-product-lines__cart"),
        cartActive = parentT.find(".b-product-lines__cart.active");

      if (cartActive.index() != 0) {
        $(".b-product-lines__cart").removeClass("active");

        for (let n = 0; n < parentTchildren.length; n++) {
          if (parentTchildren.index(n) < cartActive + 1) {
            for (let i = 0; i < cartActive; i++) {
              parentTchildren
                .eq(i)
                .css("border-radius", "10px 0 0 10px")
                .addClass("b");
            }
          } else {
            for (let b = cartActive - 1; b < parentTchildren.length; b++) {
              parentTchildren
                .eq(b)
                .css("border-radius", "0px 10px 10px 0px")
                .addClass("n");
            }
          }
        }

        parentTchildren.eq(cartActive.index() - 1).addClass("active");
        parentTchildren.eq(cartActive.index() - 1).css("border-radius", "10px");
      }
    });
  }

  if ($(".btn-top-page").length > 0) {
    $(".btn-top-page").on("click", function () {
      $(window).scrollTop(0);
    });
  }

  if ($(".lineap").length > 0) {
    const items = $(".lineap-item");
    const itemsLenght = $(".lineap-item").length;

    items.each((idx, item) => {
      $(item).css("z-index", itemsLenght - idx);
    });

    function pickLineapItemByDataId(id) {
      const item = $(`.lineap-item[data-item=${id}]`);
      if (item.length !== 0) {
        setActiveLineapItem($(item));
      }
    }

    function setActiveLineapItem($item) {
      $(".lineap-item").removeClass("lineap-item--active");
      $(".lineap-item").removeClass("lineap-item--prev");
      $(".lineap-item").css("z-index", "");

      $item.addClass("lineap-item--active");

      const prevElements = $item.prevAll(".lineap-item");

      prevElements.addClass("lineap-item--prev");

      const nextElements = $item.nextAll(".lineap-item");

      nextElements.each((idx, item) => {
        $(item).css("z-index", nextElements.length - idx);
      });
    }

    $(".lineap-item__title").click(function () {
      const parent = $(this).closest(".lineap-item");
      setActiveLineapItem($(parent));
    });

    $(".lineap-item__control--next").click(function () {
      const parent = $(this).closest(".lineap-item");

      const nextItem = parent.next(".lineap-item");

      if (nextItem.length !== 0) {
        setActiveLineapItem($(nextItem));
      }
    });

    $(".lineap-item__control--prev").click(function () {
      const parent = $(this).closest(".lineap-item");

      const prevItem = parent.prev(".lineap-item");

      if (prevItem.length !== 0) {
        setActiveLineapItem($(prevItem));
      }
    });
  }

  if ($(".burger").length > 0) {
    $(".burger").on("click", function () {
      $(".burger").toggleClass("opened");
      $(".menu")
        .toggleClass("opened")
        .slideToggle()
        .removeClass("sub-menu-opened");
      $("body").toggleClass("hidden");
      $(".sub-menu-mobile").removeClass("opened");
    });
  }

  if ($(".text-block-opening").length > 0) {
    $(".text-block-opening p").first();

    $(".text-block-opening").map(function () {
      let block = $(this);
      let height = block.first().height();

      block.find("p").first().css("display", "block");

      block.find(".btn-more-text").on("click", function (event) {
        event.preventDefault();

        if ($(this).hasClass("active")) {
          block.find("p").css("display", "none");
          block.find("p").first().css("display", "block");
          let text = $(this).attr("data-text");
          $(this).removeClass("active").text(text);
        } else {
          block.find("p").css("display", "block");

          let text = $(this).attr("data-text-active");
          $(this).addClass("active").text(text);
        }
      });
    });
  }

  if ($(".product-text").length > 0) {
    let defaultHeight = $(".product-text").height();
    let heightInfo = $(".product__info").height();
    let text = $(".product-text p");
    let btnAll = $(".product-text").next(".btn-read-all");

    if (defaultHeight >= heightInfo) {
      $(".product-text").height(heightInfo);

      btnAll.on("click", function (event) {
        event.preventDefault();
        $(this).addClass("active");
        $(".product-text").addClass("opened").height(defaultHeight);
      });
    } else {
      $(".product-text").addClass("visible");
      btnAll.addClass("active");
    }
  }

  if ($(".step-list").length > 0) {
    if ($(window).width() < 1200) {
      const swiper = new Swiper(".step-list", {
        slidesPerView: 2,
        slidesPerGroup: 1,
        spaceBetween: 20,
        navigation: {
          nextEl: ".step-list .swiper-button-next",
          prevEl: ".step-list .swiper-button-prev",
        },
        pagination: {
          el: ".step-list .swiper-pagination",
          type: "progressbar",
        },
        breakpoints: {
          0: {
            slidesPerView: 1,
            spaceBetween: 10,
          },

          768: {
            slidesPerView: 2,
          },
        },
      });
    }
  }

  if ($(".btn-filter").length > 0) {
    if ($(".product-catalog__leftSide").length > 0) {
      $(".btn-filter").on("click", function () {
        $(".product-catalog__leftSide").addClass("opened");

        if ($(".product-catalog__leftSide").find(".filter-close").length <= 0) {
          let block = `<div class="filter-close">
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M17 17L9 9M9 9L1 17M9 9L1 1M9 9L17 1" stroke="#AA9F8E" stroke-width="2"/>
            </svg>
          </div>`;

          $(".product-catalog__leftSide").append(block);

          $(".filter-close").on("click", function () {
            $(".product-catalog__leftSide").removeClass("opened");
          });
        }

        $(document).mouseup(function (e) {
          let div = $(".product-catalog__leftSide");
          if (!div.is(e.target) && div.has(e.target).length === 0) {
            $(".product-catalog__leftSide").removeClass("opened");
            $(document).off("mouseup");
          }
        });
      });
    }

    if ($(".category-filter").length > 0) {
      $(".btn-filter").on("click", function () {
        $(".category-filter").addClass("opened");

        if ($(".category-filter").find(".filter-close").length <= 0) {
          let block = `<div class="filter-close">
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M17 17L9 9M9 9L1 17M9 9L1 1M9 9L17 1" stroke="#AA9F8E" stroke-width="2"/>
            </svg>
          </div>`;

          $(".category-filter").append(block);

          $(".filter-close").on("click", function () {
            $(".category-filter").removeClass("opened");
          });
        }

        $(document).mouseup(function (e) {
          let div = $(".category-filter");
          if (!div.is(e.target) && div.has(e.target).length === 0) {
            $(".category-filter").removeClass("opened");
            $(document).off("mouseup");
          }
        });
      });
    }
  }

  if ($(".lineap").length > 0) {
    if ($(window).width() < 768) {
      let swiperWrapper = $("<div>", {
        class: "swiper-wrapper",
      });

      let swiperSlide = $("<div>", {
        class: "swiper-slide",
      });

      let swiperControls = $("<div>", {
        class: "swiper-pagination",
      });

      $(".lineap").addClass("swiper");

      let children = $(".lineap").children();

      for (let i = 0; i < children.length; i++) {
        $(children[i]).wrapAll(swiperSlide);
      }

      $(".lineap").find(".swiper-slide").wrapAll(swiperWrapper);
      $(".lineap").append(swiperControls);

      const swiper = new Swiper(".lineap", {
        slidesPerView: 1,
        spaceBetween: 30,
        autoHeight: true,
        pagination: {
          el: ".lineap .swiper-pagination",
          type: "progressbar",
        },
        breakpoints: {
          320: {
            slidesPerView: 1,
            spaceBetween: 30,
          },
        },
      });
    }
  }

  if ($(".js-btn-cookie").length > 0) {
    $(".js-btn-cookie").on("click", function () {
      $(".cookee-block").addClass("good");
    });
  }

  if ($(".mobile-visible").length > 0) {
    $(".mobile-visible .city-block .js-action-link").off();
    $(".mobile-visible .location-block.js-action-link").off();

    $(".mobile-visible .city-block .js-action-link").on("click", function () {
      $(".mobile-visible .city-invis").slideToggle();
    });

    $(".mobile-visible .location-block.js-action-link").on(
      "click",
      function () {
        $(".mobile-visible .location-invis").slideToggle();
      }
    );
  }
});

// $(window).on("load", function () {
//   $('body').addClass('load')
// });

function isVisibleMapBlock() {
  $(".list-cites li").map(function () {
    if ($(this).attr("data-visible") === "false") {
      $(this).addClass("show");
    } else {
      $(this).removeClass("show");
    }
  });

  $(".google-map__controls .btn").on("click", function (event) {
    event.preventDefault();

    let parents = $(this).parents(".distr-section");

    $(this).toggleClass("active");
    parents.find(".google-map").stop().slideUp();
    parents.find(".contacts-map").stop().slideDown();
  });
}

function openInvisBlock(than, block, isLeave) {
  than.addClass("active");

  $(`.${block}`).addClass("open").slideDown(100);

  $(than).mouseleave(function () {
    mouseLeaveHandle();
  });

  $(`.${block}`).mouseleave(function () {
    mouseLeaveHandle();
  });

  $(document).mouseup(function (e) {
    let div = $(`.${block}`);
    if (!div.is(e.target) && div.has(e.target).length === 0) {
      $(".js-action-link").removeClass("active");
      div.removeClass("open").slideUp(100);
      $(document).off("mouseup");
    }
  });

  function mouseLeaveHandle() {
    $(than).off("mouseleave");
    $(block).off("mouseleave");

    if (!isLeave) {
      isLeave = true;

      let timer = setTimeout(function () {
        closeInvis(block, timer);
      }, 200);

      $(`.${block}`).mouseover(function () {
        timer && clearTimeout(timer);
        isLeave = false;
      });
    }
  }

  function closeInvis(block, timer = undefined) {
    $(".js-action-link").removeClass("active");
    $(`.${block}`).removeClass("open").slideUp(100);
    $(`.${block}`).off("mouseover");
    $(document).off("mouseup");
    isLeave = false;
    timer && clearTimeout(timer);
  }
}

function pickLineapItemByDataId(id) {
  const item = $(`.lineap-item[data-item=${id}]`);
  if (item.length !== 0) {
    setActiveLineapItem($(item));
  }
}

function setActiveLineapItem($item) {
  $(".lineap-item").removeClass("lineap-item--active");
  $(".lineap-item").removeClass("lineap-item--prev");
  $(".lineap-item").css("z-index", "");

  $item.addClass("lineap-item--active");

  const prevElements = $item.prevAll(".lineap-item");

  prevElements.addClass("lineap-item--prev");

  const nextElements = $item.nextAll(".lineap-item");

  nextElements.each((idx, item) => {
    $(item).css("z-index", nextElements.length - idx);
  });
}

function changeTextCatalog(title, text) {
  $(".catalog-main__right .caption").text(title);
  $(".catalog-main__right p").text(text);
}
