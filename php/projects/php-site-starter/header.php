<!DOCTYPE html>
<html lang="en-US">
   <head>
      <title>Your Site Title | Your Site Brief Tagline</title>
      <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0"/> <!--320-->
      <meta name="description" content=" | Your Site Brief Tagline" />
      <meta charset="UTF-8" />
      
      <link rel='stylesheet' id='default-style-css'  href='css/global.css' type='text/css' media='all' />
      <link rel='stylesheet' id='default-style-css'  href='style.css' type='text/css' media='all' />
      
      <script type='text/javascript' src='https://code.jquery.com/jquery-1.10.2.min.js'></script>
      
      <script src="js/heartcode-canvasloader-min.js"></script>
      <script type='text/javascript' src='js/jquery.easing.1.3.js?ver=3.8'></script>
      <script type='text/javascript' src='js/onePixel.js?ver=3.8'></script>
      <script type='text/javascript' src='js/jquery.mobilemenu.js?ver=3.8'></script>
      <script type='text/javascript' src='js/modernizr.js?ver=3.8'></script>
      <script type='text/javascript' src='js/jquery.stellar.min.js?ver=3.8'></script>
      <script type="text/javascript" src="js/jquery.sticky.min.js"></script>
      
<script>
    $(window).load(function(){

        var menu = $("#header-main-wrapper");
        var mobileMenu = $("#mobile-menu");

        var navOffset = menu.offset().top;

        console.log('navoffset', navOffset);

        // menu.wrap('<div class="nav-placeholder"></div>');
        // $(".nav-placeholder").height(jQuery("nav").outerHeight());

        function setPosition() {

            var scrollPos = $(window).scrollTop();

            console.log('scrollpos', scrollPos);

            if (scrollPos > navOffset) {
                console.log('sticky');
                menu.addClass("fixed");
                mobileMenu.addClass("fixed");
            } else {
                console.log('not-sticky');
                menu.removeClass("fixed");
                mobileMenu.removeClass("fixed");
            }
        }

        $(window).scroll(setPosition);

        $(window).resize(setPosition);

    });
</script>
      
   </head>
<body  class="home page page-template page-template-template-home-php no-customize-support transparent-header belowheader-menu menu-right-pageheader preload">
    
<header id="site-header">
    <div id="header-inner">
    <div class="testpagey" style="display: none; background: #000;">
        &nbsp;<!--keep this to make the height work for testing-->
    </div>
    <div id="header-main-wrapper" class="menu-right">
        <div id="header-main" class="row">
            <div class="large-4 columns media-center-lg">
                <div id="logo-header-wrapper">
                <div id="logo-header">
                    <a href="/piecms-theme/"><img src="images/logo-main.png" alt="Logo" title="Your Site Title"/></a>
                </div>
                </div>
            </div>
            <div class="large-8 columns">
                <div id="header-right-menu-right">
                <div id="menu-right-wrapper">
                    <div class="bg-wrapper">
                        <div id="logo-header-wrapper">
                            <div id="logo-header">
                                <div id=logo-header-follow>
                                <a href="/piecms-theme/"><img src="images/logo-main.png" alt="Logo" title="Your Site Title"/></a>
                                </div>
                            </div>
                        </div>
                        <div id="nav-primary-b" class="nav menu-right">
                            <nav>
                                <div class="nav-ul-wrapper">
                                <ul class="menu group">
                                    <li class="<?php if ($_SERVER['REQUEST_URI'] == "/piecms-theme/") { echo "active"; } ?>">
                                        <a href="/piecms-theme/">Home</a>
                                    </li>
                                    <li class="<?php if ($_SERVER['REQUEST_URI'] == "/piecms-theme/chiropractic.php") { echo "active"; } ?>">
                                        <a href="chiropractic.php">Chiropractic</a>
                                    </li>
                                    <li class="<?php if ($_SERVER['REQUEST_URI'] == "/piecms-theme/massage-therapy.php") { echo "active"; } ?>">
                                        <a href="massage-therapy.php">Massage Therapy</a>
                                    </li>
                                    <li class="<?php if ($_SERVER['REQUEST_URI'] == "/piecms-theme/foot-orthotics.php") { echo "active"; } ?>">
                                        <a href="foot-orthotics.php">Foot Orthotics</a>
                                    </li>
                                    <li class="<?php if ($_SERVER['REQUEST_URI'] == "/piecms-theme/treatments-available.php") { echo "active"; } ?>">
                                        <a href="treatments-available.php">Treatments Avilable</a>
                                    </li>
                                    <li class="<?php if ($_SERVER['REQUEST_URI'] == "/piecms-theme/contact-us.php") { echo "active"; } ?>">
                                        <a href="contact-us.php">Contact Us</a>
                                    </li>
                                    <!-- <li>
                                        <a href="#">Samples</a>
                                        <ul class="sub-menu">
                                            <li><a href="internal-template">Template Sidebar</a></li>
                                            <li><a href="internal-template-fullwidth">Templeate Full Width</a></li>
                                        </ul>
                                    </li> -->
                                </ul>
                                </div>
                                <!-- <form action="/search" role="search" method="get" id="searchform">
                                    <div>
                                        <a href="javascript:void(0)" class="search-submit-button">
                                            <i class="fa fa-search"></i>
                                        </a>
                                        <div id="searchtext">
                                            <div id="searchbtn"></div>
                                            <div id="searchwrap">
                                                    <input type="text" value="" name="kw" id="kw">
                                                    <div id="searchclose"></div>
                                            </div>
                                        </div>
                                    </div>
                                </form> -->
                            </nav>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    </div>
        
    <div id="sticky-main-holder">
    <!-- menu gets planted here when sticky-->
    </div>
        
    <div id="mobile-menu">
        <div id="mobile-selector" unselectable="on" class="unselectable">
                <div id="logo-mobile">
                <a href="/piecms-theme/"><img src="images/logo-main.png" alt="Logo" title="Your Site Title"/></a>
                </div>
        </div>
        <div id="mobile-dropdown" unselectable="on" class="unselectable">
            <ul id="menu-custom-mobile-menu" class="menu">
                <li class="<?php if ($_SERVER['REQUEST_URI'] == "/piecms-theme/") { echo "active"; } ?>">
                    <a href="/piecms-theme/">Home</a>
                </li>
                <li class="<?php if ($_SERVER['REQUEST_URI'] == "/piecms-theme/chiropractic.php") { echo "active"; } ?>">
                    <a href="chiropractic.php">Chiropractic</a>
                </li>
                <li class="<?php if ($_SERVER['REQUEST_URI'] == "/piecms-theme/massage-therapy.php") { echo "active"; } ?>">
                    <a href="massage-therapy.php">Massage Therapy</a>
                </li>
                <li class="<?php if ($_SERVER['REQUEST_URI'] == "/piecms-theme/foot-orthotics.php") { echo "active"; } ?>">
                    <a href="foot-orthotics.php">Foot Orthotics</a>
                </li>
                <li class="<?php if ($_SERVER['REQUEST_URI'] == "/piecms-theme/treatments-available.php") { echo "active"; } ?>">
                    <a href="treatments-available.php">Treatments Avilable</a>
                </li>
                <li class="<?php if ($_SERVER['REQUEST_URI'] == "/piecms-theme/contact-us.php") { echo "active"; } ?>">
                    <a href="contact-us.php">Contact Us</a>
                </li>
            </ul>
        </div>
    </div>
    </div>
</header>
<div class="clear"></div>
<!-- the wrapper for header, footer, and content area -->
<div id="main-wrapper">