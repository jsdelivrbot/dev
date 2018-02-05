var Hammer = require('hammerjs');


//touch swipe (touchAction: "auto" prevents hammer from disabling scroll on the element)
inst.hammer = new Hammer(window, {touchAction: "auto"});
//must enable vertical swipe/pan to be able to listen for vertical swipe
inst.hammer.get('swipe').set({ direction: Hammer.DIRECTION_VERTICAL });
inst.hammer.on('swipe', onSwipe.bind(inst));

function onSwipe(e) {
	if (!this.isOverflow) {
		if (e.direction == 8) {
			console.log('swipped down');
		} else if (e.direction == 16) {
			console.log('swipped up');
		}
	}
},