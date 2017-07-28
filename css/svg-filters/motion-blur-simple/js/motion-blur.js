
$(document).ready(function(){
  var $obj=$(".object")
    ,$outer=$obj.children(".blur-outer")
    ,$inner=$outer.children(".blur-inner")
    ,blur=$("#blur-filter").get(0)
  ;
  
  function setBlur(v){
    blur.setAttribute("stdDeviation", v);
  }
  function setMotionBlur(angle,dist){
    TweenMax.set($outer,{
      rotation:angle+"rad",
      force3D:true
    })
    TweenMax.set($inner,{
      rotation:-angle+"rad",
      force3D:true
    })
    setBlur(dist+",0");
  }
  
  function anim(){
    TweenMax.to($obj,0.2+(Math.random()*0.4),{
      x:((Math.random()*200)-100)+"%",
      y:((Math.random()*200)-100)+"%",
      ease:Back.easeOut,
      onComplete:anim
    })
  }
  anim();
  
  function getPos(){
    return $obj.position();
  }
  var lastPos=getPos();
  
  function update(){
    var pos=getPos();
    var dx=pos.left-lastPos.left;
    var dy=pos.top-lastPos.top;
    var speed=Math.sqrt((dx*dx)+(dy*dy));
    var angle=Math.atan2(dy,dx);
    setMotionBlur(angle,speed);
    
    //setBlur(speed+","+0);
    
    lastPos=pos;requestAnimationFrame(update);
  }
  update();
})