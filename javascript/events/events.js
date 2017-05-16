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


// add and remove multiple event listeners

var bInputs = billing.querySelectorAll('input');
var bSelects = billing.querySelectorAll('select');


var watchFields = function watchFields() {
	for (var i = 0; i < bInputs.length; i++) {
		bInputs[i].addEventListener('input', mapBillingFields, false);
		// bInputs[i].addEventListener('change', mapProvinceSelect, false);
	}
	for (var i = 0; i < bSelects.length; i++) {
		bSelects[i].addEventListener('change', mapProvinceSelect, false);
	}
};

var unwatchFields = function unwatchFields() {
	for (var i = 0; i < bInputs.length; i++) {
		bInputs[i].removeEventListener('input', mapBillingFields, false);
		sInputs[i].removeEventListener('change', mapProvinceSelect, false);
	}
	for (var i = 0; i < bSelects.length; i++) {
		bSelects[i].removeEventListener('change', mapProvinceSelect, false);
	}
};

//stop bubbling
//add this to the child element of the element you dont' want it to effect
event.cancelBubble = true;
if(event.stopPropagation) event.stopPropagation();

//use in modal for example
//====================
var isOpen = false;

var modal = document.querySelector('.container');
bill.addEventListener('click', function(e) {
	if(isOpen) {
		//close modal
		isOpen = false;
	}
}, false);

//click safely without affecting parent
var child = document.querySelector('.child');
bill.addEventListener('click', function(e) {
	event.cancelBubble = true;
	if(event.stopPropagation) event.stopPropagation();
	//open the modal
	isOpen = true;
}, false);



