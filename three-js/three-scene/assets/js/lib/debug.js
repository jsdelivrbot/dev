function initDebug(debugItems) {

    //print your list of debug items in html
    var debug = document.createElement('div');
    debug.id = 'debug';
    container.appendChild(debug);

    debug.innerHTML = printDebugInfo(debugItems);

    //setInterval(updateDebugInfo, 50);
}

function printDebugInfo(obj) {

    var str = '';

    $.each(obj, function (key, value) {
        str += "<div class='debug-stat'>"
            $.each(value, function (key, value) {
                str += key + ": " + '<span id=' + key + '>' + value + '</span><br>';
            });
        str += "</div>";
    });

    return str;
}

function updateDebugInfo(debugItems) {
    
    $.each(debugItems, function (key, value) {
        $.each(value, function (key, value) {
            console.log("key,value: ", key, value);
            document.getElementById(key).innerHTML = value;
        });
    });
}