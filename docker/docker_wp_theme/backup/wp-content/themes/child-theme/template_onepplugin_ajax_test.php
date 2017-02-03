<?php
/*
 * Template Name: One Pix Plugin Ajax Test
 */
    // calling the header.php
    get_header();
?>

<?php get_template_part( 'temp', 'belowheader-page' ); ?>

<?php if (get_post_meta(get_the_ID(),'onepix_has_page_intro', true)) { ?>
    <?php get_template_part( 'temp', 'pageintro' ); ?>
<?php }  ?>


<div class="row">

        <div id="content" class="large-8 columns">
            <?php if (have_posts()) while (have_posts()) : the_post(); ?>
            
                    <?php do_action('repairnumber_form_hook'); ?>
                    <div id="ajax-output"></div>
            

                    <?php// the_content(); ?>

                <?php endwhile; ?>
        </div><!--#content-->
        <?php get_sidebar(); ?>

</div><!--row-->
<?php get_footer(); ?>
