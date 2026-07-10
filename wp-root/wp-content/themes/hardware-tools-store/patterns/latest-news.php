<?php
/**
 * Title: Latest News
 * Slug: hardware-tools-store/latest-news
 * Categories: hardware-tools-store, latest-news
 */
?>

<!-- wp:group {"className":"latest-news","layout":{"type":"constrained","contentSize":"85%"}} -->
<div class="wp-block-group latest-news"><!-- wp:spacer {"height":"18px"} -->
<div style="height:18px" aria-hidden="true" class="wp-block-spacer"></div>
<!-- /wp:spacer -->

<!-- wp:paragraph {"align":"center","style":{"elements":{"link":{"color":{"text":"var:preset|color|secondary"}}},"typography":{"fontStyle":"normal","fontWeight":"400","textTransform":"capitalize","fontSize":"20px"}},"textColor":"secondary"} -->
<p class="has-text-align-center has-secondary-color has-text-color has-link-color" style="font-size:20px;font-style:normal;font-weight:400;text-transform:capitalize"><?php esc_html_e('Our Blog','hardware-tools-store'); ?></p>
<!-- /wp:paragraph -->

<!-- wp:heading {"textAlign":"center","style":{"typography":{"fontSize":"30px","fontStyle":"normal","fontWeight":"700"}}} -->
<h2 class="wp-block-heading has-text-align-center" style="font-size:30px;font-style:normal;font-weight:700"><?php esc_html_e('Our Latest News &amp; Blog','hardware-tools-store'); ?></h2>
<!-- /wp:heading -->

<!-- wp:spacer {"height":"33px"} -->
<div style="height:33px" aria-hidden="true" class="wp-block-spacer"></div>
<!-- /wp:spacer -->

<!-- wp:query {"queryId":36,"query":{"perPage":10,"pages":0,"offset":0,"postType":"post","order":"desc","orderBy":"date","author":"","search":"","exclude":[],"sticky":"","inherit":true}} -->
<div class="wp-block-query"><!-- wp:post-template {"className":"latest-blogs","layout":{"type":"grid","columnCount":3}} -->
<!-- wp:group {"style":{"spacing":{"padding":{"top":"0","bottom":"0","left":"0","right":"0"},"margin":{"top":"0","bottom":"0"}},"border":{"radius":{"topLeft":"30px","topRight":"30px","bottomLeft":"30px","bottomRight":"30px"}}},"className":"blog-box-upper","layout":{"type":"constrained"}} -->
<div class="wp-block-group blog-box-upper" style="border-top-left-radius:30px;border-top-right-radius:30px;border-bottom-left-radius:30px;border-bottom-right-radius:30px;margin-top:0;margin-bottom:0;padding-top:0;padding-right:0;padding-bottom:0;padding-left:0"><!-- wp:group {"className":"blog-box","layout":{"type":"default"}} -->
<div class="wp-block-group blog-box"><!-- wp:cover {"useFeaturedImage":true,"dimRatio":10,"overlayColor":"heading","isUserOverlayColor":true,"minHeight":329,"minHeightUnit":"px","isDark":false,"style":{"border":{"radius":{"topLeft":"30px","topRight":"30px"}}},"layout":{"type":"constrained"}} -->
<div class="wp-block-cover is-light" style="border-top-left-radius:30px;border-top-right-radius:30px;min-height:329px"><span aria-hidden="true" class="wp-block-cover__background has-heading-background-color has-background-dim-10 has-background-dim"></span><div class="wp-block-cover__inner-container"><!-- wp:paragraph {"align":"center","placeholder":"Write title…","fontSize":"large"} -->
<p class="has-text-align-center has-large-font-size"></p>
<!-- /wp:paragraph --></div></div>
<!-- /wp:cover -->

<!-- wp:group {"style":{"spacing":{"margin":{"top":"0","bottom":"0"}}},"backgroundColor":"secondary","className":"date-box","layout":{"type":"constrained"}} -->
<div class="wp-block-group date-box has-secondary-background-color has-background" style="margin-top:0;margin-bottom:0"><!-- wp:group {"className":"inner-date-box","layout":{"type":"constrained"}} -->
<div class="wp-block-group inner-date-box"><!-- wp:post-date {"textAlign":"center","format":" j","style":{"elements":{"link":{"color":{"text":"var:preset|color|white"}}},"typography":{"fontStyle":"normal","fontWeight":"700","fontSize":"20px"}},"textColor":"white"} /-->

<!-- wp:post-date {"textAlign":"center","format":"M ","style":{"elements":{"link":{"color":{"text":"var:preset|color|white"}}},"typography":{"fontStyle":"normal","fontWeight":"600","fontSize":"14px"},"spacing":{"margin":{"top":"0","bottom":"0"}}},"textColor":"white"} /--></div>
<!-- /wp:group --></div>
<!-- /wp:group --></div>
<!-- /wp:group -->

<!-- wp:group {"style":{"spacing":{"margin":{"top":"0","bottom":"0"},"padding":{"right":"var:preset|spacing|30","left":"var:preset|spacing|40"}},"border":{"radius":{"bottomLeft":"30px","bottomRight":"30px"}}},"backgroundColor":"primary","className":"blog-content","layout":{"type":"constrained"}} -->
<div class="wp-block-group blog-content has-primary-background-color has-background" style="border-bottom-left-radius:30px;border-bottom-right-radius:30px;margin-top:0;margin-bottom:0;padding-right:var(--wp--preset--spacing--30);padding-left:var(--wp--preset--spacing--40)"><!-- wp:post-title {"style":{"elements":{"link":{"color":{"text":"var:preset|color|black"}}},"typography":{"fontStyle":"normal","fontWeight":"600","fontSize":"20px"}},"textColor":"black"} /-->

<!-- wp:group {"className":"blog-meta","layout":{"type":"flex","flexWrap":"nowrap"}} -->
<div class="wp-block-group blog-meta"><!-- wp:post-author-name {"style":{"elements":{"link":{"color":{"text":"var:preset|color|black"}}},"typography":{"fontStyle":"normal","fontWeight":"600","fontSize":"14px"},"spacing":{"padding":{"right":"var:preset|spacing|30","left":"var:preset|spacing|40"}}},"textColor":"black"} /-->

<!-- wp:comments -->
<div class="wp-block-comments"><!-- wp:comments-title {"showPostTitle":false,"style":{"elements":{"link":{"color":{"text":"var:preset|color|black"}}},"typography":{"fontSize":"14px","fontStyle":"normal","fontWeight":"600"},"spacing":{"padding":{"left":"var:preset|spacing|40"}}},"textColor":"black"} /--></div>
<!-- /wp:comments --></div>
<!-- /wp:group -->

<!-- wp:group {"layout":{"type":"constrained","justifyContent":"left"}} -->
<div class="wp-block-group"><!-- wp:read-more {"content":"Read More","style":{"elements":{"link":{"color":{"text":"var:preset|color|secondary"}}}},"textColor":"secondary"} /--></div>
<!-- /wp:group --></div>
<!-- /wp:group --></div>
<!-- /wp:group -->
<!-- /wp:post-template -->

<!-- wp:query-no-results -->
<!-- wp:paragraph {"align":"center","placeholder":"Add text or blocks that will display when a query returns no results."} -->
<p class="has-text-align-center"><?php esc_html_e('There is no post found','hardware-tools-store'); ?></p>
<!-- /wp:paragraph -->
<!-- /wp:query-no-results --></div>
<!-- /wp:query --></div>
<!-- /wp:group -->