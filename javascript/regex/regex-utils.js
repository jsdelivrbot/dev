// count words (two different methods)
//========================//

function wordCount(text) {
	return text.match(/\W+/g).length;
}
//this method is better because it will match symbols like $ and nonenglish word as well
function wordCount(text) {
	return text.split(/\s+/g).length;
}

// remove html characters
//========================//

function stripHTML(text) {
	return str.replace("/<[^>]+>/g", "")
}

// match numbers
//(0.01, 5000, 34,355345345, etc.)
//========================//
"{/^[-+]?\d*\.?\d+$/g"


// remove whitespace at beginning and end
//========================//
if(!String.prototype.trim) {
	String.prototype.trim = function() {
		return this.replace("/^\s+|\s+$", "");
	}
}

