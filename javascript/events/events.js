var linkOne = document.getElementById('link1');
var linkTwo = document.getElementById('link2');
var linkThree = document.getElementById('link3');

linkOne.addEventListener('click', doSomething);
linkTwo.addEventListener('click', doSomething);
linkThree.addEventListener('click', doSomething);

function doSomething() {
	if (this.attributes['data-linkData']) {
		console.log(this.attributes['data-linkData'].value);
	}
}