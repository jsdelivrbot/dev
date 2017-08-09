//<html>
//<head>
//<title>Untitled Document</title>
//<script type="text/javascript">

//dealing with url hash

    if (typeof window.onpopstate != 'undefined') {
        window.onpopstate = curHash;
    } else if (typeof window.onhashchange != 'undefined') {
        window.onhashchange = curHash;
    }

    function curHash() {
        var h = window.location.hash;
        if (h == '') return; // no hash. this is probably the first load
        h = h.substr(1); // hash always starts with #
        alert('hash: ' + h);
    }

//</script>
//</head>

//<body>
//<ul style="margin:0; padding:0;">
//    <li><a href="#1">Click here for 1</a></li>
//    <li><a href="#2">Click here for 2</a></li>
//    <li><a href="#3">Click here for 3</a></li>
//    <li><a href="#4">Click here for 4</a></li>
//</ul>
//</body>
//</html>



//url properties

//get the full url
var currentUrl = window.location.href;

//redirect to new url
window.location.assign("http://www.hotmail.com");
//or if already on a site:
window.location.assign("/shop");

//get the host name of the current page
var location = window.location.hostname;
//www.benchung.com

//get the curent path
var path = window.location.pathname;

//get the anchor part of the url
var hashPath = window.location.hash;
// #hashpart
//or without the # symbol
var hashPath = window.location.hash.replace('#', '');

//equivelent to jquery document.ready
document.addEventListener("DOMContentLoaded", function(event) { 
  //do work
});