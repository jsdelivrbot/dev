//cache images
//https://github.com/alexrabarts/jquery-cacheimage
(function ($) { $.extend($, { cacheImage: function (src, options) { if (typeof src === 'object') { $.each(src, function () { $.cacheImage(String(this), options); }); return; } var image = new Image(); options = options || {}; $.each(['load', 'error', 'abort'], function () { var e = String(this); if (typeof options[e] === 'function') { $(image).bind(e, options[e]); } if (typeof options.complete === 'function') { $(image).bind(e, options.complete); } }); image.src = src; return image; } }); $.extend($.fn, { cacheImage: function (options) { return this.each(function () { $.cacheImage(this.src, options); }); } }); })(jQuery);

//used to measure when all images are loaded and make progress bars, etc.


//Preload images
if (window.preload){
  var imgs = [];
  $("*").each(function() { 
    if($(this).css("background-image") !== "none") { 
      imgs.push($(this).css("background-image").replace(/.*\s?url\([\'\"]?/, '').replace(/[\'\"]?\).*/, '')); 
    } else if ($(this).is('img')){
      //ben added to fixed undifined value here
      if($(this).attr("src")) {
        imgs.push($(this).attr("src"));
      }
      
    }
  });
  
  window.images = imgs.length;
  $.cacheImage(imgs, { complete: function () { window.loadingProgress++; }});
  
  var loadingInterval = setInterval(function(){
    var progress = 45*(window.loadingProgress/window.images);
    $('.loadingIcon .dash').attr('stroke-dasharray',progress+',100');
    $('.loadingIcon').redraw();
    if (window.loaded){
      $('.loadingIcon .dash').attr('stroke-dasharray','100,100');
      clearInterval(loadingInterval);
    }
  },400);
}
