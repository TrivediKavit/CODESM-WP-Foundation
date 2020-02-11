export function equalizeContent(selector)
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