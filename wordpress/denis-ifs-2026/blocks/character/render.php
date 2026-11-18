<?php
/**
 * Front-end output of the "Part character" block.
 * The SVG itself is drawn by assets/js/characters.js.
 *
 * @var array $attributes Block attributes.
 */
$denis_character = isset( $attributes['character'] ) ? sanitize_key( $attributes['character'] ) : 'self';
$denis_size      = isset( $attributes['size'] ) ? max( 24, min( 400, (int) $attributes['size'] ) ) : 120;
$denis_wrapper   = get_block_wrapper_attributes(
	array(
		'class'       => 'chr',
		'data-c'      => $denis_character,
		'style'       => 'width:' . $denis_size . 'px',
		'aria-hidden' => 'true',
	)
);
printf( '<span %s></span>', $denis_wrapper ); // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped -- escaped by get_block_wrapper_attributes().
