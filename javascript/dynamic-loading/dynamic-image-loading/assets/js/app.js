/* ==========================================================================
// dynamic image loading
========================================================================== */
(function() {
  //regular images
  function loadImages() {
    $('img[data-src]:not([data-src=""])').each(function(){
      var $img = $(this);
      //if it doesn't already have a source...
      //change source of img element
      if(!$img.attr('src')) {
        var pathToImg = $img.data('src');
        $img.attr('src', pathToImg);
      }
    });

    //account for bg css images
    $('[data-bg-src]:not([data-bg-src=""])').each(function() {
     var $el = $(this);
      if($el.css('background-image') === 'none') {
        var pathToImg = $el.data('bg-src');
        console.log('pathToImg: ', pathToImg);
        $el.css('background-image', 'url(' + pathToImg + ')');
      }
    });
  }

  setTimeout(function() {
    loadImages();
  }, 1000);

})();


