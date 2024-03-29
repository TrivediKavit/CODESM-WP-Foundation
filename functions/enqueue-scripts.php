<?php
function site_scripts() {
  global $wp_styles; // Call global $wp_styles variable to add conditional wrapper around ie stylesheet the WordPress way
  
    // International Telephone Input Utility Script
    wp_enqueue_script( 'intl-tel-input-utility-js', get_template_directory_uri() . '/assets/scripts/intl-tel-input-utility.js', array( 'jquery' ), filemtime(get_template_directory() . '/assets/scripts/intl-tel-input-utility.js'), true );
    
    // Adding scripts file in the footer
    // wp_enqueue_script( 'vendor-js', get_template_directory_uri() . '/assets/scripts/vendor.js', array( 'jquery' ), filemtime(get_template_directory() . '/assets/scripts/vendor.js'), true );
    wp_enqueue_script( 'site-js', get_template_directory_uri() . '/assets/scripts/script.js', array( 'jquery' ), filemtime(get_template_directory() . '/assets/scripts/script.js'), true );
   
    // Register main stylesheet
    wp_enqueue_style( 'site-css', get_template_directory_uri() . '/assets/styles/style.css', array(), filemtime(get_template_directory() . '/assets/styles/scss'), 'all' );

    // Comment reply script for threaded comments
    if ( is_singular() AND comments_open() AND (get_option('thread_comments') == 1)) {
      wp_enqueue_script( 'comment-reply' );
    }
}
add_action('wp_enqueue_scripts', 'site_scripts', 999);