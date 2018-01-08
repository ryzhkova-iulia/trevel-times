(function() {
  var closeAdaptiveMenue, closeModalWindows, closeSandwich, getBodyScrollTop, openModalWindow, openSandwich, resizeCells, resizeModalWindows, resizeSandwich, scrollCurrent, scrollTo;

  $(document).ready(function() {
    var days, month;
    window.currentScroll = 0;
    $("input").each(function() {
      var placeholder;
      placeholder = $(this).attr("data-placeholder");
      return $(this).attr("placeholder", placeholder);
    });
    $("input").focus(function() {
      $(this).attr("data-placeholder",$(this).attr("placeholder"));
      return $(this).attr("placeholder", "");
    });
    $("input").blur(function() {
      var placeholder;
      placeholder = $(this).attr("data-placeholder");
      return $(this).attr("placeholder", placeholder);
    });
    $(document).click(function(event) {

      /*
      
      		if $(".header .level-1 .sandwich").hasClass("open")
      			console.log etarget
      			if etarget == 0
      				$(".header .level-1 .dropdown-menu").slideUp(333)
      				$(".header .level-1 .dropdown-menu").removeClass "open"
       */
      var etarget;
      etarget = $(event.target).closest('.header .level-1 .dropdown-menu.open').length;
      console.log(etarget);
      if (etarget === 1) {

      } else {
        if ($(".header .level-1 .sandwich").hasClass("open")) {
          false;
        }
      }
      return event.stopPropagation();
    });
    $(".slider-recreation .item").hover(function() {
      $(".slider-recreation .owl-item").css({
        "z-index": 1
      });
      return $(this).closest(".owl-item").css({
        "z-index": 6
      });
    });
    $(".switcher").click(function() {
      return $(this).toggleClass("off");
    });
    $(".header .level-1 .search").click(function() {
      $(".hidden-search").css({
        "left": 0
      });
      return setTimeout((function() {
        return $(".hidden-search").addClass("open");
      }), 1000);
    });
    $(".main-slider .form .tabs ul>li").click(function() {
      var open;
      open = $(this).attr("data-open");
      $(".main-slider .form .tabs ul>li").removeClass("active");
      $(this).addClass("active");
      $(".main-slider .form .place section").hide();
      return $(".main-slider .form .place section:nth-child(" + open + ")").show();
    });
    $(".fancybox").fancybox();
    $(".fixed-adaptive-block .sandwich").click(function() {
      if ($(this).hasClass("open")) {
        $(this).removeClass("open");
        return closeSandwich();
      } else {
        $(this).addClass("open");
        return openSandwich();
      }
    });
    $(".header .level-1 .sandwich").click(function() {
      if ($(this).hasClass("open")) {
        $(this).removeClass("open");
        $(".header .level-1 .dropdown-menu").slideToggle(333);
        $(".header .level-1 .dropdown-menu").removeClass("open");
        return $(".dropdown-darkness").show();
      } else {
        $(this).addClass("open");
        $(".dropdown-darkness").show();
        $(".header .level-1 .dropdown-menu").slideToggle(333);
        return $(".header .level-1 .dropdown-menu").addClass("open");
      }
    });
    $(".dropdown-darkness").click(function() {
      $(this).hide();
      $(".header .level-1 .dropdown-menu").slideUp(333);
      $(".header .level-1 .dropdown-menu").removeClass("open");
      return $(".header .level-1 .sandwich").removeClass("open");
    });
    $(".show-cut").click(function() {
      if ($(this).hasClass("active")) {
        $(this).removeClass("active");
        $(this).closest(".container").find(".cut").slideUp(333);
        return $(this).html("Подробнее");
      } else {
        $(this).addClass("active");
        $(this).closest(".container").find(".cut").slideDown(333);
        return $(this).html("Скрыть");
      }
    });
    month = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];
    days = ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'];
    $(".submit-this").click(function() {
      return $(this).closest("form").submit();
    });

    // TODO: include iCheck
/*
    $('input').iCheck({
      checkboxClass: 'icheckbox_minimal-red',
      radioClass: 'iradio_minimal-red',
      increaseArea: '20%'
    });
*/

/*    $(".main-slider .slider").owlCarousel({
      navigation: true,
      pagination: true,
      slideSpeed: 444,
      paginationSpeed: 333,
      singleItem: true,
      touchDrag: true,
      autoPlay: 6000,
      navigationText: false
    });
    $(".reviews-slider").owlCarousel({
      navigation: true,
      pagination: true,
      slideSpeed: 444,
      paginationSpeed: 333,
      singleItem: true,
      touchDrag: true,
      autoPlay: 6000,
      navigationText: false
    });
    $(".slider-recreation").owlCarousel({
      navigation: true,
      pagination: false,
      items: 4,
      slideSpeed: 444,
      paginationSpeed: 333,
      singleItem: false,
      touchDrag: true,
      autoPlay: false,
      navigationText: false
    });
    $(".about-us-block-slider").owlCarousel({
      navigation: true,
      pagination: false,
      items: 4,
      slideSpeed: 444,
      paginationSpeed: 333,
      singleItem: false,
      touchDrag: true,
      autoPlay: 6000,
      navigationText: false
    });*/
    resizeModalWindows();
    resizeSandwich();
    $(".get-register").click(function() {
      openModalWindow("#register-form-place");
      return false;
    });
    $('.country_top_butt').on('click',function(e){
      openModalWindow("#callback-form-place");
        return false;
    })
    $(".get-callback, .mb_call").click(function() {
      openModalWindow("#callback-form-place");
      return false;
    });
    $(".modal-window .close, .darkness, .sandwich-menue .title").click(function() {
      closeModalWindows();
      return closeSandwich();
    });
    $(".menue-list .title").click(function() { 
      $(this).closest(".section").find(".row").slideToggle(108);
      return $(this).toggleClass("active");
    });
    $(".open-adaptive-menue").click(function() {});
    return $(".open-hidden-buttons").click(function() {
      closeAdaptiveMenue();
      $(".hidden-buttons-menue").show();
      return $(".darkness").show();
    });
  });

  $(window).resize(function() {
    resizeModalWindows();
    return resizeSandwich();
  });

  $(window).scroll(function() {
    if ($("body").hasClass("open-modal-window")) {

    } else {
      return window.currentScroll = getBodyScrollTop();
    }
  });

  openModalWindow = function(xx) {
    closeAdaptiveMenue();
    xx = $(xx);
    $("body").addClass("open-modal-window");
    $(".modal-window").hide();
    xx.show();
    xx.css({
      "position": "fixed"
    });
    /*$(".wrapper").css({
      "position": "fixed",
      "top": (currentScroll - 147) * -1
    });*/
    return $(".darkness").show();
  };

  closeModalWindows = function() {
    var xx;
    xx = $(".modal-window");
    xx.hide();
    xx.css({
      "position": "absolute"
    });
    /*$(".wrapper").css({
      "position": "relative",
      "top": 0
    });*/
    $(".darkness").hide();
    closeAdaptiveMenue();
    scrollCurrent();
    return $("body").removeClass("open-modal-window");
  };

  closeAdaptiveMenue = function() {
    return $(".adaptive-menue").hide();
  };

  resizeModalWindows = function() {
    var wHeight;
    wHeight = $(window).height() / 10;
    return $(".modal-window .place").css({
      "marginTop": wHeight
    });
  };

  resizeSandwich = function() {
    var denominator, wHeight, wWidth;
    wWidth = $(window).width();
    wHeight = $(window).height();
    denominator = 3;
    if (wWidth < 800) {
      denominator = 2;
    }
    if (wWidth < 700) {
      denominator = 1.5;
    }
    if (wWidth < 600) {
      denominator = 1.25;
    }
    return $(".sandwich-menue").css({
      "height": wHeight - 48
    });
  };

  openSandwich = function() {
    return $(".sandwich-menue").addClass("open");
  };

  closeSandwich = function() {
    return $(".sandwich-menue").removeClass("open");
  };

  resizeCells = function(object) {
    var blocksArray, blocksMax;
    if (object === void 0) {
      object = $(".cell-need-resize .cell");
    }
    blocksArray = [];
    object.each(function() {
      var blockHeight;
      blockHeight = $(this).height();
      return blocksArray.push(blockHeight);
    });
    blocksMax = Math.max.apply(null, blocksArray);
    return object.css({
      "height": blocksMax
    });
  };

  getBodyScrollTop = function() {
    return self.pageYOffset || (document.documentElement && document.documentElement.scrollTop) || (document.body && document.body.scrollTop);
  };

  scrollCurrent = function() {
    return $('html, body').animate({
      scrollTop: currentScroll
    }, 0);
  };

  scrollTo = function(target) {
    var scrollPath;
    scrollPath = $(target).offset().top - 40;
    return $('html, body').animate({
      scrollTop: scrollPath
    }, 333);
  };

}).call(this);

