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

========

async vs deferred, vs none
http://www.growingwiththeweb.com/2014/02/async-vs-defer-attributes.html

========

<script>
	(function() {
		var script = document.createElement('script');
		script.type = 'text/javascript';
		script.async = true;
		script.src = 'assets/myScript.js';
		//get the first existing script tag in the doc
		var s = document.getElementByTagName('script')[0];
		//insert created tag just above it
		s.parentNode.insertBefore(script, s);
	})();
</script>
