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

var tl = new TimelineMax({repeat:6});
tl.to(one, 0.75, {css:{rotation:".16rad" },ease:Linear.easeNone} );
 //tl.to(two, 0.14, {css:{rotation:"0 rad" },ease:Linear.easeNone});


//staggering animation
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





 


