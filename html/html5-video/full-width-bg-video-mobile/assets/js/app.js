(function() {
	//check window size (jquery)
	 window.addEventListener('resize', function() {
	  if (window.innerWidth < 960) {
	  	//force only bg image
	    toggleBgVid(false);
	  }
	  else {
	  	//re-enable bg video
	    toggleBgVid(true);
	  }
	});

	 /* ==========================================================================
	 // bg video mobile swap
	 ========================================================================== */

	 var vidEl = document.querySelector('.bg-video-el');

	 var DetachReAttach = {
	     detatch: function(el) {
	       if (el) {
	         //if we don't already have a detached el...
	         if(!this.node) {
	           this.node = el || this.node;
	           this.parent = this.node.parentNode || this.parent;
	           this.next = this.node.nextSibling || this.next;
	           // abort if no parent
	           if (!this.parent) { return; }
	           // Detach .node from DOM.
	           this.parent.removeChild(this.node);
	         }
	       }
	     },
	     // Re-attach node to DOM.
	     reAttach: function (callback) {
	          // abort if no parent
	         if (!this.parent) { return; }
	         if(this.node) {
	           this.parent.insertBefore(this.node, this.next);
	         }
	         //reset the node
	         this.node = null;
	         //fire callback
	         callback();
	     }
	 };

	 function toggleBgVid(isActive) {
	   if(vidEl) {
	     if (isActive) {
	       //re attach the video
	       DetachReAttach.reAttach(function() {
	         vidEl.play();
	       });
	     } else {
	       //remove full width vid to prevent playing it
	       DetachReAttach.detatch(vidEl);
	     }
	   }
	 }
})()