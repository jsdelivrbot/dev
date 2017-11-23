/* ==========================================================================
strings
========================================================================== */

/* ==========================================================================
trim
========================================================================== */

//trim
var myString = "my sample sting";
var length = 5;
var trimmedString = myString.substring(0, length);


//trim card description length
var cDescriptions = [].slice.call(document.querySelectorAll('.description')); 
if (cDescriptions && cDescriptions.length !== 0) {
  cDescriptions.forEach((item) => {
    var desc = item.textContent;
    //trim it down to 300 characters
    var trimmedDesc = desc.substring(0, 300);
    //re-trim if we are in the middle of a word
    trimmedDesc = trimmedDesc.substr(0, Math.min(trimmedDesc.length, trimmedDesc.lastIndexOf(" ")))
    item.innerHTML = trimmedDesc;
  });
}