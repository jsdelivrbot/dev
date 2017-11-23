//normalize values. The value can even lie outside of the range
//and it will also accept negative values

function norm(val, min, max) {
	return (val - min) / (max - min);
}