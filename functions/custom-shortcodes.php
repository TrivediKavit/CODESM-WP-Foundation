<?php

// OWL Carousel Gallery Showcase Shortcode
function custom_owl_carousel_gallery_showcase( $atts ) {

	// Attributes
	$atts = shortcode_atts(array(
                'ids' => '',
                'image_size' => 'full',
                'thumb_size' => 'thumbnail',
                'thumb_count' => '6',
			), $atts, 'owl_carousel_gallery' );
    
    if($atts['ids'] != '')
    {
        $return = '';
        $full_images = array();
        $thumb_images = array();

        $image_ids = explode(',',$atts['ids']);

        foreach($image_ids as $image_id)
        {
            // FULL IMAGE
            $url = wp_get_attachment_image_src( $image_id, $atts['image_size']);
            $full_images[] = $url[0];

            // THUMB IMAGE
            $url = wp_get_attachment_image_src( $image_id, $atts['thumb_size']);
            $thumb_images[] = $url[0];
        }

        $return .= "<div id=\"custom-owl-carousel\" class=\"owl-carousel owl-theme\" data-slider-id=\"" . get_the_ID() . "\">";
            foreach ($full_images as $full_image):
                $return .= "<div class=\"item\"><img src=\"" . $full_image . "\" /></div>";
            endforeach;
        $return .= "</div>";
        $return .= "<div id=\"custom-owl-carousel-thumbs-container\">";
            $return .= "<div id=\"custom-owl-carousel-thumbs\" class=\"owl-carousel owl-theme owl-thumbs\" data-slider-id=\"" . get_the_ID() . "\">";
                foreach ($thumb_images as $thumb_image):
                    $return .= "<button class=\"owl-thumb-item\"><img src=\"" . $thumb_image . "\" /></button>";
                endforeach;
            $return .= "</div>";
            $return .= "<div class=\"carousel-controls extra-big text-center\">";
                $return .= "<a id=\"custom-owl-carousel-left\" href=\"javascript:;\" class=\"arrow-left alt-secondary show-inline\">";
                    $return .= "<span class=\"\"><i class=\"fas fa-chevron-left\"></i></span>";
                $return .= "</a>";
                $return .= "<a id=\"custom-owl-carousel-right\" href=\"javascript:;\" class=\"arrow-right alt-secondary show-inline\">";
                    $return .= "<span class=\"\"><i class=\"fas fa-chevron-right\"></i></span>";
                $return .= "</a>";
            $return .= "</div>";
        $return .= "</div>";

        return $return;
    }
}

add_shortcode( 'owl_carousel_gallery', 'custom_owl_carousel_gallery_showcase' );