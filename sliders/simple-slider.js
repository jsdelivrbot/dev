  var SimpleSlider = function() {
    var current = 0;
    var boxes = document.querySelectorAll(".simple-slider .box-item");

    var initSlider = {
        horizontal: function(options) {
          return {}
        },
        vertical: function(options) {
          var moveAmount = 0;
          if(options.boxHeight) {
            moveAmount = options.boxHeight;
          }
          //just set it to first one for now
          //remember current is in an array to 2 = 3
          current = 0;

          //init with first slide at initial position
          boxes[current].style.transform = "translate(0, 0px)";
          boxes[current].translateVal = 0;

          //move boxes into correct position
          for (var i = 0; i < boxes.length; i++) {
            //move prev boxes to above
            if(i < current) {
              boxes[i].style.transform = "translate(0, " + (-moveAmount) + "px)";
              boxes[i].translateVal = moveAmount;
            }

            if(i > current) {
              //move next boxs to below
              boxes[i].style.transform = "translate(0, " + (moveAmount) + "px)";
              boxes[i].translateVal = moveAmount;
            }
          }

          function animateUp(el) {
            TweenLite.to(el, 0.5 , { 
                transform: "translate(0, " + (-moveAmount) + "px)",
                autoAlpha: 0,
                onComplete: onAnimUpComplete
             });
            function onAnimUpComplete() {
              //complete
            }
          }

          function animateDown(el) {
            TweenLite.to(el, 0.5 , { 
                transform: "translate(0, " + (moveAmount) + "px)",
                autoAlpha: 0,
                onComplete: onAnimDownComplete
             });
            function onAnimDownComplete() {
              //complete
            }
          }

          function animateIn(el) {
            TweenLite.to(el, 0.5 , { 
                transform: "translate(0, 0px)",
                autoAlpha: 1,
                onComplete: onAnimInComplete
             });
            function onAnimInComplete() {
              //complete
            }
          }

          function SetPositions() {
            for (var i = 0; i < boxes.length; i++) {
              //move if it's the current one, move it to zero
              if (i === current){
                //init with first slide at initial position
                animateIn(boxes[i]);
              }
              //else move the prev/next boxes into correct position...
              //if prev
              if(i === (current - 1)) {
                // //move prev boxes to above
                animateUp(boxes[i]);
              }
              if(i === (current + 1)) {
                // //move next boxs to below
                animateDown(boxes[i]);
              }
            }   
          }

          return {
            setPosition: function(position) {
              //convert to array system
              if ((position > 0) && (position < (boxes.length - 1))) {
                current = (position - 1 );
                SetPositions();
              } else {
                throw 'error: must enter a valid slide index';
              }

            },
            move: function(direction){
              //increment current
              if (direction === "prev" && current > 0){
                current--;
              } else if (direction === "next" && (current < (boxes.length - 1))){
                current++;
              }

              SetPositions();
            }
          }
        },
    }

    return {
      init: function(type, options) {
        return initSlider[type](options);
      }
    }
  }

  //init slider (boxwidth)   
  var SimpleSlider = SimpleSlider();
  var mySlider = SimpleSlider.init('vertical', { boxHeight: 40 });
  mySlider.setPosition(1);

  //optional prev-next buttons
  var prev = document.querySelector('.controls .prev');
  var next = document.querySelector('.controls .next');
  prev.addEventListener('click', function() {
    mySlider.move('prev');
  });
  next.addEventListener('click', function() {
    mySlider.move('next');
  });
   
  //init slider (boxwidth)    
  SimpleSlider.init(20);
  SimpleSlider.move('next');



  // html =========================================

  <div class="simple-slider">
  <div class="boxes">
    <div class="box-item" translateVal="">1</div>
    <div class="box-item" translateVal="">2</div>
    <div class="box-item" translateVal="">3</div>
    <div class="box-item" translateVal="">4</div>
    <div class="box-item" translateVal="">5</div>
    <div class="box-item" translateVal="">6</div>
    <div class="box-item" translateVal="">7</div>
  </div>
</div>

<div class="controls">
  <button class="prev">prev</button>
  <button class="next">next</button>
</div>

// css =========================================

$boxSize: 20px;

.simple-slider {
  width: $boxSize;
  height: $boxSize;
}
.simple-slider .boxes {
  width: $boxSize;
  height: $boxSize;
  background: #666666;
  position: relative;
  margin: 0 auto;
  overflow: hidden;
}
.simple-slider .boxes .box-item {
  position: absolute;
  width: $boxSize;
  height: $boxSize;
  right: 0;
  bottom: 0;
  left: 0;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}
.simple-slider .next {
  float: right;
}
.simple-slider .prev {
  float: left;
}