// touchstart	Triggers when the user makes contact with the touch surface and creates a touch point inside the element the event is bound to.
// touchmove	Triggers when the user moves the touch point across the touch surface.
// touchend	Triggers when the user removes a touch point from the surface. It fires regardless of whether the touch point is removed while inside the bound-to element, or outside, such as if the user's finger slides out of the element first or even off the edge of the screen.
// touchenter	Triggers when the touch point enters the bound-to element. This event does not bubble.
// touchleave	Triggers when the touch point leaves the bound-to element. This event does not bubble.
// touchcancel	Triggers when the touch point no longer registers on the touch surface. This can occur if the user has moved the touch point outside the browser UI or into a plugin, for example, or if an alert modal pops up.

  //-----------------------------------------------------------------------------// 
  //toch dragging
  //-----------------------------------------------------------------------------//


//setup:

  body, html {
    overflow: hidden;
  }

    //prevent scrollbars
    document.documentElement.style.overflow = 'hidden';  // firefox, chrome
    document.body.scroll = "no"; // ie only
  

  //-----------------------------------------------------------------------------// 
  //handle mouse scroll
  //-----------------------------------------------------------------------------//

  setupMouse() {
    let docBody = document.body;
    if (docBody.addEventListener) {
      // IE9, Chrome, Safari, Opera
      docBody.addEventListener("mousewheel", this.onMouseWheelChange.bind(this), false);
      // Firefox
      docBody.addEventListener("DOMMouseScroll", this.onMouseWheelChange.bind(this), false);
    }
    // IE 6/7/8
    else docBody.attachEvent("onmousewheel", this.onMouseWheelChange.bind(this));
  }


  onMouseWheelChange(e) {

    e.preventDefault();

    //console.log('animating: ', this.animating );

    //if not during css transition or on three scene page
    if(!this.props.isTransitioning && (this.props.currentPages[1] !== 'anatomy')) {
      // cross-browser
      e = window.event || e;
      // capture the wheel delta and force it to either 1 or -1
      var delta = Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail)));
      var speed = 1;
      var delta = delta * speed;

      //if going down, and it's not on the first page...
      if(delta === -1 && (this.props.currentPages[1] !== 'index')) {
       //scroll up, change page
        this.onOptionClick(this.props.scrollPages[0]);

      //if going up, and it's not on the last page...
      } else if (delta === 1 && (this.props.currentPages[1] !== 'quint')) {
       //scroll down, change page
       this.onOptionClick(this.props.scrollPages[2]);

      }
    }

  }

  //-----------------------------------------------------------------------------// 
  //toch dragging
  //-----------------------------------------------------------------------------//

  setupDrag() {

    let main = document.querySelector('#pt-main');
    //when dragging
    main.addEventListener("touchmove", this.onDrag.bind(this));   

    //on drag start
    main.addEventListener("touchstart", this.onDragStart.bind(this));

  }                                                 

  onDragStart(evt) {

    //evt.preventDefault();

    this.xDown = evt.touches[0].clientX;                                     
    this.yDown = evt.touches[0].clientY;

  };



  onDrag(evt) {

    evt.preventDefault();
    //stop bubling up
    event.stopPropagation();

    //if not on three page
    if(this.props.currentPages[1] !== 'anatomy') {

      //prevent the entire page from moving with the drag
      //evt.preventDefault(); 

      if ( !this.xDown || !this.yDown ) {
          return;
      }

      var xUp = evt.touches[0].clientX;                                    
      var yUp = evt.touches[0].clientY;

      var xDiff = this.xDown - xUp;
      var yDiff = this.yDown - yUp;

      if ( Math.abs( xDiff ) > Math.abs( yDiff ) ) {/*most significant*/
          if ( xDiff > 0 ) {
              /* left swipe */
              //console.log('left swipe');
          } else {
              /* right swipe */
              //console.log('right swipe');
          }                       
      } else {
          if ( yDiff > 0 ) {
              //up swipe change page
              if (this.props.currentPages[1] !== 'quint') {
                this.onOptionClick(this.props.scrollPages[2]);
              }
          } else { 
              //down swipe change page
              if(this.props.currentPages[1] !== 'index') {
                this.onOptionClick(this.props.scrollPages[0]);
              }
          }                                                                 
      }
      /* reset values */
      this.xDown = null;
      this.yDown = null;        

    }
                                
  }


  //-----------------------------------------------------------------------------// 
  //end touch dragging
  //-----------------------------------------------------------------------------//