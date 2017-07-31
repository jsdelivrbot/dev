<script>
  var loadJS = function(url, callback, location){
      //url is URL of external file, callback is the code
      //to be called from the file, location is the location to 
      //insert the <script> element

      var scriptTag = document.createElement('script');
      scriptTag.src = url;

      scriptTag.onload = callback;
      scriptTag.onreadystatechange = callback;

      location.appendChild(scriptTag);
  };
  var onScriptLoaded = function(){
    //your code goes here
    console.log('callback fired');
  }
  loadJS('{{root}}{{paths.assets}}js/three-scene.js', onScriptLoaded, document.body);
</script>