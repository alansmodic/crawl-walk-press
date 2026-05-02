<?php
/**
 * Plugin Name: CW5K Progress Tracker
 * Description: localStorage-based progress tracking for Couch to WordPress AI 5K
 * Version: 1.0
 */

add_action('wp_enqueue_scripts', function () {
    wp_enqueue_style('cw5k-progress', plugin_dir_url(__FILE__) . 'progress.css', [], '1.0');
    wp_enqueue_script('cw5k-progress', plugin_dir_url(__FILE__) . 'progress.js', [], '1.0', true);

    $days = [];
    $pages = get_pages(['parent' => 0, 'sort_column' => 'menu_order,post_title']);
    foreach ($pages as $page) {
        $children = get_pages(['parent' => $page->ID, 'sort_column' => 'menu_order,post_title']);
        foreach ($children as $child) {
            if (str_starts_with($child->post_title, 'Day ') || str_starts_with($child->post_title, 'Days ')) {
                $days[] = [
                    'id'    => $child->ID,
                    'title' => $child->post_title,
                    'url'   => get_permalink($child->ID),
                    'week'  => $page->post_title,
                ];
            }
        }
    }

    wp_localize_script('cw5k-progress', 'cw5kData', [
        'days'      => $days,
        'isHome'    => is_front_page(),
        'currentId' => get_the_ID(),
    ]);
});
