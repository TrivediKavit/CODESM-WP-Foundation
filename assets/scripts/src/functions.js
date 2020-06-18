jQuery.fn.extend({
    getPath: function() {
        var pathes = [];

        this.each(function(index, element) {
            var path, $node = jQuery(element);

            while ($node.length) {
                var realNode = $node.get(0), name = realNode.localName;
                if (!name) { break; }

                name = name.toLowerCase();
                var parent = $node.parent();
                var sameTagSiblings = parent.children(name);

                if (sameTagSiblings.length > 1)
                {
                    var allSiblings = parent.children();
                    var index = allSiblings.index(realNode) + 1;
                    if (index > 0) {
                        name += ':nth-child(' + index + ')';
                    }
                }

                path = name + (path ? ' > ' + path : '');
                $node = parent;
            }

            pathes.push(path);
        });

        return pathes.join(',');
    }
});

// ADD CALLRAIL TRIGGER
var forms = document.querySelectorAll('form');
[...forms].forEach(form => {
    if(!form.hasAttribute('cr-attached'))
    {
        form.addEventListener(
        'submit',
            function() {
                CallTrk.captureForm(jQuery(form).getPath());
            }
        )
    }
});
function addEvent(ele, event, func)
{
	if(ele.addEventListener) ele.addEventListener(event, func, false);
	else ele.attachEvent('on' + event, func);
}

function link(event)
{
	var target	= event.target;
	var url	= this.getAttribute('data-href');
	var newWindow = (this.getAttribute('data-newwindow') !== null) ? true : false;

	if (!target.href)
	{
		var meta = (newWindow) ? '_blank' : '_self';
		window.open(url, meta);
	}
}

function setHrefs()
{
	if (document.querySelectorAll)
	{
		var datahrefs	= document.querySelectorAll('[data-href]'),
				dhcount	= datahrefs.length;
		
		while (dhcount-- > 0)
		{
			var ele = datahrefs[dhcount];
			addEvent(ele, 'click', link);
		}
	}
}
function formatDate(date)
{
	if(typeof(date) === 'undefined')
	{
		var d = new Date()
	}
	else
	{
		var d = new Date(date);
	}
    var month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;

    return [month, day, year].join('/');
}
function initDatepickerInput(selector)
{
	jQuery(selector).each(function(){
		if(!jQuery(this).hasClass('allow-user-fillable'))
		{
			jQuery(this).attr("readonly", "readonly");
		}
		if(jQuery(this).hasClass('default-to-today'))
		{
			jQuery(this).val(formatDate());
		}
		if(jQuery(this).hasClass('disable-past-dates'))
		{
			jQuery(this).fdatepicker({
				startDate: formatDate()
			});
		}
		else
		{
			jQuery(this).fdatepicker();
		}
	});
}
function initEqualizeContent(selector)
{
	if(jQuery(selector).length)
	{
		jQuery(selector).each(function(){
			jQuery(this).attr('data-equalizer', '');
			jQuery(this).attr('data-equalize-on', 'large');
			new Foundation.Equalizer(jQuery(this)).applyHeight();
		});
	}
}
function initTelephoneInput(selector, directory)
{
	var elements		= document.querySelectorAll(selector),
		element_count	= elements.length;

	if(element_count >= 1)
	{
		window.iti = [];

		while (element_count-- > 0)
		{
			var element = elements[element_count];

			window.iti[element_count] = intlTelInput(element, {
				utilsScript: directory + "/assets/scripts/intl-tel-input-utility.js",
				preferredCountries: ['US', 'MX'],
				nationalMode: false,
				initialCountry: "auto",
				formatOnDisplay: true,
				geoIpLookup: function(callback) {
					jQuery.get('https://ipinfo.io', function() {}, "jsonp").always(function(resp) {
						var countryCode = (resp && resp.country) ? resp.country : "";
						callback(countryCode);
					});
				}
			});
		}

		jQuery(selector).each(function(index){
			jQuery(this).on("keyup change", function(){
				var currentText = window.iti[index].getNumber(intlTelInputUtils.numberFormat.E164);
				window.iti[index].setNumber(currentText);
			});
		});
	}
}


function mapStyles()
{
  return [
    {
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#f5f5f5"
        }
      ]
    },
    {
      "elementType": "labels.icon",
      "stylers": [
        {
          "visibility": "off"
        }
      ]
    },
    {
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#616161"
        }
      ]
    },
    {
      "elementType": "labels.text.stroke",
      "stylers": [
        {
          "color": "#f5f5f5"
        }
      ]
    },
    {
      "featureType": "administrative.land_parcel",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#bdbdbd"
        }
      ]
    },
    {
      "featureType": "poi",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#eeeeee"
        }
      ]
    },
    {
      "featureType": "poi",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#757575"
        }
      ]
    },
    {
      "featureType": "poi.park",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#e5e5e5"
        }
      ]
    },
    {
      "featureType": "poi.park",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#9e9e9e"
        }
      ]
    },
    {
      "featureType": "road",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#ffffff"
        }
      ]
    },
    {
      "featureType": "road.arterial",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#757575"
        }
      ]
    },
    {
      "featureType": "road.highway",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#dadada"
        }
      ]
    },
    {
      "featureType": "road.highway",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#616161"
        }
      ]
    },
    {
      "featureType": "road.local",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#9e9e9e"
        }
      ]
    },
    {
      "featureType": "transit.line",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#e5e5e5"
        }
      ]
    },
    {
      "featureType": "transit.station",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#eeeeee"
        }
      ]
    },
    {
      "featureType": "water",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#c9c9c9"
        }
      ]
    },
    {
      "featureType": "water",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#9e9e9e"
        }
      ]
    }
  ];
}
function enableNegativeMargins()
{
	var widthMobile = (jQuery(window).width() + (window.innerWidth - document.documentElement.clientWidth)) > 1024;

    // 100% - TOP
	jQuery('.has-negative-margin-top-100-percent').each(function(){
		var height = jQuery(this).outerHeight();
		if(widthMobile === true)
		{
			jQuery(this).css('marginTop', -height);
		}
		else
		{
			jQuery(this).css('marginTop', '0');
		}
	});

    // 100% - BOTTOM
	jQuery('.has-negative-margin-bottom-100-percent').each(function(){
		var height = jQuery(this).outerHeight();
		if(widthMobile === true)
		{
			jQuery(this).css('marginBottom', -height);
		}
		else
		{
			jQuery(this).css('marginBottom', '0');
		}
	});
	
	// 60% - TOP
	jQuery('.has-negative-margin-top-60-percent').each(function(){
		var height = jQuery(this).outerHeight()*0.6;
		if(widthMobile === true)
		{
			jQuery(this).css('marginTop', -height);
		}
		else
		{
			jQuery(this).css('marginTop', '0');
		}
    });
    
    // 60% - BOTTOM
	jQuery('.has-negative-margin-bottom-60-percent').each(function(){
		var height = jQuery(this).outerHeight()*0.6;
		if(widthMobile === true)
		{
			jQuery(this).css('marginBottom', -height);
		}
		else
		{
			jQuery(this).css('marginBottom', '0');
		}
    });
    
    // 50% - TOP
	jQuery('.has-negative-margin-top-50-percent').each(function(){
		var height = jQuery(this).outerHeight()/2;
		if(widthMobile === true)
		{
			jQuery(this).css('marginTop', -height);
		}
		else
		{
			jQuery(this).css('marginTop', '0');
		}
    });
    
    // 50% - BOTTOM
	jQuery('.has-negative-margin-bottom-50-percent').each(function(){
		var height = jQuery(this).outerHeight()/2;
		if(widthMobile === true)
		{
			jQuery(this).css('marginBottom', -height);
		}
		else
		{
			jQuery(this).css('marginBottom', '0');
		}
	});
	
	// 40% - TOP
	jQuery('.has-negative-margin-top-40-percent').each(function(){
		var height = jQuery(this).outerHeight()*0.4;
		if(widthMobile === true)
		{
			jQuery(this).css('marginTop', -height);
		}
		else
		{
			jQuery(this).css('marginTop', '0');
		}
    });
    
    // 40% - BOTTOM
	jQuery('.has-negative-margin-bottom-40-percent').each(function(){
		var height = jQuery(this).outerHeight()*0.4;
		if(widthMobile === true)
		{
			jQuery(this).css('marginBottom', -height);
		}
		else
		{
			jQuery(this).css('marginBottom', '0');
		}
    });
}
// Off-Canvas Menu
jQuery('#off-canvas').on('opened.zf.offcanvas', function(){
    jQuery('#off-canvas-close').removeClass('slide-right');
    jQuery('#off-canvas-close').addClass('slide-left');
    jQuery('#mobileMenuToggle').removeClass('fadeIn-right');
    jQuery('#mobileMenuToggle').addClass('fadeOut-left');
});

jQuery('#off-canvas').on('closed.zf.offcanvas', function(){
    jQuery('#off-canvas-close').removeClass('slide-left');
    jQuery('#off-canvas-close').addClass('slide-right');
    jQuery('#mobileMenuToggle').removeClass('fadeOut-left');
    jQuery('#mobileMenuToggle').addClass('fadeIn-right');
});
// CUSTOM OWL CAROUSEL GALLERY
function initCustomCarousel()
{
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
}