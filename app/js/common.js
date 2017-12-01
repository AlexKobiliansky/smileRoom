$(function() {

    $(".toggle-mnu").click(function() {
        $(this).toggleClass("on");
        $(".hidden-mnu").slideToggle();
        return false;
    });

    function heightses() {
        if ($(window).width()>=768) {
            $(".head-item>.title").height("auto").equalHeights();
            $(".sert-item").height("auto").equalHeights();
        }
    }

    $(window).resize(function() {
        heightses();
    });

    heightses();

    $(".owl-head").owlCarousel({
        loop:true,
        items: 1,
        autoplay: true,
        autoplaySpeed: 1000,
        autoplayTimeout: 18000

    });

    $(".popup-link").each(function(e){
        $(this).attr("href", "#popup-window-"+ e)
            .find(".popup-window").attr("id", "popup-window-"+e);
    });

    $(".popup-sert").each(function(e){
        $(this).attr("href", "#popup-sert-"+ e)
            .find(".window-sert").attr("id", "popup-sert-"+e);
    });


    $('.popup-sert').magnificPopup({
        removalDelay: 300,
        mainClass: 'my-mfp-zoom-sert',
        type: 'inline',
        fixedContentPos: false,
        fixedBgPos: true,
        gallery: {
            enabled: true
        },

    });



    $(".popup-link").magnificPopup({
        type: 'inline',

        fixedContentPos: false,
        fixedBgPos: true,

        overflowY: 'auto',

        closeBtnInside: true,
        preloader: false,

        midClick: true,
        removalDelay: 300,
        mainClass: 'my-mfp-zoom-in'
    });


    $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
        disableOn: 200,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,

        fixedContentPos: false
    });

    $('a[title]').qtip({
        show: 'click',
        hide: 'unfocus',
        position: {
            my: 'bottom center',  // Position my top left...
            at: 'top center ',
            effect: false,
            viewport: $('.container'),
            adjust: {
                method: 'shift none'
            }
        },
        style: {
            tip: {
                width: 16
            }
        }

    });




    $(init);
    function init() {
        var initOffset = $('.pickUp_game_area').offset();
        var xPos = initOffset.left;
        var yPos = initOffset.top;
        var titleBefore = '<a href="/stoimost/" class="_link">';
        var titleAfter = '</a>';

        $('.pickUp_game_item_left').mousedown(function(){
            $('.pickUp_game_item._activeLeft').addClass('_active');
        });
        $('.pickUp_game_item_left').mouseup(function(){
            $('.pickUp_game_item._activeLeft').removeClass('_active');
        });
        $('.pickUp_game_item_right').mousedown(function(){
            $('.pickUp_game_item._activeRight').addClass('_active');
        });
        $('.pickUp_game_item_right').mouseup(function(){
            $('.pickUp_game_item._activeRight').removeClass('_active');
        });
        $('.pickUp_game_item_left').draggable({
            containment:['pickUp_game_area'],
            scroll:false,
            cursorAt:{cursor:"move", left:15},
            axis: "x",
            drag: function(){
                $('.pickUp_game_item_posle').css('display','none');
                $('.pickUp_game_item._activeLeft').addClass('_active');
                var offset = $(this).offset();
                var initOffset = $('.pickUp_game_area').offset();
                var xPos = offset.left - initOffset.left;
                function checkPosition(x, axis){
                    $('.pickUp_game_item._activeLeft').removeClass('_activeLeft');
                    if($('.pickUp_game_item[data-tone="'+x+'"]').hasClass('_activeRight') || $('.pickUp_game_item._activeRight').data('tone')<x){
                        $('.pickUp_game_item_right').css('left',axis);
                        $('.pickUp_game_item._activeRight').removeClass('_activeRight');
                        $('.pickUp_game_item[data-tone="'+(x + 1)+'"]').addClass('_activeRight');
                        $('.pickUp_game_item[data-tone="'+x+'"]').addClass('_activeLeft').addClass('_active');
                    }
                    else{
                        $('.pickUp_game_item[data-tone="'+x+'"]').addClass('_activeLeft').addClass('_active');
                    }
                    var left = $('.pickUp_game_item._activeLeft').data('tone');
                    var right = $('.pickUp_game_item._activeRight').data('tone');
                    var diff = (right - left)*2;
                    if((diff>0 && diff<5) || (diff>20 && diff<25) || (diff>30 && diff<35)){var diffText = ' тона';}else{var diffText = ' тонов';}
                    $('.pickUp_count_number').text(diff+diffText);
                    if(diff>1 && diff<5){var price = $('[data-exp]').data('exp');$('.pickUp_count_function').html(titleBefore+'Express'+titleAfter+' за '+price+' ₽');}
                    else if(diff>5 && diff<9){var price = $('[data-dou]').data('dou');$('.pickUp_count_function').html(titleBefore+'Double'+titleAfter+' за '+price+' ₽');}
                    else if(diff>9 && diff<13){var price = $('[data-max]').data('max');$('.pickUp_count_function').html(titleBefore+'Maximum'+titleAfter+' за '+price+' ₽');}
                    else if(diff>13 && diff<19){var price = $('[data-com]').data('com');$('.pickUp_count_function').html(titleBefore+'Complex'+titleAfter+' за '+price+' ₽');}
                    else if(diff>19){var price = $('[data-pre]').data('pre');$('.pickUp_count_function').html(titleBefore+'Premium'+titleAfter+' за '+price+' ₽');}
                }
                if(xPos>=0 && xPos<20)checkPosition(1, 20);if(xPos>=20 && xPos<51)checkPosition(2, 51+15);if(xPos>=51 && xPos<80)checkPosition(3, 80+15);if(xPos>=80 && xPos<111)checkPosition(4, 111+15);if(xPos>=111 && xPos<139)checkPosition(5, 139+15);if(xPos>=139 && xPos<169)checkPosition(6, 169+15);if(xPos>=169 && xPos<197)checkPosition(7, 197+15);if(xPos>=197 && xPos<225)checkPosition(8, 225+15);if(xPos>=225 && xPos<251)checkPosition(9, 251+15);if(xPos>=251 && xPos<280)checkPosition(10, 280+15);if(xPos>=280 && xPos<309)checkPosition(11, 309+15);if(xPos>=309 && xPos<338)checkPosition(12, 338+15);if(xPos>=338 && xPos<363)checkPosition(13, 363+15);if(xPos>=363 && xPos<391)checkPosition(14, 391+15);if(xPos>=391 && xPos<417)checkPosition(15, 417+15);if(xPos>=417 && xPos<444)checkPosition(16, 444+15);if(xPos>=444 && xPos<469)checkPosition(17, 469+15);if(xPos>=469 && xPos<503)checkPosition(18, 503+15);if(xPos>=503 && xPos<527)checkPosition(19, 527+15);
            },
            stop: function() {
                $('.pickUp_game_item._activeLeft').removeClass('_active');
                var offset = $(this).offset();
                var initOffset = $('.pickUp_game_area').offset();
                var xPos = offset.left - initOffset.left;
                if($('.pickUp_game_item._activeLeft').data('tone')==1)$('.pickUp_game_item_left').css('left','3px');if($('.pickUp_game_item._activeLeft').data('tone')==2)$('.pickUp_game_item_left').css('left','34px');if($('.pickUp_game_item._activeLeft').data('tone')==3)$('.pickUp_game_item_left').css('left','64px');if($('.pickUp_game_item._activeLeft').data('tone')==4)$('.pickUp_game_item_left').css('left','95px');if($('.pickUp_game_item._activeLeft').data('tone')==5)$('.pickUp_game_item_left').css('left','125px');if($('.pickUp_game_item._activeLeft').data('tone')==6)$('.pickUp_game_item_left').css('left','154px');if($('.pickUp_game_item._activeLeft').data('tone')==7)$('.pickUp_game_item_left').css('left','183px');if($('.pickUp_game_item._activeLeft').data('tone')==8)$('.pickUp_game_item_left').css('left','211px');if($('.pickUp_game_item._activeLeft').data('tone')==9)$('.pickUp_game_item_left').css('left','238px');if($('.pickUp_game_item._activeLeft').data('tone')==10)$('.pickUp_game_item_left').css('left','266px');if($('.pickUp_game_item._activeLeft').data('tone')==11)$('.pickUp_game_item_left').css('left','294px');if($('.pickUp_game_item._activeLeft').data('tone')==12)$('.pickUp_game_item_left').css('left','321px');if($('.pickUp_game_item._activeLeft').data('tone')==13)$('.pickUp_game_item_left').css('left','349px');if($('.pickUp_game_item._activeLeft').data('tone')==14)$('.pickUp_game_item_left').css('left','376px');if($('.pickUp_game_item._activeLeft').data('tone')==15)$('.pickUp_game_item_left').css('left','404px');if($('.pickUp_game_item._activeLeft').data('tone')==16)$('.pickUp_game_item_left').css('left','432px');if($('.pickUp_game_item._activeLeft').data('tone')==17)$('.pickUp_game_item_left').css('left','458px');if($('.pickUp_game_item._activeLeft').data('tone')==18)$('.pickUp_game_item_left').css('left','485px');if($('.pickUp_game_item._activeLeft').data('tone')==19)$('.pickUp_game_item_left').css('left','514px');
            }
        });
        $('.pickUp_game_item_right').draggable({
            containment:['pickUp_game_area'],
            scroll:false,
            cursorAt:{cursor:"move", left:15},
            axis: "x",
            drag: function(){
                $('.pickUp_game_item_do').css('display','none');
                $('.pickUp_game_item._activeRight').addClass('_active');
                var offset = $(this).offset();
                var initOffset = $('.pickUp_game_area').offset();
                var xPos = offset.left - initOffset.left;
                function checkPosition(x, axis){
                    $('.pickUp_game_item._activeRight').removeClass('_activeRight');
                    if($('.pickUp_game_item[data-tone="'+x+'"]').hasClass('_activeLeft') || $('.pickUp_game_item._activeLeft').data('tone')>x){
                        $('.pickUp_game_item_left').css('left',(axis - 30));
                        $('.pickUp_game_item._activeLeft').removeClass('_activeLeft');
                        $('.pickUp_game_item[data-tone="'+(x - 1)+'"]').addClass('_activeLeft');
                        $('.pickUp_game_item[data-tone="'+x+'"]').addClass('_activeRight').addClass('_active');
                    }
                    else{
                        $('.pickUp_game_item[data-tone="'+x+'"]').addClass('_activeRight').addClass('_active');
                    }
                    var left = $('.pickUp_game_item._activeLeft').data('tone');
                    var right = $('.pickUp_game_item._activeRight').data('tone');
                    var diff = (right - left)*2;
                    if((diff>0 && diff<5) || (diff>20 && diff<25) || (diff>30 && diff<35)){var diffText = ' тона';}else{var diffText = ' тонов';}
                    $('.pickUp_count_number').text(diff+diffText);
                    if(diff>1 && diff<5){var price = $('[data-exp]').data('exp');$('.pickUp_count_function').html(titleBefore+'Express'+titleAfter+' за '+price+' ₽');}
                    else if(diff>5 && diff<9){var price = $('[data-dou]').data('dou');$('.pickUp_count_function').html(titleBefore+'Double'+titleAfter+' за '+price+' ₽');}
                    else if(diff>9 && diff<13){var price = $('[data-max]').data('max');$('.pickUp_count_function').html(titleBefore+'Maximum'+titleAfter+' за '+price+' ₽');}
                    else if(diff>13 && diff<19){var price = $('[data-com]').data('com');$('.pickUp_count_function').html(titleBefore+'Complex'+titleAfter+' за '+price+' ₽');}
                    else if(diff>19){var price = $('[data-pre]').data('pre');$('.pickUp_count_function').html(titleBefore+'Premium'+titleAfter+' за '+price+' ₽');}
                }
                if(xPos>=20 && xPos<51)checkPosition(2, 51-15);if(xPos>=51 && xPos<80)checkPosition(3, 80-15);if(xPos>=80 && xPos<111)checkPosition(4, 111-15);if(xPos>=111 && xPos<139)checkPosition(5, 139-15);if(xPos>=139 && xPos<169)checkPosition(6, 169-15);if(xPos>=169 && xPos<197)checkPosition(7, 197-15);if(xPos>=197 && xPos<225)checkPosition(8, 225-15);if(xPos>=225 && xPos<251)checkPosition(9, 251-15);if(xPos>=251 && xPos<280)checkPosition(10, 280-15);if(xPos>=280 && xPos<309)checkPosition(11, 309-15);if(xPos>=309 && xPos<338)checkPosition(12, 338-15);if(xPos>=338 && xPos<363)checkPosition(13, 363-15);if(xPos>=363 && xPos<391)checkPosition(14, 391-15);if(xPos>=391 && xPos<417)checkPosition(15, 417-15);if(xPos>=417 && xPos<444)checkPosition(16, 444-15);if(xPos>=444 && xPos<469)checkPosition(17, 469-15);if(xPos>=469 && xPos<503)checkPosition(18, 503-15);if(xPos>=503 && xPos<527)checkPosition(19, 527-15);if(xPos>=527)checkPosition(20);
            },
            stop: function() {
                $('.pickUp_game_item._activeRight').removeClass('_active');
                var offset = $(this).offset();
                var initOffset = $('.pickUp_game_area').offset();
                var xPos = offset.left - initOffset.left;
                if($('.pickUp_game_item._activeRight').data('tone')==2)$('.pickUp_game_item_right').css('left','34px');if($('.pickUp_game_item._activeRight').data('tone')==3)$('.pickUp_game_item_right').css('left','64px');if($('.pickUp_game_item._activeRight').data('tone')==4)$('.pickUp_game_item_right').css('left','95px');if($('.pickUp_game_item._activeRight').data('tone')==5)$('.pickUp_game_item_right').css('left','125px');if($('.pickUp_game_item._activeRight').data('tone')==6)$('.pickUp_game_item_right').css('left','154px');if($('.pickUp_game_item._activeRight').data('tone')==7)$('.pickUp_game_item_right').css('left','183px');if($('.pickUp_game_item._activeRight').data('tone')==8)$('.pickUp_game_item_right').css('left','211px');if($('.pickUp_game_item._activeRight').data('tone')==9)$('.pickUp_game_item_right').css('left','238px');if($('.pickUp_game_item._activeRight').data('tone')==10)$('.pickUp_game_item_right').css('left','266px');if($('.pickUp_game_item._activeRight').data('tone')==11)$('.pickUp_game_item_right').css('left','294px');if($('.pickUp_game_item._activeRight').data('tone')==12)$('.pickUp_game_item_right').css('left','321px');if($('.pickUp_game_item._activeRight').data('tone')==13)$('.pickUp_game_item_right').css('left','349px');if($('.pickUp_game_item._activeRight').data('tone')==14)$('.pickUp_game_item_right').css('left','376px');if($('.pickUp_game_item._activeRight').data('tone')==15)$('.pickUp_game_item_right').css('left','404px');if($('.pickUp_game_item._activeRight').data('tone')==16)$('.pickUp_game_item_right').css('left','432px');if($('.pickUp_game_item._activeRight').data('tone')==17)$('.pickUp_game_item_right').css('left','458px');if($('.pickUp_game_item._activeRight').data('tone')==18)$('.pickUp_game_item_right').css('left','485px');if($('.pickUp_game_item._activeRight').data('tone')==19)$('.pickUp_game_item_right').css('left','514px');if($('.pickUp_game_item._activeRight').data('tone')==20)$('.pickUp_game_item_right').css('left','539px');
            }
        });
    }












});
