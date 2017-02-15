
//advantage of requestAnimationFrame:
//consitenet and reliable smooth and fast presentation:
//executes as fast as possible unlike timer based functions

/**
 * Provides requestAnimationFrame in a cross browser way.
 * @author paulirish / http://paulirish.com/
 */

if ( !window.requestAnimationFrame ) {

    window.requestAnimationFrame = ( function() {

        return window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        window.oRequestAnimationFrame ||
        window.msRequestAnimationFrame ||
        function( /* function FrameRequestCallback */ callback, /* DOMElement Element */ element ) {

            window.setTimeout( callback, 1000 / 60 );

        };

    } )();

}

//time based animation.
//since requestAnimationFrame is called at variable frame rates depending on device performance, etc.
//we used time based animation: take value of current and previous time and use that to calculate rotation.

// this function is executed on each animation frame
function animate(){
    // update
    var time = (new Date()).getTime();
    var timeDiff = time - lastTime;
    var angleChange = angularSpeed * timeDiff * 2 * Math.PI / 1000;
    cube.y += angleChange;
    lastTime = time;

    // render
    renderer.render(scene, camera);

    // request new frame
    requestAnimationFrame(function(){
        animate();
    });
}


//another version:

var duration = 5000; //ms
var currentTime = Date.now();

function animate() {
    var now = Date.now();
    var deltat = now - currentTime;
    currentTime = now;
    var fract = deltat / duration;
    var angle = Math.PI * 2 * fract;
    cube.rotation.y += angle;
}

