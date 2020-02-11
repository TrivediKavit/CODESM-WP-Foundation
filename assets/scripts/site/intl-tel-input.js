import intlTelInput from 'intl-tel-input';

export function initTelephoneInput(selector, directory)
{
	var elements		= document.querySelectorAll(selector),
		element_count	= elements.length;

	if(element_count >= 1)
	{
		while (element_count-- > 0)
		{
			var element = elements[element_count];

			var element_i = intlTelInput(element, {
				utilsScript: directory + "/assets/scripts/utils.js",
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

			jQuery(element).on("keyup change", function(){
				var currentText = element_i.getNumber(intlTelInputUtils.numberFormat.E164);
				element_i.setNumber(currentText);
			});
		}
	}
}

