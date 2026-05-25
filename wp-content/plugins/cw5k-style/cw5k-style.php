<?php
/**
 * Plugin Name: CW5K Custom Style
 * Description: Custom visual design for Couch to WordPress AI 5K
 * Version: 1.0
 */

add_action('wp_enqueue_scripts', function() {
    wp_enqueue_style('cw5k-style', plugin_dir_url(__FILE__) . 'style.css', [], '1.0');
    wp_enqueue_style('google-fonts', 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500&display=swap', [], null);
});
