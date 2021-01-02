/** ============================================================= *
 *  ---------------------- IMPORT - START ----------------------- *
 *  ============================================================= */
import 'what-input'
import Foundation from 'foundation-sites'
import intlTelInput from 'intl-tel-input'
import Swiper, { Navigation, Pagination } from 'swiper'
import { setHrefs } from './functions/data-hrefs'
import { initEqualizeContent } from './functions/equalizer'
import { initTelephoneInput } from './functions/intl-tel-input'
import { initDatepickerInput } from './functions/datepicker'
import { enableNegativeMargins } from './functions/negative-margins'
import { mapStyles } from './functions/map-styles'
// import { enableCallrailTracking } from './functions/callrail'
/** ============================================================= *
 *  ----------------------- IMPORT - END ------------------------ *
 *  ============================================================= */



/** ============================================================= *
 *  ------------ GLOBAL VARIABLES DECLARATION - START ----------- *
 *  ============================================================= */
const THEME_FOLDER = "../wp-content/themes/codesm_wp_foundation"
const PHONE_FIELD = ".codesm-phone-field"
const DATEPICKER_FIELD = ".codesm-datepicker-field"
const DATEPICKER_FORMAT = "dd/mm/yyyy"
const EQUALIZE_CONTENT = ".codesm-equalize-content"

Foundation.addToJquery(jQuery)
Swiper.use([Navigation, Pagination])
window.intlTelInput = intlTelInput
window.setHrefs = setHrefs
window.initEqualizeContent = initEqualizeContent
window.initTelephoneInput = initTelephoneInput
window.initDatepickerInput = initDatepickerInput
window.enableNegativeMargins = enableNegativeMargins
window.mapStyles = mapStyles
// window.enableCallrailTracking = enableCallrailTracking
/** ============================================================= *
 *  ------------- GLOBAL VARIABLES DECLARATION - END ------------ *
 *  ============================================================= */



jQuery(document).ready(function(){
	jQuery(document).foundation();
	triggerThemeFunctions();

	// ADD YOUR CODE HERE
	// 
	//

});



/** ======= DO NOT EDIT BELOW THIS POINT UNLESS NECESSARY ======= *
 *  ----------------- THEME FUNCTIONS - START ------------------- *
 *  ======= DO NOT EDIT BELOW THIS POINT UNLESS NECESSARY ======= */
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
	window.setHrefs();

	// TRIGGER EQUALIZER
	window.initEqualizeContent(EQUALIZE_CONTENT);

	// INTL-TEL-INPUT
	window.initTelephoneInput(PHONE_FIELD, THEME_FOLDER);

	// ENABLE NEGATIVE MARGINS
	window.enableNegativeMargins();

	// FOUNDATION DATEPICKER
	window.initDatepickerInput(DATEPICKER_FIELD, DATEPICKER_FORMAT);

	// // ENABLE CALLRAIL TRACKING
	// window.enableCallrailTracking();
}
/** ======= DO NOT EDIT ABOVE THIS POINT UNLESS NECESSARY ======= *
 *  ------------------ THEME FUNCTIONS - END -------------------- *
 *  ======= DO NOT EDIT ABOVE THIS POINT UNLESS NECESSARY ======= */