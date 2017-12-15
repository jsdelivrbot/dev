(function() {
  var FooSlider = {
    //check for non null values in array
    otherThanNull: function(myArray) {
      var isValid = myArray.some(function (item) {
          return item !== null;
      });
      return isValid;
    },

    setPositions: function() {
      for (var i = 0; i < this.boxes.length; i++) {
        //move if it's the current one, move it to zero
        if (i === this.current){
          //init with first slide at initial position
          this.animateIn(this.boxes[i]);
          $(this.boxes[this.current]).addClass('current');
        }
        //else move the prev/next boxes into correct position...
        //if prev
        if(i < this.current) {
          //move prev boxes to above
          //only move if its previously current
          if($(this.boxes[i]).hasClass('current')) {
            this.animateUp(this.boxes[i]);
            $(this.boxes[i]).removeClass('current');
          }
        }
        if(i > this.current) {
          //move next boxes to below
          //only move if its previousely current
          if($(this.boxes[i]).hasClass('current')) {
           this.animateDown(this.boxes[i]);
           $(this.boxes[i]).removeClass('current');
         }
        }
      }   
    },

    goTo: function(position) {
      if(this.otherThanNull(this.boxes)) {
       if (position <= 0 ){
          //can't slide past beginning
        } else if (position > (this.boxes.length)) {
          //go back to first slide
          this.current = 0;
          this.setPositions();
        }
        else {
          //convert to array system
          this.current = (position - 1 );
          this.setPositions();
        }
      }
    },

    move: function(direction) {
      if(this.otherThanNull(this.boxes)) {
        //increment current
        if (direction === "prev" && this.current > 0){
          this.current--;
        } else if (direction === "next" && (this.current < (this.boxes.length - 1))){
          this.current++;
        }
        this.setPositions();
      }
    },

    animateUp: function(el) {
      TweenLite.to(el, this.slideSpeed , { 
          transform: "translate(0, " + (-this.moveAmount) + "px)",
          autoAlpha: 0,
          onComplete: onAnimUpComplete
       });
      function onAnimUpComplete() {
        //complete
      }
    },

    animateDown: function(el) {
      TweenLite.to(el, this.slideSpeed , { 
          transform: "translate(0, " + (this.moveAmount) + "px)",
          autoAlpha: 0,
          onComplete: onAnimDownComplete
       });
      function onAnimDownComplete() {
        //complete
      }
    },

    animateIn: function (el) {
      TweenLite.to(el, this.slideSpeed , { 
          transform: "translate(0, 0px)",
          autoAlpha: 1,
          onComplete: onAnimInComplete
       });
      function onAnimInComplete() {
        //complete
      }
    },

    initControls: function() {
      this.prevControl = document.querySelector('.fooslider-controls .prev');
      if(this.prevControl) {
        this.prevControl.addEventListener('click', function() {
          this.move('prev');
        }.bind(this));
      }
      this.nextControl = document.querySelector('.fooslider-controls .next');
      if(this.nextControl) {
        this.nextControl.addEventListener('click', function() {
          this.move('next');
        }.bind(this));
      }
    },

    init: function(options) {
        var inst = Object.create(this);
        inst.slideSpeed = options.slideSpeed || 0.5;
        inst.current = 0;
        inst.boxes = [].slice.call(document.querySelectorAll(".fooslider .slide"));
        inst.container = document.querySelector('.fooslider');

        if(inst.otherThanNull(inst.boxes)) {
          inst.moveAmount = 0;
          if(inst.container) {
            inst.moveAmount = inst.container.clientHeight;
          }
          //just set it to first one for now
          //remember current is in an array to 2 = 3
          inst.current = 0;

          //init with first slide at initial position
          inst.boxes[inst.current].style.transform = "translate(0, 0px)";
          $(inst.boxes[inst.current]).addClass('current');

          //move boxes into correct position
          for (var i = 0; i < inst.boxes.length; i++) {
            //move prev boxes to above
            if(i < inst.current) {
              inst.boxes[i].style.transform = "translate(0, " + (-inst.moveAmount) + "px)";
              $(inst.boxes[i]).removeClass('current');
            }

            if(i > inst.current) {
              //move next boxs to below
              inst.boxes[i].style.transform = "translate(0, " + (inst.moveAmount) + "px)";
              $(inst.boxes[i]).removeClass('current');
            }
          }

          inst.initControls();
        }//if bo
        else {
          //console.warn('there is no slimple slider');
        }
        return inst;
    },
  }


  

  //init slider
  var mySlider = FooSlider.init({
    slideSpeed: 0.6
  });

  //set clider position through code
  // mySlider.goTo(5);
})();
