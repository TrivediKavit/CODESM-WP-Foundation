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