import 'foundation-datepicker'
import { formatDate } from './format-date'

export function initDatepickerInput(selector, format)
{
	if(typeof format === 'undefined')
	{
		format = 'mm/dd/yyyy' // FALLBACK TO US FORMAT
	}

	jQuery(selector).each(function(){
		if(!jQuery(this).hasClass('allow-user-fillable'))
		{
			jQuery(this).attr("readonly", "readonly");
		}
		if(jQuery(this).hasClass('default-to-today'))
		{
			jQuery(this).val(formatDate(format));
		}
		if(jQuery(this).hasClass('disable-past-dates'))
		{
			jQuery(this).fdatepicker({
				format: format,
				startDate: formatDate(format)
			});
		}
		else
		{
			jQuery(this).fdatepicker({
				format: format,
			});
		}
	});
}