<?php
/* ------------------------------------------------------------------------ *
 * Widget: widget_name
 * ------------------------------------------------------------------------ */ 
add_action( 'widgets_init', 'onepixplugin_register_widgets' );

//register our widget
function onepixplugin_register_widgets() {
	register_widget( 'onepixplugin_post_boxes' );
        //register more widgets by repeating the above
}


//Post Boxes usually for home page
class onepixplugin_post_boxes extends WP_Widget {

    //process our new widget
    function onepixplugin_post_boxes() {
        $widget_ops = array('classname' => 'onepixplugin_post_boxes', 'description' => __('Display Image Boxes that link to Posts', '1pixel'));
        $this->WP_Widget('onepixplugin_post_boxes', __('One Pixel Plugin | Post Boxes Widget', '1pixel'), $widget_ops);
    }

    //build our widget settings form
    function form($instance) {
        $defaults = array('title' => __('Recent Works', '1pixel'), 'number_posts' => '3');
        $instance = wp_parse_args((array) $instance, $defaults);
        $title = strip_tags($instance['title']);
        $number_posts = strip_tags($instance['number_posts']);
        ?>
        			<p><?php _e('Title', '1pixel') ?>: <input class="widefat" name="<?php echo $this->get_field_name('title'); ?>" type="text" value="<?php echo esc_attr($title); ?>" /></p>
        			<p><?php _e('Number of Posts', '1pixel') ?>: <input name="<?php echo $this->get_field_name('number_posts'); ?>" type="text" value="<?php echo esc_attr($number_posts); ?>" size="2" maxlength="2" /></p>
                                <?php
                            }

                            //save our widget settings
                            function update($new_instance, $old_instance) {
                                $instance = $old_instance;
                                $instance['title'] = strip_tags(esc_attr($new_instance['title']));
                                $instance['number_posts'] = intval($new_instance['number_posts']);

                                return $instance;
                            }

                            //display our widget
                            function widget($args, $instance) {
                                global $post;
                                extract($args);

                                echo $before_widget;
                                $title = apply_filters('widget_title', $instance['title']);
                                $number_posts = empty($instance['number_posts']) ? '&nbsp;' : apply_filters('widget_number_posts', $instance['number_posts']);

                                if (!empty($title)) {
                                    echo $before_title . $title . $after_title;
                                };
                                ?>
                                
                                
                                    <?php
                                    $wpbp = new WP_Query(array(
                                                'orderby' => 'rand',
                                                'post_type' => 'onepixplugin_portfolio',
                                                'posts_per_page' => $number_posts
                                            ));
                                    ?>

                                <div id="home-category-boxes">

                                                <div class="row">
                                                    <div class="medium-12 columns">
                                                        <ul class="small-block-grid-2 large-block-grid-3">
                                                            <?php if ($wpbp->have_posts()) : while ($wpbp->have_posts()) : $wpbp->the_post(); ?>

                                                                    <li>
                                                                        <div class="cat-header-wrapper">
                                                                        <a href="<?php the_permalink() ?>" rel="<?php _e("bookmark", "1pixel"); ?>" title="<?php _e("Permanent Link to", "1pixel"); ?> <?php the_title(); ?>">
                                                                            <?php
                                                                            if (has_post_thumbnail()) {
                                                                                the_post_thumbnail();
                                                                            } else {
                                                                                ?>
                                                                                <img src="<?php bloginfo('template_directory'); ?>/images/default-image-545x545.jpg" alt="<?php the_title(); ?>" />
                                                                            <?php } ?>
                                                                        </a>
                                                                        <div class="cat-header"><a href="<?php the_permalink(); ?>" title="<?php echo get_the_title(); ?>"><?php echo get_the_title(); ?></a></div>
                                                                    </div>
                                                                    </li>
                                                                    <?php
                                                                endwhile;
                                                            endif;
                                                            ?>
                                                        <?php wp_reset_query(); ?>
                                                        </ul>
                                                    </div>

                                            </div>
                                        </div>

                                    <?php
                                    echo $after_widget;
                                }

} ?>