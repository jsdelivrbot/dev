// //import sum
// import sum from './sum';

// //import image viewer *just runs the code so no need for the import <keyword>
// import './image_viewer';

// const total = sum(10, 5);
// console.log(total);

const button = document.createElement('button');
button.innerText = 'Click me';
button.onclick = () => {
//system is a global variable inside javascript
//causes browser to async. reach out to the server for 
//certain single module of code and returns a promise
//but if the module had imports it's-self, they'd be imported as well

//*when you do a system.import call, webpack automatically adds jsonp scripts to the bundle.js file to 
//do this async call. the code then gets split into two bundle.js files so this only gets loaded when needed. 
System.import('./image_viewer').then((module) => {
	console.log(module);
//executes the image viewer plugin and place on screen
	module.default();
});

}

document.body.appendChild(button);