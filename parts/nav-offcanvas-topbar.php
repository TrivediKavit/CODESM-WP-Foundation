<?php
/**
 * The off-canvas menu uses the Off-Canvas Component
 *
 * For more info: http://jointswp.com/docs/off-canvas-menu/
 */
?>
<?php /* 
<div data-sticky-container>
	<div class="top-bar" id="top-bar-menu" data-sticky data-sticky-on="small" data-options="marginTop:0;" style="width:100%"> */ ?>
	<div class="top-bar" id="top-bar-menu">
		<div class="row align-middle">
			<div class="columns small-12 xxlarge-2">
				<div class="top-bar-left float-left">
					<ul class="menu">
						<li class="menu-text">
							<a href="<?php echo home_url(); ?>">
								<?php $logo = "/assets/images/logo.png"; ?>
								<?php if(file_exists(get_template_directory().$logo)): ?>
									<img src="<?php echo get_template_directory_uri().$logo; ?>" alt="<?php bloginfo('name'); ?>" style="width: 72px;"/>
								<?php else: ?>
									<h2 class="site-title"><?php bloginfo('name'); ?></h2>
									<p class="site-description"><?php bloginfo('description'); ?></p>
								<?php endif; ?>
							</a>
						</li>
						</ul>
				</div>
			</div>
			<div class="columns small-12 xxlarge-10">
				<div class="top-bar-right show-for-medium">
					<div class="text-center xxlarge-text-right row align-middle collapse">
						<div class="columns small-12 xxlarge-9 primary-menu">
							<?php joints_top_nav(); ?>
						</div>
						<div class="columns small-12 xxlarge-3 additional-links">
							<a href="/contact" class="button header-button hollow uc no-margin-bottom">
								<span class="">Free Consultation</span>
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="row show-for-small-only">
			<ul class="menu align-justify" id="mobile-menu-toggle-container">
				<li id="mobile-additional-links" class="float-right">
					<a href="#footer-form" title="Schedule Consultation"><i class="fas fa-calendar-alt"></i></a>
					<a href="tel:+19564291069" title="Call Us"><i class="fas fa-phone-alt"></i></a>
				</li>
				<li><a data-toggle="off-canvas" class="uc" id="mobile-menu-toggle"><i class="fas alt-primary fa-bars"></i></a></li>
			</ul>
		</div>
	</div>
<?php /* </div> */ ?>