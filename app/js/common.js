$(function() {

    $(".toggle-mnu").click(function() {
        $(this).toggleClass("on");
        $(".hidden-mnu").slideToggle();
        return false;
    });

    function heightses() {
        if ($(window).width()>=768) {
            $(".head-item>.title").height("auto").equalHeights();
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






});
