<?php
/**
 * Denis IFS 2026 theme functions.
 *
 * Everything visual lives in theme.json, style.css and the patterns folder.
 * This file only loads the scripts, registers the "Part character" block and
 * adds a few block styles that show up in the editor's Styles panel.
 *
 * @package denis-ifs-2026
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

define( 'DENIS_IFS_2026_VERSION', '1.0.0' );

/**
 * Theme supports.
 */
function denis_ifs_2026_setup() {
	add_theme_support( 'wp-block-styles' );
	add_theme_support( 'editor-styles' );
	add_editor_style( 'style.css' );
}
add_action( 'after_setup_theme', 'denis_ifs_2026_setup' );

/**
 * Register the characters script early so the block editor script can depend on it.
 */
function denis_ifs_2026_register_scripts() {
	wp_register_script(
		'denis-characters',
		get_theme_file_uri( 'assets/js/characters.js' ),
		array(),
		DENIS_IFS_2026_VERSION,
		array( 'in_footer' => true )
	);
}
add_action( 'init', 'denis_ifs_2026_register_scripts', 5 );

/**
 * Front end: stylesheet, characters and the small site script
 * (scrolling ticker, painted shirt stripes, picture-story switch).
 */
function denis_ifs_2026_enqueue() {
	wp_enqueue_style( 'denis-ifs-2026', get_stylesheet_uri(), array(), DENIS_IFS_2026_VERSION );
	wp_enqueue_script( 'denis-characters' );
	wp_enqueue_script(
		'denis-site',
		get_theme_file_uri( 'assets/js/site.js' ),
		array( 'denis-characters' ),
		DENIS_IFS_2026_VERSION,
		array(
			'in_footer' => true,
			'strategy'  => 'defer',
		)
	);
}
add_action( 'wp_enqueue_scripts', 'denis_ifs_2026_enqueue' );

/**
 * Editor canvas: load the characters so they animate while editing too.
 */
function denis_ifs_2026_block_assets() {
	if ( is_admin() ) {
		wp_enqueue_script( 'denis-characters' );
	}
}
add_action( 'enqueue_block_assets', 'denis_ifs_2026_block_assets' );

/**
 * Blocks and block styles.
 */
function denis_ifs_2026_blocks() {
	register_block_type( get_theme_file_path( 'blocks/character' ) );

	$styles = array(
		'core/group'     => array(
			'shirt-stripes' => __( 'Shirt stripes', 'denis-ifs-2026' ),
			'paper-card'    => __( 'Paper card', 'denis-ifs-2026' ),
			'dashed-box'    => __( 'Dashed box', 'denis-ifs-2026' ),
			'butter-tray'   => __( 'Yellow tray', 'denis-ifs-2026' ),
		),
		'core/paragraph' => array(
			'ticker'  => __( 'Scrolling banner', 'denis-ifs-2026' ),
			'script'  => __( 'Handwritten', 'denis-ifs-2026' ),
			'eyebrow' => __( 'Small label', 'denis-ifs-2026' ),
			'blob'    => __( 'Blob label', 'denis-ifs-2026' ),
			'logo'    => __( 'Logo lettering', 'denis-ifs-2026' ),
		),
		'core/image'     => array(
			'circle' => __( 'Circle', 'denis-ifs-2026' ),
		),
	);
	foreach ( $styles as $block => $list ) {
		foreach ( $list as $name => $label ) {
			register_block_style( $block, array( 'name' => $name, 'label' => $label ) );
		}
	}
}
add_action( 'init', 'denis_ifs_2026_blocks' );

/**
 * Pattern categories, so Denis finds the ready-made sections quickly.
 */
function denis_ifs_2026_pattern_categories() {
	register_block_pattern_category( 'denis-sections', array( 'label' => __( 'Denis: page sections', 'denis-ifs-2026' ) ) );
	register_block_pattern_category( 'denis-pages', array( 'label' => __( 'Denis: full pages', 'denis-ifs-2026' ) ) );
	register_block_pattern_category( 'denis-posts', array( 'label' => __( 'Denis: blog posts', 'denis-ifs-2026' ) ) );
}
add_action( 'init', 'denis_ifs_2026_pattern_categories' );
