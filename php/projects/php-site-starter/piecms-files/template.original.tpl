{include file="globalheader.tpl"}

<!--header -home-->

{if $page eq 'home'}

<body  class="home page page-template page-template-template-home-php no-customize-support transparent-header belowheader-menu standard-pageheader">
   <div class="clear"></div>
   <header id="site-header">
      <div id="header-inner">
            <div id="mobile-menu" unselectable="on" class="unselectable">
                <ul id="menu-custom-mobile-menu" class="menu">
                    {foreach from=$navData item=navItem}
                        {if $navItem.inNavigation eq 1 }
                        <li{if $navItem.pageID eq $pageID} class="active"{/if}><a href="{$navItem.href}" {if $navItem.newWindow eq 1} target="_blank"{/if} title="{$navItem.description}">{$navItem.label}</a>

                            {assign var='subItems' value=$navItem.subitems}
                            {assign var="firstItem" value="1"}

                            {if $subItems}
                                <ul class="sub-menu">
                                    {foreach from=$subItems item=subItem}
                                        <li><a href="{$subItem.href}"{if $subItem.newWindow eq 1} target="_blank"{/if} title="{$subItem.description}">{$subItem.label}</a></li>
                                            {assign var="firstItem" value="0"}
                                        {/foreach}
                                </ul>
                            {/if}

                        </li>
                        {/if}
                    {/foreach}
                </ul>
            </div>
         </div>
      </div>
   </header>
   <div class="clear"></div>
   <div id="main-wrapper">
       
{else}
    
<!--header internal -->
    
   <body  class="page internal-page page-template page-template-template-home-php no-customize-support transparent-header belowheader-menu standard-pageheader">
      <div class="clear"></div>
      
      <div class="breadcrumb">
          {foreach from=$navData item=navItem}
              {if $navItem.pageID eq $pageID}
                  {$navItem.label}
              {/if}
              {if $navItem.subitems}
                  {foreach from=$subItems item=subItem}
                      {if $subItem.pageID eq $pageID}
                          <a href="{$navItem.href}">{$navItem.label}</a>&nbsp;/&nbsp;{$subItem.label}
                      {/if}
                  {/foreach}
              {/if}
          {/foreach}
      </div>
      
      <header id="site-header">
         <div id="header-inner">
            <div class="testpagey" style="display: none; background: #000;">
               &nbsp;<!--keep this to make the height work for testing-->
            </div>
            <div id="header-main-wrapper">
               <div id="header-main" class="row">
                  <div class="large-12 columns media-center-lg center">
                     <div id="logo-header">
                        <a href="/">{$siteWideContent_1753}</a>
                     </div>
                  </div>
               </div>
            </div>
            <div nav-primary-belowheader-container>
            <div id="nav-primary-belowheader-wrapper" >
               <div class="nav row padding-columns">
                  <div id="nav-primary-b" class="nav">
                     <nav>
                        <ul class="menu group">
                            {foreach from=$navData item=navItem}
                                {if $navItem.inNavigation eq 1 }
                                <li{if $navItem.pageID eq $pageID} class="active"{/if}><a href="{$navItem.href}" {if $navItem.newWindow eq 1} target="_blank"{/if} title="{$navItem.description}">{$navItem.label}</a>

                                    {assign var='subItems' value=$navItem.subitems}
                                    {assign var="firstItem" value="1"}

                                    {if $subItems}
                                        <ul class="sub-menu">
                                            {foreach from=$subItems item=subItem}
                                                <li><a href="{$subItem.href}"{if $subItem.newWindow eq 1} target="_blank"{/if} title="{$subItem.description}">{$subItem.label}</a></li>
                                                    {assign var="firstItem" value="0"}
                                                {/foreach}
                                        </ul>
                                    {/if}
                                </li>
                                {/if}
                            {/foreach}
                        </ul>
                     </nav>
                  </div>
                  <!--#nav-primary-->
               </div>
            </div>
            </div>
            <div id="mobile-menu">
               <div id="mobile-selector"><span>Navigate to...</span></div>
               <div id="mobile-menu">
                  <ul id="menu-custom-mobile-menu" class="menu">
                        {foreach from=$navData item=navItem}
                            {if $navItem.inNavigation eq 1 }
                            <li{if $navItem.pageID eq $pageID} class="active"{/if}><a href="{$navItem.href}" {if $navItem.newWindow eq 1} target="_blank"{/if} title="{$navItem.description}">{$navItem.label}</a>

                                {assign var='subItems' value=$navItem.subitems}
                                {assign var="firstItem" value="1"}

                                {if $subItems}
                                    <ul class="sub-menu">
                                        {foreach from=$subItems item=subItem}
                                            <li><a href="{$subItem.href}"{if $subItem.newWindow eq 1} target="_blank"{/if} title="{$subItem.description}">{$subItem.label}</a></li>
                                                {assign var="firstItem" value="0"}
                                            {/foreach}
                                    </ul>
                                {/if}

                            </li>
                            {/if}
                        {/foreach}
                  </ul>
               </div>
            </div>
         </div>
      </header>
      <div class="clear"></div>
      <div id="main-wrapper">
       
{/if}  


{if $page eq 'home'}
       
<!--body home -->

<div id="main-wrapper">
    <!-- the wrapper for header, footer, and content area -->
    <div class="loading-container loading-container-home">
        <!--your loading icon-->
        <div class="homeslider flexslider-wrapper">
            <div id="slider" class="flexslider">
                <ul class="slides">
                    <li>
                        {$siteWideContent_1770}
                    </li>
                </ul>
                <!-- .slides -->
            </div>
            <!-- .flexslider -->
            <div class="flex-caption-wrapper" >
                <div class="flex-caption">
                    <div class="caption-container">
                        <div class="text-container caption-one">
                            <div id="logo-header">
                                <a href="/">{$siteWideContent_1754}</a>
                            </div>
                            <h1>{$siteWideContent_1755}</h1>
                            <p>{$siteWideContent_1756}<a href="{$siteWideContent_1758}" class="button-white-outline right">{$siteWideContent_1757}<i class="fa fa-angle-right"></i></a></p>
                        </div>
                    </div>
                </div>
            </div>
            
                <div id="nav-primary-belowheader-wrapper" >
                    <div class="nav row padding-columns">
                        <div id="nav-primary-b" class="nav">
                            <nav>
                                <ul class="menu group">
                                    {foreach from=$navData item=navItem}
                                        {if $navItem.inNavigation eq 1 }
                                        <li{if $navItem.pageID eq $pageID} class="active"{/if}><a href="{$navItem.href}" {if $navItem.newWindow eq 1} target="_blank"{/if} title="{$navItem.description}">{$navItem.label}</a>

                                            {assign var='subItems' value=$navItem.subitems}
                                            {assign var="firstItem" value="1"}

                                            {if $subItems}
                                                <ul class="sub-menu">
                                                    {foreach from=$subItems item=subItem}
                                                        <li><a href="{$subItem.href}"{if $subItem.newWindow eq 1} target="_blank"{/if} title="{$subItem.description}">{$subItem.label}</a></li>
                                                            {assign var="firstItem" value="0"}
                                                        {/foreach}
                                                </ul>
                                            {/if}
                                        </li>
                                        {/if}
                                    {/foreach}
                                </ul>
                            </nav>
                        </div>
                        <!--#nav-primary-->
                    </div>
                </div>
            
        </div>
    </div>
    <div class="widget-area">
        <div class="blue-callcircles">
            <div class="row">
                <div class="large-4 columns media-center-med media-spacer-lg">
                    <div class="circle-container">
                        <div class="circle-wrapper">
                            <div class="circle-padding">
                                <div class="circle-caption">{$siteWideContent_1759}</div>
                                <div class="circle-content">
                                    <div class="circle-content-center">
                                        <a href="{$siteWideContent_1761}"><i class="fa fa-chevron-circle-right"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <div class="large-4 columns media-center-med media-spacer-lg">
                    <div class="circle-container">
                        <div class="circle-wrapper">
                            <div class="circle-padding">
                                <div class="circle-caption">{$siteWideContent_1760}</div>
                                <div class="circle-content">
                                    <div class="circle-content-center">
                                        <a href="{$siteWideContent_1762}"><i class="fa fa-birthday-cake"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <div class="large-4 columns media-center-med media-spacer-lg">
                    <div class="circle-container">
                        <div class="circle-wrapper">
                            <div class="circle-padding">
                                <div class="circle-caption">{$siteWideContent_1763}</div>
                                <div class="circle-content">
                                    <div class="circle-content-center">
                                        <a href="{$siteWideContent_1764}"><i class="fa fa-anchor"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="home-lower-bg">
        <div class="home-below-featured">
            <div class="row">
                <div class="large-12 columns center">


                    <div class="center-header-container ">
                        <h1>{$siteWideContent_1765}</h1>
                    </div>
                    <p class="large">{$siteWideContent_1766}</p>
                </div>
                <div class="faint-border"></div>
            </div>
        </div>
        <div class="home-below-featured-lower">
            <div class="row">
                <div class="large-9 columns">
                    <h2 class="white">Check out Our <span style="color: rgb(255, 114, 0);">Latest Work</span></h2>
                    <div class="portfolio-box">
                        <div class="portfolio-box-left">
                            {$siteWideContent_1767}
                        </div>
                            {$siteWideContent_1771} 	
                        <div class="clear">
                        </div>
                    </div>
                    <div class="portfolio-box">
                        <div class="portfolio-box-left">
                            {$siteWideContent_1772}
                        </div>
                            {$siteWideContent_1773}
                        <div class="clear">
                        </div>
                    </div>
                </div>
                <div class="large-3 columns">
                    {$siteWideContent_1768}
                </div>
            </div>
        </div>
    </div>
    
{else}
    
<!--body internal -->

<div class="loading-container">
    <!--your loading icon-->
    <div data-stellar-vertical-offset="0" data-stellar-background-ratio="0.5" class="full-width-img full-width-img-internal plax-img">
        <div id="internal-header-grad">
            <div id="internal-page-header-wrapper">
                <div class="row">
                    <div class="medium-12 columns">
                        <h1 class="page-header internal-page-header textshadow">{$pageTitle}</h1>
                    </div>
                </div>
                <div class="clear"></div>
            </div>
        </div>
    </div>
    <div class="body-container">
        <div class="row">
            <div class="large-8 columns" id="content">
                <!--content-->
                {$pageContent}
                <!--end content-->
            </div>
            <div class="large-4 columns" id="sidebar">
                <!--sidebar-->

                <div class="widget-area widget-sidebar-second">
                    <form action="/search" id="searchform" method="get" role="search">
                        <div>
                            <a class="search-submit-button" href="javascript:void(0)">
                                <i class="fa fa-search"></i>
                            </a>
                            <div id="searchtext">
                                <input type="text" id="kw" name="kw" value="">
                            </div>
                        </div>
                    </form>
                </div>

                <div class="widget-area widget-sidebar">
                    <div class="textwidget">
                        <!-- Sidenav -->
                        {include file='nav/subnav-std.tpl'}
                    </div>
                </div>

                <div class="widget-area widget-sidebar">
                    <div class="textwidget">
                        <div class="caption-bubble-wrapper">
                            <div class="testimoinal">
                                {$siteWideContent_1751}
                            </div>
                            <div class="tail"></div>
                        </div>
                    </div>
                </div>
                
                <!--end sidebar-->
            </div>
            <!--sidebar-->
        </div>
        <div class="clear"></div>
    </div>
</div>
    
{/if}
    
    
<!--footer-->
    
    <div id="footer" class="padding-bottom">
        <footer>
            <div class="row">
                <div class="medium-5 columns media-center-med margin-top-sml">
                    <ul>
                            <!-- footer menu -->
                                   {foreach from=$navData item=navItem}
                                       {if $navItem.inFooter eq 1 }
                                        <li{if $navItem.pageID eq $pageID} class="active"{/if}>
                                            <a href="{$navItem.href}" {if $navItem.newWindow eq 1} target="_blank"{/if} title="{$navItem.description}">{$navItem.label}</a>

                                            {assign var='subItems' value=$navItem.subitems}
                                            {assign var="firstItem" value="1"}

                                        </li>
                                       {/if}
                                    {/foreach}
                            <!-- end footer menu -->
                    </ul>
                </div>
                <div class="medium-7 columns media-center-med">
                    <!--Wigitized Footer-->
                    <div class="copywright margin-top-sml">{$siteWideContent_1769} | Website by <a href="#">Pie CMS</a></div>
                </div>
            </div>
            <!--.container-->
        </footer>
    </div>
    <!--#footer-->
    <!--back to top (put this at the bottom of content area)-->
    <div id="toTop"><i class="fa fa-chevron-up"></i></div>
</div>
<!--#main container-->
{literal}
<script defer src="/images/300/js/flexslider/jquery.flexslider.js"></script>
{/literal}

</body>