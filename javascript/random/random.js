//Return a random number between 0 (inclusive) and 1 (exclusive):
Math.random();
//could be:
//0.8794998400762502

//get a random number between a range
//The Math.floor() function returns the largest integer less than or equal to a given number.
//---------------------------------------
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
getRandomNumber(15, 20);
