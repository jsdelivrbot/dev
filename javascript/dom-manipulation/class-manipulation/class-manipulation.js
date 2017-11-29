/* ==========================================================================
//toggle class (useful for css animations)
========================================================================== */

//functions to use
function hasClass(el, className) {
    return el.classList ? el.classList.contains(className) : new RegExp('\\b'+ className+'\\b').test(el.className);
}
function addClass(el, className) {
    if (el.classList) el.classList.add(className);
    else if (!hasClass(el, className)) el.className += ' ' + className;
}
function removeClass(el, className) {
    if (el.classList) el.classList.remove(className);
    else el.className = el.className.replace(new RegExp('\\b'+ className+'\\b', 'g'), '');
}
function toggle(el) {
    hasClass(el, 'is_hidden') ? removeClass(el, 'is_hidden') : addClass(el, 'is_hidden');
}
function toggleClass(el, className) {
    hasClass(el, className) ? removeClass(el, className) : addClass(el, className);
}
//usecase:
var el = document.querySelector('div');
if (!hasClass(el, 'foo')) addClass(el, 'foo');