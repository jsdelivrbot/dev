//simple sort and array according to it's values:
//sort by name
$scope.files.sort(function(a, b){
	if(a.name < b.name) return -1;
	if(a.name > b.name) return 1;
	return 0;
})

//dynamic sorting with multiple parameters
var myTest = [
	{ name: 'balvin', uploaded_at: '2019-03-20' },
	{ name: 'alvin', uploaded_at: '2020-03-20' },
	{ name: 'calvin', uploaded_at: '2018-03-20' },
	{ name: 'devon', uploaded_at: '2018-03-21' },
	{ name: 'simon', uploaded_at: '2018-03-22' },
];

var myTest = [ { name: 'calvin', uploaded_at: '2019-03-20' }, 
	{ name: 'calvin', uploaded_at: '2020-03-20' }, 
	{ name: 'calvin', uploaded_at: '2018-03-20' }, 
	{ name: 'calvin', uploaded_at: '2018-03-21' }, 
	{ name: 'calvin', uploaded_at: '2018-03-22' }, 
];

console.log(myTest.sort(dynamicSortMultiple("name", "-uploaded_at")));

function dynamicSort(property) {
	var sortOrder = 1;
	if(property[0] === "-") {
		sortOrder = -1;
		property = property.substr(1);
	}
	return function (a,b) {
		var result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
		return result * sortOrder;
	}
}

function dynamicSortMultiple() {
// can use lik: dynamicSortMultiple("name", "-date");
var props = arguments;
return function (obj1, obj2) {
	var i = 0, result = 0, numberOfProperties = props.length;
    /* try getting a different result from 0 (equal)
     * as long as we have extra properties to compare
     */
     while(result === 0 && i < numberOfProperties) {
     	result = dynamicSort(props[i])(obj1, obj2);
     	i++;
     }
     return result;
 }
}