// TODO: ↓↓↓ remove this script ↓↓↓
// Current menu item highlithing
if (getInternetExplorerVersion() !== -1) {
    $('#lock-screen').addClass('visible');
}
$(function() {
    var location = window.location.href;
    var cur_url = location.split('/').pop();

    $('.top-nav li, .panel-nav li, .footer-nav li').each(function() {
        var link = $(this).find('a').attr('href');

        // console.log(link);

        if (cur_url == '') {
            cur_url = 'index.html';
        }

        if (cur_url == link) {
            $(this).addClass('current-menu-item');
            $(this).parents('li').addClass('current-menu-parent');
        }
    });
});


document.addEventListener('DOMContentLoaded', function() {
	const isRTL = $('html').attr('dir') == 'rtl';
    svg4everybody();

    window.lazySizesConfig = {
        addClasses: true
    };
    // if ($(window).width() > 768) {
    $('.form-select').select2({
        minimumResultsForSearch: -1
    });
    $('.select2-search').select2({
        // minimumResultsForSearch: -1
    });
    // }
    $(function() {
        var tab = $('#tabs .tabs-items > div');
        tab.hide().filter(':first').show();

        // Клики по вкладкам.
        $('#tabs .tabs-nav a').click(function() {
            tab.hide();
            tab.filter(this.hash).show();
            $('#tabs .tabs-nav a').removeClass('active');
            $(this).addClass('active');
            return false;
        }).filter(':first').click();

        // Клики по якорным ссылкам.
        $('.tabs-target').click(function() {
            $('#tabs .tabs-nav a[href=' + $(this).data('id') + ']').click();
        });
    });
    
    $(function() {
        var tab = $('.wc-tabs-wrapper > div');
        tab.hide().filter(':first').show();

        // Клики по вкладкам.
        $('.wc-tabs-wrapper .wc-tabs a').click(function() {
            tab.hide();
            tab.filter(this.hash).show();
            $('.wc-tabs-wrapper .wc-tabs a').removeClass('active');
            $(this).addClass('active');
            return false;
        }).filter(':first').click();
 
    });
    
    //scrollGoTo
    let scrollGoTo = function(toScroll) {
        $(document).on('click', 'a[href^="#"]', function(e) {
            e.preventDefault();
            if ($.attr(this, 'href') === '#') {
                return false;
            }
            $('html, body').animate({
                scrollTop: $($.attr(this, 'href')).offset().top - toScroll
            }, 1000);
        });
    } 
    let headerHight = $('header').height();
    scrollGoTo(headerHight);
    //anchor-section
    $('.anchor-section-block>.anchor-section-item').each(function(i, el) { 
        let curentElem = i; 
        $(this).find('a').attr('href', `#section-item${curentElem}`);  
    }); 
    $('.anchor-item').each(function(i, el) { 
        let curentElem = i; 
        $(this).attr('id', `section-item${curentElem}`); 
    });
    //section__columns-center 
    $('.section__columns-center').each(function(i, el) {
        let elem = $('.elment-item__wrrap-inner .wrrap-element');
        let curentElem = $(this).find(elem).length; 
        $(this).addClass(`section__columns-center-${curentElem}`) 
    });
    //modal-form center
    $('#modal-form.modal .modal-dialog').css({
        'height': `calc(100vh - ${$(window).height()}px`, 
        'margin': `${($(window).height())/2}px auto`, 
    });
    // Accordions
    $('.ac-header').click(function(e) {
        if ($(e.target).hasClass('ac-opener')) {
            e.preventDefault();
        }

        $(this).closest('.accordion').toggleClass('opened');
        $(this).closest('.accordion').find('.ac-content').stop().slideToggle(300);
    });

    function getMaxOfArray(numArray) {
        return Math.max.apply(null, numArray);
    }
    if(isRTL){
        $('#get-modal-mobil-menu .menu-item-has-children>a').append('<i class="fa fa-chevron-right trigger"></i>'); 
    }else{ 
        $('#get-modal-mobil-menu .menu-item-has-children>a').append('<i class="fa fa-chevron-left trigger"></i>');
    }
    $('.nav-menu--canvas .menu-item-has-children>a>i').click(function(e) {
        e.preventDefault();
        if (!$(this).parents('.menu-item-has-children').hasClass('active')) {
            $('.menu-item-has-children').removeClass('active');
            $(this).parents('.menu-item-has-children').addClass('active');
        } else {
            $('.menu-item-has-children').removeClass('active');
        }
    });
    // Splitting(); 
    
    $('.woocommerce-product-gallery__wrapper').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: false,
        // infinite: true,
        rtl:isRTL,
        // autoplay: true,
        speed: 600, 
        fade:true,
        asNavFor: '.flex-control-nav'
    }); 
    $('.woocommerce-single-style-1 .flex-control-nav').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        arrows: false,
        dots: false,
        // infinite: true,
        rtl:isRTL,
        variableWidth:true, 
        // autoplay: true,
        speed: 600, 
        asNavFor: '.woocommerce-product-gallery__wrapper',
        focusOnSelect: true,
        responsive: [{
                breakpoint: 485,
                settings: { 
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            }, 
        ]
    });
    $('.woocommerce-single-style-2 .flex-control-nav').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        arrows: false,
        dots: false,
        // infinite: true,
        rtl:isRTL,
        // variableWidth:true,
        vertical:true,
        // autoplay: true,
        speed: 600, 
        asNavFor: '.woocommerce-product-gallery__wrapper',
        focusOnSelect: true,
        // responsive: [{
        //         breakpoint: 485,
        //         settings: { 
        //             slidesToShow: 3,
        //             slidesToScroll: 1,
        //         }
        //     }, 
        // ]
    });
    let $status = $('.list-block');
    let $slickElement = $('.slider-wrrap');
    $slickElement.slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        dots: false,
        infinite: true,
        rtl:isRTL,
        autoplay: true,
        speed: 600,
        adaptiveHeight: true, 
    });
    $slickElement.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) { 
        let i = (currentSlide ? currentSlide : 0) + 1;
        $status.text(slick.slideCount + ' / ' + i);
    }); 

    
    $('.sliders-section__wrrap').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: true,
        dots: false, 
        infinite: true,
        rtl:isRTL,
        // autoplay: true,
        speed: 600,
        adaptiveHeight: true, 
        responsive: [{
                breakpoint: 1023,
                settings: {
                    slidesToShow: 3, 
                    slidesPerRow: 1, 
                }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 2, 
                slidesPerRow: 1, 
              }
            },
            {
              breakpoint: 460,
              settings: {
                slidesToShow: 1, 
                slidesPerRow: 1, 
              }
            },
        ]
    }); 
    // Menu opener
    $('.menu-opener').click(function(e) {
        e.preventDefault();

        $('.menu-opener').toggleClass('active');
        $('.mobile-top-nav').toggleClass('opened');
        $('.header').toggleClass('nav-opened');
        $('.mobil-nav .menu-item-has-children').removeClass('active');
    });
    // product-categories opener
    $('.product-categories i').click(function(e) {
        e.preventDefault();

        // $('.menu-opener').toggleClass('active');
        $('.cat-parent').toggleClass('close');
        $(this).toggleClass('active');
        // $('.mobil-nav .menu-item-has-children').removeClass('active');
    });


    // mobil-nav
    $('.mobil-nav .menu-item-has-children').click(function(e) {
        e.preventDefault();
        if (!$(this).hasClass('active')) {
            $('.mobil-nav .menu-item-has-children').removeClass('active');
            $(this).toggleClass('active');
        } else {
            $('.mobil-nav .menu-item-has-children').removeClass('active');
        }
    });
    // card
    $('.cart-contents').click(function(e) {
        e.preventDefault();
        if (!$('.shopping_cart').hasClass('active')) {
            $('.shopping_cart').removeClass('active');
            $('.shopping_cart').toggleClass('active');
        } else {
            $('.shopping_cart').removeClass('active');
        }
    });
    $(document).mouseup(function(e) {
        if (jQuery(e.target).closest(".shopping_cart.active").length > 0) {
            return false;
        } else $(".shopping_cart.active").removeClass('active');
        clickCount = 1;
    });
    // search
    $('.search-form__toggle').click(function(e) {
        e.preventDefault();
        if (!$('.search-form__container').hasClass('active')) {
            $(this).removeClass('active');
            $('.search-form__container').removeClass('active');
            $('.search-form__container').toggleClass('active');
            $(this).toggleClass('active');
        } else {
            $('.search-form__container').removeClass('active');
            $(this).removeClass('active');
        }
    });
    // Sticky Header
    function stickyHeader() {
        let header = document.querySelector('.header');

        if (!!header) {
            window.scrollY > 100 ?
                header.classList.add('sticky') :
                header.classList.remove('sticky');
        };
    }


    // window.addEventListener('scroll', stickyHeader);
    // setTimeout(stickyHeader, 100);

    // Modals
    $('.modal').css('display', 'block');

    $('.modal-dialog').click(function(e) {
        return e.stopPropagation();
    });
    $('.modal').click(function(e) {
        hideModal($(this));
        $('.video-modal .modal-video').html('<div id="modal-video-iframe"></div>');
    });

    $('.modal-close, .js-modal-close').click(function(e) {
        e.preventDefault();

        hideModal($(this).closest('.modal'));
        $('.video-modal .modal-video').html('<div id="modal-video-iframe"></div>');
    });
    function setTimeoutPosts (elem){ 
        setTimeout(function(){ 
            $(elem).slideDown(); 
        }, 500);
        setTimeout(function(){ 
            $(elem).slideUp(); 
        }, 3500);
    }
    $('[data-modal]').click(function(e) {
        e.preventDefault();
        e.stopPropagation();

        hideModal('.modal');

        if ($(this).data('modal-tab') != undefined) {
            goToTab($(this).data('modal-tab'));
        }

        showModal($(this).data('modal'));
        setTimeoutPosts('.woosw-notice')
    });

    // Tabs
    function goToTab(tabId, handler) {
        if (handler == undefined) {
            handler = false;
        }

        let dest = $(tabId);
        dest.stop().fadeIn(300).siblings().hide(0);

        $('[data-tab="' + tabId + '"]').addClass('current').parent().siblings().find('[data-tab]').removeClass('current');
    }

    $("[data-tab]").click(function(e) {
        e.preventDefault();
        let dest = $(this).data('tab');

        goToTab(dest, $(this));

        $(dest).find('.slick-slider').slick('setPosition');
    });

    $(".filter-nav, .tabs-nav, .cmp-tabs-nav").each(function(i, el) {
        $(el).find('[data-tab]').eq(0).click();
    });

    $('.tabs-select').on('change', function() {
        goToTab($(this).val());
    });

    function btnClick() {
        $(".video-content").on('click', function() {
            // alert("button");
        });

    }

    // Video
    $('.v-start:not([data-video-modal])').on('click', function() {
        let thise = $(this).parents('.video-section')

        thise.addClass('playing');
        thise.find('.block-overlay').fadeOut(300);

        let videoId = thise.find('.play-btn').data('video-id');

        if (!videoId) {
            videoId = thise.data('video-id');
        }

        if (videoId == undefined) {
            thise.find('video')[0].play();
            thise.find('video').attr("controls", "controls");
            btnClick();
        } else {
            let videoType = thise.data('video-type') ? thise.data('video-type').toLowerCase() : 'youtube';

            if (videoType == 'youtube') {
                thise.find('.block-video-container').append('<div class="video-iframe" id="' + videoId + '"></div>');
                createVideo(videoId, videoId);
            } else if (videoType == 'vimeo') {
                thise.find('.block-video-container').append('<div class="video-iframe" id="' + videoId + '"><iframe allow="autoplay" class="video-iframe" src="https://player.vimeo.com/video/' + videoId + '?playsinline=1&autoplay=1&transparent=0&app_id=122963"></div>');
            }
        }

    });
    $('[data-video-modal]').click(function(e) {
        e.preventDefault();
        e.stopPropagation();

        let videoId = $(this).data('video-modal');
        let videoType = $(this).data('video-type');

        if (videoType == 'youtube') {
            $('#modal-video-iframe').removeClass('vimeo youtube').addClass('youtube').append('<div class="video-iframe" id="' + videoId + '"></div>');
            createVideo(videoId, videoId);
        } else if (videoType == 'vimeo') {
            $('#modal-video-iframe').removeClass('vimeo youtube').addClass('vimeo').html('<iframe class="video-iframe" allow="autoplay" src="https://player.vimeo.com/video/' + videoId + '?playsinline=1&autoplay=1&transparent=1&app_id=122963">');
        }

        hideModal('.modal');

        showModal("#video-modal");
    });

    var player;

    function createVideo(videoBlockId, videoId) {
        player = new YT.Player(videoBlockId, {
            videoId: videoId,
            playerVars: {
                'autohide': 1,
                'showinfo': 0,
                'rel': 0,
                'loop': 1,
                'playsinline': 1,
                'fs': 0,
                'allowsInlineMediaPlayback': true
            },
            events: {
                'onReady': function(e) {
                    // e.target.mute();
                    // if ($(window).width() > 991) {
                    setTimeout(function() {
                        e.target.playVideo();
                    }, 200);
                    // }
                }
            }
        });
    }

    //
    let $range = $(".js-range-slider");
    let $inputFrom = $(".js-range-slider_input_from");
    let $inputTo = $(".js-range-slider_input_to");
    let instance;
    let min = $range.data('min');
    let max = $range.data('max');
    let from = $range.data('from');
    let to = $range.data('to');
    let prefix = $range.data('prefix');
    // let prefix = ""

    $range.ionRangeSlider({
        skin: "round",
        type: "double",
        min: min,
        max: max,
        from: from,
        to: to,
        onStart: updateInputs,
        onChange: updateInputs,
        onFinish: updateInputs,
        prefix: prefix
    });
    instance = $range.data("ionRangeSlider");

    function updateInputs(data) {
        from = data.from;
        to = data.to;

        // $inputFrom.prop("value", from);
        // $inputTo.prop("value", to);
        $inputFrom.text(prefix + from);
        $inputTo.text(prefix + to);
    }

    $inputFrom.on("change", function() {
        var val = $(this).html();

        // validate
        if (val < min) {
            val = min;
        } else if (val > to) {
            val = to;
        }

        instance.update({
            from: val
        });

        $(this).text(val);

    });

    $inputTo.on("change", function() {
        var val = $(this).html();

        // validate
        if (val < from) {
            val = from;
        } else if (val > max) {
            val = max;
        }

        instance.update({
            to: val
        });

        $(this).text(val);
    });
});

function getScrollWidth() {
    // create element with scroll
    let div = document.createElement('div');

    div.style.overflowY = 'scroll';
    div.style.width = '50px';
    div.style.height = '50px';

    document.body.append(div);
    let scrollWidth = div.offsetWidth - div.clientWidth;

    div.remove();

    return scrollWidth;
}

let bodyScrolled = 0;

function showModal(modal) {
    $(modal).addClass('visible');
    bodyScrolled = $(window).scrollTop();
    $('body, .header').addClass('modal-visible')
        .scrollTop(bodyScrolled)
        .css('padding-right', getScrollWidth());
}

function hideModal(modal) {
    $(modal).removeClass('visible');
    bodyScrolled = $(window).scrollTop();
    $('body, .header').removeClass('modal-visible')
        .scrollTop(bodyScrolled)
        .css('padding-right', 0);
}

function getInternetExplorerVersion() {
    var rv = -1;
    if (navigator.appName == 'Microsoft Internet Explorer') {
        var ua = navigator.userAgent;
        var re = new RegExp("MSIE ([0-9]{1,}[\.0-9]{0,})");
        if (re.exec(ua) != null)
            rv = parseFloat(RegExp.$1);
    } else if (navigator.appName == 'Netscape') {
        var ua = navigator.userAgent;
        var re = new RegExp("Trident/.*rv:([0-9]{1,}[\.0-9]{0,})");
        if (re.exec(ua) != null)
            rv = parseFloat(RegExp.$1);
    }
    return rv;
}