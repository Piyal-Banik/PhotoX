$(document).ready(function() {
    $('.nav-button').click(function() {
        $('.nav-button').toggleClass('change');
    });
    $(window).scroll(function() {
        let position = $(this).scrollTop();
        if(position >= 200) {
            $('.nav-menu').addClass('custom-navbar');
        }
        else {
            $('.nav-menu').removeClass('custom-navbar');
        }
        console.log(position);
    });

    $(window).scroll(function() {
        let position = $(this).scrollTop();
        if(position >= 650) {
            $('.camera-img').addClass('fromLeft');
            $('.mission-text').addClass('fromRight');
        }
        else {
            $('.camera-img').removeClass('fromLeft');
            $('.mission-text').removeClass('fromRight');
        }
    });

    $(window).scroll(function() {
        let position = $(this).scrollTop();
        if(position >= 1500) {
            $('.shake-1').addClass('shake');
        }

        if(position >=2000) {
            $('.shake-2').addClass('shake');
        }
        else {
            $('.shake-1').removeClass('shake');
            $('.shake-2').removeClass('shake');
        }
    });

    $('.gallery-list-item').click(function() {
        let value = $(this).attr('data-filter');
        if(value === 'all') {
            $('.filter').show(300);
        } else {
            $('.filter').not('.'+value).hide(300);
            $('.filter').filter('.' + value).show(300);
        }
    });

    $('.gallery-list-item').click(function() {
        $(this).addClass('active-item').siblings().removeClass('active-item');
    })

    $('.customer-carousel').carousel({
        interval: 2000
    })

    $(window).scroll(function() {
        let position = $(this).scrollTop();
        if(position >= 4500) {
            $('.card-1').addClass('moveFromLeft');
            $('.card-2').addClass('moveFromRight');
            $('.card-3').addClass('moveFromButtom');
        }
        else {
            $('.card-1').removeClass('moveFromLeft');
            $('.card-2').removeClass('moveFromRight');
            $('.card-3').removeClass('moveFromButtom');   
        }
    });
});
