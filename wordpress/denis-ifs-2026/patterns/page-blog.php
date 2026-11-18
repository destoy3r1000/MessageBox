<?php
/**
 * Title: Full page: Blog
 * Slug: denis-ifs-2026/page-blog
 * Categories: denis-pages
 * Description: Lists the newest blog posts automatically, plus the Instagram box.
 * Block Types: core/post-content
 * Post Types: page
 * Viewport Width: 1400
 */
?>
<!-- wp:group {"align":"full","className":"dr-page-head","layout":{"type":"constrained"}} -->
<div class="wp-block-group alignfull dr-page-head"><!-- wp:denis/character {"character":"habits","size":110,"className":"ph-l"} /-->

<!-- wp:denis/character {"character":"worry","size":110,"className":"ph-r"} /-->

<!-- wp:paragraph {"align":"center","className":"is-style-script"} -->
<p class="is-style-script">notes &amp; stories</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":1} -->
<h1 class="wp-block-heading">Blog</h1>
<!-- /wp:heading -->

<!-- wp:paragraph {"align":"center"} -->
<p>Writing and picture stories on queer mental health, IFS, and more.</p>
<!-- /wp:paragraph --></div>
<!-- /wp:group -->

<!-- wp:group {"align":"full","style":{"spacing":{"padding":{"bottom":"60px"}}},"layout":{"type":"constrained"}} -->
<div class="wp-block-group alignfull" style="padding-bottom:60px"><!-- wp:query {"queryId":1,"query":{"perPage":9,"pages":0,"offset":0,"postType":"post","order":"desc","orderBy":"date","author":"","search":"","exclude":[],"sticky":"","inherit":false},"className":"dr-posts","layout":{"type":"default"}} -->
<div class="wp-block-query dr-posts"><!-- wp:post-template {"layout":{"type":"grid","minimumColumnWidth":"18rem"}} -->
<!-- wp:post-featured-image {"isLink":true,"aspectRatio":"4/3"} /-->

<!-- wp:group {"className":"dr-post-txt","layout":{"type":"default"}} -->
<div class="wp-block-group dr-post-txt"><!-- wp:post-date /-->

<!-- wp:post-title {"level":3,"isLink":true} /-->

<!-- wp:post-excerpt {"moreText":"Read","excerptLength":24} /--></div>
<!-- /wp:group -->
<!-- /wp:post-template -->

<!-- wp:query-pagination {"layout":{"type":"flex","justifyContent":"center"}} -->
<!-- wp:query-pagination-previous /-->

<!-- wp:query-pagination-numbers /-->

<!-- wp:query-pagination-next /-->
<!-- /wp:query-pagination -->

<!-- wp:query-no-results -->
<!-- wp:paragraph {"align":"center"} -->
<p>New articles and picture stories will appear here as they are written.</p>
<!-- /wp:paragraph -->
<!-- /wp:query-no-results --></div>
<!-- /wp:query --></div>
<!-- /wp:group -->

<!-- wp:group {"align":"full","style":{"spacing":{"padding":{"bottom":"72px"}}},"layout":{"type":"constrained"}} -->
<div class="wp-block-group alignfull" style="padding-bottom:72px"><!-- wp:group {"className":"is-style-dashed-box","layout":{"type":"constrained"}} -->
<div class="wp-block-group is-style-dashed-box"><!-- wp:columns {"verticalAlignment":"center"} -->
<div class="wp-block-columns are-vertically-aligned-center"><!-- wp:column -->
<div class="wp-block-column"><!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">Until then, there’s Instagram</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Head over to my Instagram for research findings and personal reflections on queer mental health, IFS, and more.</p>
<!-- /wp:paragraph --></div>
<!-- /wp:column -->

<!-- wp:column -->
<div class="wp-block-column"><!-- wp:buttons {"layout":{"type":"flex","justifyContent":"right"}} -->
<div class="wp-block-buttons"><!-- wp:button -->
<div class="wp-block-button"><a class="wp-block-button__link wp-element-button" href="https://www.instagram.com/denisruksha/">Open Instagram</a></div>
<!-- /wp:button --></div>
<!-- /wp:buttons --></div>
<!-- /wp:column --></div>
<!-- /wp:columns --></div>
<!-- /wp:group --></div>
<!-- /wp:group -->
