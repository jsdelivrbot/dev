/* ==========================================================================
//bowser
========================================================================== */

//browsers:
// safari
// firefox
// chrome
// msedge
// msie
// mobile
// ios

if (bowser.safari) {
  // console.log('safari');
}
if (bowser.msie && bowser.version <= 10) {
  // console.log('ei 10 or earlier');
}
if (bowser.tablet) {
    $('body').addClass('tablet');
}
if (!bowser.tablet && !bowser.mobile) {
    $('body').addClass('desktop');
}