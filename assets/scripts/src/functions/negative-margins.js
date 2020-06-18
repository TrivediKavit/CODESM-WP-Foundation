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