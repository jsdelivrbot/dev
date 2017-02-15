<html>
<head>
</head>
<body>

select
<a id="link1" data-linkData="45689487546" href="#">link1</a>
<a id="link2" data-linkData="45654745675" href="#">link2</a>
<a id="link3" data-linkData="34534534545" href="#">link3</a>

<script src="events.js"></script>
</body>
</html>

var linkOne = document.getElementById('link1');
var linkTwo = document.getElementById('link2');
var linkThree = document.getElementById('link3');

linkOne.addEventListener('click', doSomething);
linkTwo.addEventListener('click', doSomething);
linkThree.addEventListener('click', doSomething);

//using data attributes

function doSomething() {
	if (this.attributes['data-linkData']) {
		console.log(this.attributes['data-linkData'].value);
	}
}


