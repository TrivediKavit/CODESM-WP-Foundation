<?php
/**
 * The template for displaying 404 (page not found) pages.
 *
 * For more info: https://codex.wordpress.org/Creating_an_Error_404_Page
 */

get_header(); ?>
			
	<div class="content">

		<div class="show-for-large" style="height: 90px;"></div>
		<div class="hide-for-large" style="height: 45px;"></div>

		<div class="inner-content row">
	
			<main class="main columns small-12" role="main">

				<article class="content-not-found">
				
					<header class="article-header">
						<h1><?php _e( 'Epic 404 - Page Not Found', 'jointswp' ); ?></h1>
					</header> <!-- end article header -->
			
					<section class="entry-content">
						<p><?php _e( 'The page you were looking for was not found, but maybe try looking again!', 'jointswp' ); ?></p>
					</section> <!-- end article section -->
					
					<?php /*
					<!--<section class="search">
					    <p><?php get_search_form(); ?></p>
					</section> -->
					<!-- end search section -->
					*/ ?>
			
				</article> <!-- end article -->
	
			</main> <!-- end #main -->

		</div> <!-- end #inner-content -->

		<div class="show-for-large" style="height: 90px;"></div>
		<div class="hide-for-large" style="height: 45px;"></div>

	</div> <!-- end #content -->

<?php get_footer(); ?>