function scrollUp(top) {
    const vheight = $('.test').height();
    $('html, body').animate({
        scrollTop: top - vheight - 50
    }, 500);
};

function scrollDown(top) {
    const vheight = $('.test').height();
    $('html, body').animate({
        scrollTop: vheight + top - 50
    }, 500);
}

$(function(){
    $('.next_btn').click(function(e){
        let divs = $(this).parent().prev().children();
        let present_top = $(this).parent().parent()[0].offsetTop;
        let inputs = divs.find('input:checked');
        if(inputs.length < 1) {
            alert('문항이 선택되지 않았습니다.');
            return false;
        }
        e.preventDefault();
        scrollDown(present_top);
    });

    $('.prev_btn').click(function(e){
        let present_top = $(this).parent().parent()[0].offsetTop;
        e.preventDefault();
        scrollUp(present_top);
    });

    $("#form").submit(function() {
        let radios = $('input[type=radio]:checked');
        if(radios.length < 10) {
            alert("문항이 선택되지 않았습니다.");
            return false;
        }
        return true;
    });

    $("html, body").animate({
        scrollTop: 0
    }, 500);
});