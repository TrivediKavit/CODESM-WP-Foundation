export function initEqualizeContent(selector)
{
	if(jQuery(selector).length)
	{
		jQuery(selector).each(function(){
			jQuery(this).attr('data-equalizer', '');
			jQuery(this).attr('data-equalize-on', 'large');
			new Foundation.Equalizer(jQuery(this)).applyHeight();
		});
	}

	if(jQuery(selector + '-medium').length)
	{
		jQuery(selector + '-medium').each(function(){
			jQuery(this).attr('data-equalizer', '');
			jQuery(this).attr('data-equalize-on', 'medium');
			new Foundation.Equalizer(jQuery(this)).applyHeight();
		});
	}
}