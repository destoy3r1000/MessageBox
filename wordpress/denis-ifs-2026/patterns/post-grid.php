<?php
/**
 * Title: Blog: list of posts
 * Slug: denis-ifs-2026/post-grid
 * Categories: denis-sections
 * Description: A grid of the newest posts (used on the blog and archive pages).
 * Inserter: no
 * Viewport Width: 1400
 */
?>
<!-- wp:query {"queryId":0,"query":{"perPage":9,"pages":0,"offset":0,"postType":"post","order":"desc","orderBy":"date","author":"","search":"","exclude":[],"sticky":"","inherit":true},"className":"dr-posts","layout":{"type":"default"}} -->
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
<!-- /wp:query -->
