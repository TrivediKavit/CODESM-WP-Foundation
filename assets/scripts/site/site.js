const THEME_FOLDER = "../wp-content/themes/codesm_wp_foundation";
const PHONE_FIELD = ".codesm-phone-field";
const DATEPICKER_FIELD = ".codesm-datepicker-field";
const EQUALIZE_CONTENT = ".codesm-equalize-content";

import 'foundation-sites';
import { setHrefs } from './data-hrefs';
import { equalizeContent } from './equalizer';
import { initTelephoneInput } from './intl-tel-input';
import { enableNegativeMargins } from './negative-margins';
import { mapStyles } from './map-styles';
var offCanvas = new Foundation.OffCanvas(jQuery('#off-canvas'));
import './offcanvas';
import './callrail';
import './owl-carousel';

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

jQuery(document).ready(function(){
	
	// SET UP FOUNDATION
	jQuery(document).foundation();

	// ASSIGN mapStyles to WINDOW
	window.mapStyles = mapStyles;

	// REMOVE EMPTY P TAGS CREATED BY WP INSIDE OF ACCORDION AND ORBIT
	jQuery('.accordion p:empty, .orbit p:empty').remove();

	// ADD FLEX VIDEO TO YOUTUBE AND VIMEO EMBEDS
	jQuery('iframe[src*="youtube.com"], iframe[src*="vimeo.com"]').each(function() {
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
	equalizeContent(EQUALIZE_CONTENT);

	// INTL-TEL-INPUT
	initTelephoneInput(PHONE_FIELD, THEME_FOLDER);

	// ENABLE NEGATIVE MARGINS
	enableNegativeMargins();

	// FOUNDATION DATEPICKER
	jQuery(DATEPICKER_FIELD).each(function(){
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
});