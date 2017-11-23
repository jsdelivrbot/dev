//linear interpolate
//takes a normalize value and returns the value in the range
//this can even handle values where max is less than min or negative values

//can use this to animate values between two given ranges where you want to
//control it's amounts in a predictable 0 to 1 way.
function norm(norm, min, max) {
	return (max - min) * norm + min;
}