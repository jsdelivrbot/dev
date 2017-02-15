//var myAction = new Promise(function(resolve, reject){setTimeout(resolve,1000)});
var myAction = new Promise((resolve, reject) => setTimeout(resolve,1000));

myAction
  .then(
  function(resolve, reject) {
    console.log('first function resolved!');
            })
	.then(() => console.log('second function resolved!'));