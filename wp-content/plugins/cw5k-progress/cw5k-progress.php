<?php
/**
 * Plugin Name: CW5K Progress Tracker
 * Description: localStorage-based progress tracking for Crawl, Walk, Press
 * Version: 2.0
 */

function cw5k_get_course_days(): array {
    $days = [];
    $weeks = get_pages(['parent' => 0, 'sort_column' => 'menu_order,post_title']);
    foreach ($weeks as $week) {
        $children = get_pages(['parent' => $week->ID, 'sort_column' => 'menu_order,post_title']);
        foreach ($children as $child) {
            if (str_starts_with($child->post_title, 'Day ') || str_starts_with($child->post_title, 'Days ')) {
                $days[] = [
                    'id'    => $child->ID,
                    'title' => $child->post_title,
                    'url'   => get_permalink($child->ID),
                    'week'  => $week->post_title,
                ];
            }
        }
    }
    return $days;
}

function cw5k_current_day_id(): ?int {
    $id = get_the_ID();
    if (!$id) {
        return null;
    }
    $title = get_the_title($id);
    if (str_starts_with($title, 'Day ') || str_starts_with($title, 'Days ')) {
        return $id;
    }
    return null;
}

function cw5k_enqueue_progress(): void {
    if (wp_script_is('cw5k-progress', 'enqueued')) {
        return;
    }
    $base = plugin_dir_url(__FILE__);
    wp_enqueue_style('cw5k-progress', $base . 'progress.css', [], '2.0');
    wp_enqueue_script('cw5k-progress', $base . 'progress.js', [], '2.0', true);
    wp_localize_script('cw5k-progress', 'cw5kData', [
        'days'      => cw5k_get_course_days(),
        'isHome'    => is_front_page(),
        'currentId' => cw5k_current_day_id(),
    ]);
}

// Auto-inject on Day child pages (for the completion checkbox) and on the
// front page (for the widget). On other pages, the cw5k/progress block opts
// in by calling cw5k_enqueue_progress() from its render callback.
add_action('wp_enqueue_scripts', function () {
    if (cw5k_current_day_id() || is_front_page()) {
        cw5k_enqueue_progress();
    }
});

// Homepage progress widget as a PHP-only auto-registered block (WP 7.0+).
add_action('init', function () {
    register_block_type('cw5k/progress', [
        'title'           => __('Course Progress', 'cw5k'),
        'category'        => 'widgets',
        'supports'        => ['autoRegister' => true, 'html' => false],
        'render_callback' => function () {
            cw5k_enqueue_progress();
            return '<div class="cw5k-progress-mount" data-cw5k-progress></div>';
        },
    ]);
});

// Abilities API (WP 7.0+): expose course structure as a read-only ability.
// Progress state stays in localStorage; mark/get-progress would require
// server-side persistence and is intentionally deferred.
add_action('wp_abilities_api_categories_init', function () {
    wp_register_ability_category('cw5k-course', [
        'label'       => __('Crawl, Walk, Press Course', 'cw5k'),
        'description' => __('Abilities for reading the CW5K course structure.', 'cw5k'),
    ]);
});

add_action('wp_abilities_api_init', function () {
    wp_register_ability('cw5k/list-days', [
        'label'               => __('List course days', 'cw5k'),
        'description'         => __('Returns every Day/Days lesson in the CW5K course, grouped by week.', 'cw5k'),
        'category'            => 'cw5k-course',
        'permission_callback' => '__return_true',
        'execute_callback'    => fn() => cw5k_get_course_days(),
        'output_schema'       => [
            'type'  => 'array',
            'items' => [
                'type'       => 'object',
                'properties' => [
                    'id'    => ['type' => 'integer'],
                    'title' => ['type' => 'string'],
                    'url'   => ['type' => 'string', 'format' => 'uri'],
                    'week'  => ['type' => 'string'],
                ],
                'required' => ['id', 'title', 'url', 'week'],
            ],
        ],
        'meta' => [
            'show_in_rest' => true,
            'annotations'  => ['readonly' => true, 'idempotent' => true],
        ],
    ]);
});
