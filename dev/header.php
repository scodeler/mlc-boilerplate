<?php
/**
  * Header template - ## SITE NAME ##
  *
  * @author Bruno Scodeler
  * @version 1.0
  * @copyright 2016 ## COMPANY NAME ##
  * @license   http://www.apache.org/licenses/LICENSE-2.0
  *
*/
?>
<!DOCTYPE html>
<html lang="pt-br">
<head>
  <meta http-equiv="X-UA-Compatible" content="IE=Edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta charset="UTF-8">
  <meta name="generator" content="WordPress" />
  <title><?php wp_title(); ?></title>
  <link id="page_favicon" href="<?php bloginfo('template_url')?>/favicon.png" rel="icon" type="image/x-icon" />
  <link rel="stylesheet" href="<?php bloginfo('stylesheet_url'); ?>">

  
  <?php wp_head(); ?>

</head>
<body>