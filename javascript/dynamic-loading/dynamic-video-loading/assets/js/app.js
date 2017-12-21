/* ==========================================================================
// dynamic video loading
========================================================================== */
(function() {
  function loadVideo() {
    var $vid = $('video[data-src]:not([data-src=""])');
    if($vid[0]) {
      if (!$vid[0].src) {
          //if it doesn't already have a source...
          //change source of actual video element
          $vid.each(function() {
            console.log($vid.data('src'));
            var pathTovidSrc = $vid.data('src') ? $vid.data('src') : $vid.attr('src');
            //update the source
            $vid.attr('src', pathTovidSrc);
          });

          //change source of the source elments within
          $('source[data-src]:not([data-src=""])').each(function() {
            var $vidSrc = $(this);

            var pathTovidSrc = $vidSrc.data('src') ? $vidSrc.data('src') : $vidSrc.attr('src');
            //update the source
            $vidSrc.attr('src', pathTovidSrc);
          });
      }
    }
  }

  setTimeout(function() {
    loadVideo();
  }, 1000);
})();