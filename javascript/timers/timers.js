
/* ==========================================================================
setTimeout
========================================================================== */

//setTimeout
// we add index param here, starts with 0
tiles.forEach(function(item, index) { 
    setTimeout(function() {
    }, 500*(index));
});

//clearTimeout
var myTimeout = setTimeout(function() {
	console.log('timeout called');
}, 1000);
//stops the timeout
clearTimeout(myTimeout);

/* ==========================================================================
setInterval
========================================================================== */

//setInterval
setInterval(function() {
	console.log('interval called');
}, 500);

//clearInterval
var myInterval = setInterval(function() {
	console.log('interval called');
}, 500);
//stops the interval
clearInterval(myInterval);