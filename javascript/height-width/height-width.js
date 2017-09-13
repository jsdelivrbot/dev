// clientHeight includes the height and vertical padding.
// offsetHeight includes the height, vertical padding, and vertical borders.
// scrollHeight includes the height of the contained document (would be greater than just height in case of scrolling), vertical padding, and vertical borders.

var h = document.getElementById('someDiv').clientHeight;
var h = document.getElementById('someDiv').offsetHeight;
var h = document.getElementById('someDiv').scrollHeight;
