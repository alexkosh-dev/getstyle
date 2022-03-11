$(function () {
  //появление фиксированого меню, при определенной высоте скролла страницы
  $(window).on("scroll", function () {
    if ($(this).scrollTop() > 90) {
      $(".header__fixed").addClass("fixed--active"); // для плавности добавить transition: all 0.5s;
      $(".header__info").addClass("info--scroll");
    } else if ($(this).scrollTop() < 90) {
      $(".header__fixed").removeClass("fixed--active");
      $(".header__info").removeClass("info--scroll");
    }
  });
  //фиксирует положение скрол меню, при обновлении страницы
  $(window).on("load", function () {
    if ($(this).scrollTop() > 90) {
      $(".header__fixed").addClass("fixed--active");
      $(".header__info").addClass("info--scroll");
    } else if ($(this).scrollTop() < 90) {
      $(".header__fixed").removeClass("fixed--active");
      $(".header__info").removeClass("info--scroll");
    }
  });

  //animate scroll menu HEADER
  $(".header__menu, .menu__mobile, .header__info-btn, .footer__help-list").on("click", "a", function (event) {
      event.preventDefault();
      var menuId = $(this).attr("href"),
        top = $(menuId).offset().top;
      console.log(top);
      $("html, body").animate({ scrollTop: top }, 1000);
    }
  );

  $(".days-tabs__tab-item").click(function (e) {
    e.preventDefault();
    $(".days-tabs__tab-item").removeClass("days-tabs__tab-item--active");
    $(".days-tabs__content-item").removeClass(
      "days-tabs__content-item--active"
    );
    $(this).addClass("days-tabs__tab-item--active");
    $($(this).attr("href")).addClass("days-tabs__content-item--active");
  });
  $(".days-tabs__tab-item:first").click();

  $(".faq__tab").on("click", function (e) {
    e.preventDefault();
    $(".faq__tab").removeClass("faq__tab--active");
    $(".faq__tab-content").removeClass("faq__tab-content--active");

    $(this).addClass("faq__tab--active");
    $($(this).attr("href")).addClass("faq__tab-content--active");
  });
  $(".faq__tab:first").click();

  new WOW().init();

  Fancybox.bind("[data-fancybox]", {
    infinite: false,
    hideScrollbar: false,
  });

  $(".menu-burger, .menu__mobile-close").on("click", function () {
    $(".menu__mobile").fadeToggle();
  });

  let close = $(".menu-burger"),
    menu = $(".menu__mobile");

  $(document).on("click", function (e) {
    if (
      !close.is(e.target) &&
      close.has(e.target).length === 0 &&
      !menu.is(e.target) &&
      menu.has(e.target).length === 0
    ) {
      menu.fadeOut();
    }
  });
});
