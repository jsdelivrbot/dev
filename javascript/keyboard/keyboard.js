//on keyboard enter key event when element focused
document.getElementById('foo').onkeypress = function(e){
    if (!e) e = window.event;
    var keyCode = e.keyCode || e.which;
    if (keyCode == '13'){
      // Enter pressed
      console.log('play vid');
      return false;
    }
  }

//on any key pressed (arrows and escape in this case)
document.addEventListener('keydown', function(e) {
	/* [ ← ] */
	if (e.keyCode === 37){
  		e.preventDefault();
  		console.log('left key pressed');
	}

	/* [ ↑ ] */
	if (e.keyCode === 38){
        e.preventDefault();
        console.log('up key pressed');
	}
	
	/* [ → ] */
	if (e.keyCode === 39){
        e.preventDefault();
        console.log('right key pressed');
	}

	/* [ ↓ ] */
	if (e.keyCode === 40){
		e.preventDefault();
		console.log('down key pressed');
	}
	
	/* [ esc ] */
	if (e.keyCode === 27){
		console.log('escape key pressed');
	}

	// if tab pressed
	if (e.keyCode === 9){
  		console.log('tab pressed');

	}
});
