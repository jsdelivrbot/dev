//utilities from:
//https://plainjs.com/

//toggle class (useful for css animations)
//---------------------------

function toggle(el) {
    hasClass(el, 'is_hidden') ? removeClass(el, 'is_hidden') : addClass(el, 'is_hidden');
}
//parse JSON
var json = '{ "foo": true, "bar": 1 }',
obj = JSON.parse(json);
console.log(obj);


//trim leading and trailing white space
//---------------------------
// IE 8
if (!String.prototype.trim) {
    String.prototype.trim = function(){ return this.replace(/^\s+|\s+$/g, ''); };
}
// example
var s = '  Hello World!  ';
s = s.trim();
console.log(s);
// "Hello World!"


//merge two js objects
//---------------------------
function extend(obj, src) {
    for (var key in src) {
        if (src.hasOwnProperty(key)) obj[key] = src[key];
    }
    return obj;
}

// example
var a = { foo: true }, b = { bar: false };
var c = extend(a, b);

console.log(c);
// { foo: true, bar: false }



//hide or show element
//---------------------------
//usage:
//toggle(myEl, 'block')

var el = document.querySelect('div');
// hide
el.style.display = 'none';
// show
el.style.display = '';
// or if the div element is hidden by default via CSS stylesheet
el.style.display = 'block';

//or make some helper functions...

function hide(el) {
    el.style.display = 'none';
}
function show(el, value) {
    el.style.display = value;
}
function toggle(el, value) {
    var display = (window.getComputedStyle ? getComputedStyle(el, null) : el.currentStyle).display;
    if (display == 'none') el.style.display = value;
    else el.style.display = 'none';
}

