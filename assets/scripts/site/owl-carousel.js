// CUSTOM OWL CAROUSEL GALLERY
// reference for main items
var customOwlCarousel = jQuery('#custom-owl-carousel');
// reference for thumbnail items
var customOwlCarouselThumbs = jQuery('#custom-owl-carousel-thumbs').attr('data-slider-id') == jQuery(customOwlCarousel).attr('data-slider-id') ? jQuery('#custom-owl-carousel-thumbs') : null;
//transition time in ms
var duration = 300;

customOwlCarousel.owlCarousel({
    loop:false,
    margin:0,
    nav:false,
    dots:false,
    autoplay:true,
    autoplayTimeout:15000,
    autoHeight:true,
    responsive:{
        0:{
            items:1
        },
        640:{
            items:1
        },
        1024:{
            items:1
        },
        1200:{
            items:1
        },
        1440:{
            items:1
        }
    }
}).on('changed.owl.carousel', function (e) {
    //On change of main item to trigger thumbnail item
    customOwlCarouselThumbs.trigger('to.owl.carousel', [e.item.index, duration, true]);
    customOwlCarouselThumbs.find('.current').removeClass('current');
    var index = e.item.index;
    var offset = jQuery(e.target).find('.active:first').prevAll('.cloned').length;
    customOwlCarouselThumbs.find('.owl-item').eq(index-offset).addClass('current');
});

customOwlCarouselThumbs.owlCarousel({
    loop:false,
    margin:24,
    nav:false,
    dots:false,
    autoplay:false,
    responsive:{
        0:{
            items:2
        },
        640:{
            items:4
        },
        1024:{
            items:5
        },
        1200:{
            items:6
        },
        1440:{
            items:7
        }
    }
}).on('click', '.owl-item', function () {
    // On click of thumbnail items to trigger same main item
    customOwlCarousel.trigger('to.owl.carousel', [jQuery(this).index(), duration, true]);
    customOwlCarouselThumbs.find('.current').removeClass('current');
    jQuery(this).addClass('current');
}).on('changed.owl.carousel', function (e) {
    // On change of thumbnail item to trigger main item
    customOwlCarousel.trigger('to.owl.carousel', [e.item.index, duration, true]);
});

customOwlCarouselThumbs.find('.owl-item').first().addClass('current');

jQuery('#custom-owl-carousel-right').click(function() {
    customOwlCarousel.trigger('next.owl.carousel');
});
jQuery('#custom-owl-carousel-left').click(function() {
    customOwlCarousel.trigger('prev.owl.carousel');
});