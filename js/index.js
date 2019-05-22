$(function () {
    var index = 0;
    var timer = null;

    function turn() {
        if (index == 0) {
            $('.header').addClass('active').find('img').attr('src', 'images/logo.png');
        } else {
            $('.header').removeClass('active').find('img').attr('src', 'images/logo_small.png');
        }
        $('.page').eq(index).show().siblings('.page').hide();
        $('.nav span').eq(index).addClass('active').siblings().removeClass('active');
        setTimeout(function () {
            $('.page').eq(index).removeClass('active').siblings('.page').addClass('active');
        }, 1)
    }

    $(window).mousewheel(function (e) {
        clearTimeout(timer);
        timer = setTimeout(function () {
            if (e.deltaY < 0) {
                index++
            } else {
                index--
            }
            index = (index + $('.page').length) % $('.page').length;
            turn();
        }, 300)
    });

    $('.nav span').click(function () {
        index = $(this).index();
        turn();
    })
});