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

