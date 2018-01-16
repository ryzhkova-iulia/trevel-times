

$(document).ready(function () {

    // $('[name="phone"]').inputmask('+7 (999) 999-99-99');


    // $('[name="phone"]').attr('type', 'tel');

    // $(".menu").css("margin-top", $(".level-0").outerHeight());

    $('.show-more').on("click", function () {
        var $context = $(this).parents(".rest");
        $context.find('.rest__item').removeClass("item-hide");
        $(this).parents(".show-more-block").css('display', 'none');

    });


    $('.js-news').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: false,
        variableWidth: true,
        centerMode: true,
        infinite: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });

    $('.js-comment').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: false,
    });


    var elem = $(".bg-top");
    var topPos = $(".bg-top").offset().top - $(".level-0").outerHeight();

    $(document).scroll(function() {
        if($(document).scrollTop() > 10) {
            elem.addClass('bg-top_animate');
        } else if ($(document).scrollTop() <= 500){
            elem.removeClass('bg-top_animate');
        }
    });

    // paralax
    $.stellar({
        horizontalScrolling: true,
    });

});
