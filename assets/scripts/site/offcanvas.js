// Off-Canvas Menu
jQuery('#off-canvas').on('opened.zf.offcanvas', function(){
    jQuery('#off-canvas-close').removeClass('slide-right');
    jQuery('#off-canvas-close').addClass('slide-left');
    jQuery('#mobileMenuToggle').removeClass('fadeIn-right');
    jQuery('#mobileMenuToggle').addClass('fadeOut-left');
});

jQuery('#off-canvas').on('closed.zf.offcanvas', function(){
    jQuery('#off-canvas-close').removeClass('slide-left');
    jQuery('#off-canvas-close').addClass('slide-right');
    jQuery('#mobileMenuToggle').removeClass('fadeOut-left');
    jQuery('#mobileMenuToggle').addClass('fadeIn-right');
});