//basic tweening to a value
var img = $('img');
TweenLite.to(img, 1, {width: 100, ease: Power1.easeInOut});

//tween from one value to another
TweenLite.fromTo(img, 1, {x: -200}, {x: 200});

//just set a value without animating
TweenLite.set(img, {x: -200});

//change class name only
TweenLite.set(element, {class:'+=newclass'});

//simple chaining tweens (delay to the duration of first tween)
TweenLite.from(img, 1, {x: -200});
TweenLite.from(h2, 1, {autoAlpha: 0}, delay: 1);

//automatically sets visibility to hidden and alpha to 0 (1 sets it to visible, opacity 1)
{autoAlpha: 0}

//rotation, opacity, scale
TweenMax.from( img, 0.5, {css:{scale:0.05, opacity:0, rotation: 180}, 
    ease:Quad.easeInOut
});


//preview easing:
//greensock.com/ease-vidualizer

//callback functions
//-----------------------------

TweenLite.from(img, 1, {width: -200,
	onStart: onStart
	onUpdate: onUpdate
	onComplete: onComplete
});

function onStart() {
	console.log('animation started');
}
function onUpdate() {
	console.log('animation in progress');
}
function onComplete() {
	console.log('animation completed');
}

//using a timeline
//-----------------------------
tl = new TimelineLite();
tl
	.from(h1, 0.3, {autoAlpha: 0})
	//delay 1 second
	.from(h2, 0.3, {autoAlpha: 0,'+=1'})
	//animate at three seconds in absolute time
	.from(h3, 0.3, {autoAlpha: 0, 3})
	//overlap prev tween: '-=0.15'
	.from(h4, 0.3, {autoAlpha: 0}, '-=0.15');
	//restore element to original
	.set(h4, {clearProps:"all"});


//using labels
var tl = new TimelineLite();
tl
	.from(h1, 0.3, {autoAlpha: 0})
	.add('intro', 0)
	//use the 'intro' label to play at the same time as that label
	.from(h2, 0.3, {autoAlpha: 0}, 'intro')

//repeating animation
//(-1 repeats infinately)
TweenMax.to(el, 1, { x: 0, repeat: -1})
//or
var tl = new TimelineMax({repeat:6});
tl.to(one, 0.75, {css:{rotation:".16rad" },ease:Linear.easeNone} );
 //tl.to(two, 0.14, {css:{rotation:"0 rad" },ease:Linear.easeNone});


//staggering animation

//pass in an elements array and animate in sequence
TweenMax.staggerTo(elementsArray, 0.5,//time to tween each
{
autoAlpha: 1,
y: 0,
onComplete: onComplete
}, 0.3,//time to stagger delay
onAllComplete
);

function onComplete() {
console.log('oncomplete');
}

function onAllComplete() {
console.log('onAllComplete');
}




var buttons = $(button);
var tl = new TimelineLite();
tl
	.staggerFrom(buttons, 0,2, {x: 100, ease: Power1.easeInOut}, 0.1) //0.1 is stagger delay
	//.staggerTo
	.staggerFrom(buttons, 0,2, {x: 100, ease: Power1.easeInOut}, 0.1)
	//.staggerFromTo
	.staggerFromTo(buttons, 0,2, {x: 0, ease: Power1.easeInOut}, {x: 100, ease: Power1.easeInOut}, 0.1)

	//stagger with cycle (more refined control for each element)
	.staggerFrom(buttons, 0,2, 
		{cycle: {
			x: [50, -50] //even elements use first value, odd element use the second
		}, Power1.easeInOut}, 0.1) //0.1 is stagger delay


//clear all properties after animation:

//clear all inline properties immediately with a set() call:
TweenLite.set("#element", {clearProps:"all"});

//or clear just the transform:
TweenLite.set("#element", {clearProps:"transform"}); 

//or clear the transform at the end of your tween:
TweenLite.to("#element", 1, {rotation:60, scale:0.5, clearProps:"transform"});



//animate to center:==============

TweenLite.to(el, 1, {left: '50%'})
//then put in the negative width amount in x value in css
//transform: translateX(-300px) translateY(90vh) !important;


//when using vh in calculations, just print out the translate instead of using x: y:

TweenLite.to(element, 1, { transform: "translate3d(15em, 50vh, 0)" });


//other ideas:

.to(".target",1,{left:'50%',top:'50%', x:20 ,xPercent:'-50',yPercent:'-50'})

//or:

var tl = new TimelineLite();

tl.to(".target", 1, { x: getMidX(".target")+20, y: getMidY(".target") } );

function getMidX( obj ){
  return ( $(obj).parent().width()/2 ) - $(obj).width()/2;
}

function getMidY( obj ){
  return ( $(obj).parent().height()/2 ) - $(obj).height()/2;
}

//firefox bug:==============

//slight delay removes firefox bug
var delay = (bowser.firefox) ? 0.9 : 0;

TweenMax.fromTo(currentBlurEl, 0.5,
{
	autoAlpha:0,
	left: '35%'
},
{
	delay: delay,
	autoAlpha:1,
	left: leftEnd,
	ease: Elastic.easeOut,
	easeParams: [0.4, 0.3],
	force3D: true,
	onComplete: onAnimationComplete
});


//TweeMax, Tweelite hides a constructor call when you use it, so for multiple animations,
//always use timeline


//timeline can put delays in variables, and gain some methods such as reverse, addCallback
var tl = new TimelineMax({paused: true, onComplete: onTlComplete}),
     start = 0, // allow to offset the start time
     duration = 0.6,
     step = 0.08; // for staggered animations/delay between chained tweens
tl.to($content, duration, {y: 0, opacity: 0}, start);
tl.addCallback(function() {
 mediator.emit('header:hide');
}.bind(this), start + duration + step);

// Play backwards
tl.reverse(); 

//same as setTimeout but Chrome and Firefox throttle setTimeout 
//and setInterval in inactive tabs so always use this instead of setTimeout
//when using tweens to prevent them from getting out of sync
TweenMax.delayedCall(4.5, myFunction);
//to deleye delayedCall
TweenMax.killTweensOf(myFunction);




 


