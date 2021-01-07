function resize() {
    let vheight = $(window).height();
    let vwidth = $(window).width();
    $('.test').css({
      'height': vheight,
      'width': vwidth 
    });
};

function scrollUp() {
    const vheight = $('.test').height();
    $('html, body').animate({
      scrollTop: ((Math.ceil($(window).scrollTop() / vheight)-1) * vheight)
    }, 500);
};

function scrollDown() {
    const vheight = $('.test').height();
    $('html, body').animate({
        scrollTop: ((Math.floor($(window).scrollTop() / vheight)+1) * vheight)
    }, 500);
}

$(function(){
    resize();

    $('.next_btn').click(function(e){
        e.preventDefault();
        scrollDown();
    });

    $('.prev_btn').click(function(e){
        e.preventDefault();
        scrollUp();
    });
});

$(window).resize(function(){
    resize();
});