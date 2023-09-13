$(function(){ 
    $('.single-item').slick({
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: true,
        appendArrows: $('.arrow-slider'),
            prevArrow: '<button id="prev" type="button" class="btn btn-juliet floatleft"><i class="fa fa-chevron-left" aria-hidden="true"></i> ←</button>',
            nextArrow: '<button id="next" type="button" class="btn btn-juliet floatright">→ <i class="fa fa-chevron-right" aria-hidden="true"></i></button>'
    });
    $(".slider").on('afterChange', function(event, slick, currentSlide){
        $("#cp").text(currentSlide + 1);
     });
});