
//returns a new function that gets filtered through debounce to 
//only be fired at 100 milliseconds at a time.
let debouncedFunction = _.debounce(myFunction, 100)
window.addEventListener('resize', debouncedFunction);

checkWindowSize() {
	//fired at a debounced rate
	//when resizing
}