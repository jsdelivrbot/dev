function getObj() {
	return {
		a:"cat",
		b:"dog",
		c:"bird"
	};
		
}

let {a,b,c} = getObj();
console.log(a,b,c);