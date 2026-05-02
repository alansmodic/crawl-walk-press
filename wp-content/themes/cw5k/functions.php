<?php

add_action('wp_enqueue_scripts', function () {
    wp_enqueue_style(
        'cw5k-style',
        get_stylesheet_uri(),
        ['twentytwentyfive-style'],
        wp_get_theme()->get('Version')
    );
    wp_enqueue_script(
        'cw5k-copy-code',
        get_stylesheet_directory_uri() . '/copy-code.js',
        [],
        wp_get_theme()->get('Version'),
        true
    );
});
