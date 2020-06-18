const THEME_FOLDER = "../wp-content/themes/codesm_wp_foundation";
const PHONE_FIELD = ".codesm-phone-field";
const DATEPICKER_FIELD = ".codesm-datepicker-field";
const EQUALIZE_CONTENT = ".codesm-equalize-content";

jQuery(document).ready(function(){

	// SET UP FOUNDATION
	jQuery(document).foundation();

	// TRIGGER THEME FUNCTIONS
	triggerThemeFunctions();

	// ADD YOUR CODE HERE
	//
	//
});

// DO NOT EDIT BELOW THIS POINT UNLESS NECESSARY
function triggerThemeFunctions()
{
	// REMOVE EMPTY P TAGS CREATED BY WP INSIDE OF ACCORDION AND ORBIT
	jQuery('.accordion p:empty, .orbit p:empty').remove();

	// ADD FLEX VIDEO TO YOUTUBE AND VIMEO EMBEDS
	jQuery(':not(.responsive-embed):not(.flex-video)>iframe[src*="youtube.com"], :not(.responsive-embed):not(.flex-video)>iframe[src*="vimeo.com"]').each(function() {
		if ( jQuery(this).innerWidth() / jQuery(this).innerHeight() > 1.5 ) {
			jQuery(this).wrap("<div class='widescreen responsive-embed'/>");
		} else {
			jQuery(this).wrap("<div class='responsive-embed'/>");
		}
	});

	// ENABLE PSEUDO ELEMENTS FOR FONT AWESOME
	window.FontAwesomeConfig = {
		searchPseudoElements: true
	};

	// DISABLE FIRST OPTION
	jQuery('select.disable-first-option').each(function(){
		jQuery(this).find('option').first().attr('disabled', 'disabled');
	});

	// HANDLE DATA-HREF
	setHrefs();

	// TRIGGER EQUALIZER
	initEqualizeContent(EQUALIZE_CONTENT);

	// TRIGGER CUSTOM CAROUSEL
	initCustomCarousel();

	// INTL-TEL-INPUT
	initTelephoneInput(PHONE_FIELD, THEME_FOLDER);

	// ENABLE NEGATIVE MARGINS
	enableNegativeMargins();

	// FOUNDATION DATEPICKER
	initDatepickerInput(DATEPICKER_FIELD);
}