//persist data in dom element data
//use like this: <div data-current=off ></div>
//set to off
$('#yourelement').data('current', 'off');
//set to on
$('#yourelement').data('current', 'on');
//check if set on or off
if($('#yourelement').data('current') === 'on'){
    //do something
}