$(document).ready(function() {
    var 
        $gallery = $(".gallery"),
    	$galleryPictures = $(".gallery-pictures"),
        $galleryPicture = $(".gallery-picture"),
        lastPos = {x:0},
        galleryPos = {x:0},
        currentImage = -1,
        imageWidth = 700,
        imageSpacing = 120,
        imageTotalWidth=imageWidth+imageSpacing,
        speedLog=[],
        speedLogLimit=5,
        minBlur=2,
        maxBlur=200,
        blurMultiplier=0.25,
        lastBlur=0,
        dragging=false,
        lastDragPos={x:0},
        dragPos={x:0},
        totalDist=0,
        distThreshold=10,
        distLog=[],
        distLogLimit=10,
        momentumTween=null
    ;

	function setBlur(v){
		if(v<minBlur) v=0;
		if(v>maxBlur) v=maxBlur;
		if(v!=lastBlur){
			$("#blur").get(0).firstElementChild.setAttribute("stdDeviation",v+",0");
		}
		lastBlur=v;
	}

    //set the blur to the element through css
	$galleryPictures.css({
		webkitFilter:"url('#blur')",
		filter:"url('#blur')"
	});

    $galleryPicture.each(function(i) {
        var cur = $(this);
        //animate slide by click
  		cur.click(function(){
  			if(Math.abs(totalDist)<distThreshold)
  				setGalleryPos(i);
  		});
        //animate slide by dot click
  		$(".gallery-pagination-dot").eq(i).click(function(){
  			setGalleryPos(i);
  		})
    });


    function setGalleryPos(v,anim){
        // TweenMax.to(myObject, 2, {x:100, y:200});
        // The above code will tween myObject.x from whatever it 
        // currently is to 100 and myObject.y property to 200 over the course of 2 seconds
    	if(typeof anim=="undefined") anim=true;
    	stopMomentum();

    	TweenMax.to(galleryPos,anim?0.8:0,{
    		x:-v*imageTotalWidth,
    		ease:Quint.easeOut,
    		onUpdate:updateGalleryPos,
    		onComplete:updateGalleryPos
    	});
    }
    //called repeatedly as galleryPos is animating
    //this is where the blur effect happens
    function updateGalleryPos(){

        //with each tick, just set the position to animate the slide
    	TweenMax.set($galleryPictures,{
    		x:galleryPos.x+(($(window).width()-imageWidth)/2),
    		force3D:true,
    		lazy:true
    	});

        //*blur happens here
    	var speed=lastPos.x-galleryPos.x;
    	var blur=Math.abs(Math.round(speed*blurMultiplier));
	    setBlur(blur);

    	lastPos.x=galleryPos.x;

        //highlight the dot depending on the current index of the slide
	    var _currentImage=Math.round(-galleryPos.x/imageTotalWidth);
	    if(_currentImage!=currentImage){
	    	currentImage=_currentImage;
	    	$(".gallery-pagination-dot-selected").removeClass('gallery-pagination-dot-selected');
	    	$(".gallery-pagination-dot").eq(currentImage).addClass('gallery-pagination-dot-selected')
	    }

    }

    //for mouse drag
    // ====================================================

    $gallery.mousedown(function(event){
    	event.preventDefault();
    	dragging=true;
    	dragPos.x=event.pageX;
    	lastDragPos.x=dragPos.x;
    	totalDist=0;
    	distLog=[];

    	stopMomentum();

    	updateGalleryPosLoop();
    });
    $(document).mousemove(function(event){
    	if(dragging){
    		dragPos.x=event.pageX;
    	}
    });
    function updateGalleryPosLoop(){
    	if(dragging){
    		updateGalleryPos();
    		var dist=dragPos.x-lastDragPos.x;
    		lastDragPos.x=dragPos.x;
    		totalDist+=dist;
    		distLog.push(dist);
    		while(distLog.length>distLogLimit){
    			distLog.splice(0,1);
    		};
    		galleryPos.x+=dist;
    		requestAnimationFrame(updateGalleryPosLoop)
    	}
    }
    $(document).mouseup(function(event){
    	if(dragging){
	    	dragging=false;
	    	var releaseSpeed=0;
	    	for (var i = 0; i < distLog.length; i++) {
	    		releaseSpeed+=distLog[i];
	    	};
	    	releaseSpeed/=distLog.length;

	    	var targetX=galleryPos.x+(releaseSpeed*20);
	    	targetX=Math.round(targetX/imageTotalWidth)*imageTotalWidth;
	    	var targetImage=-targetX/imageTotalWidth;
	    	var excess=0;
	    	if(targetImage<0){
	    		excess=targetImage;
	    		targetImage=0;
	    	}else if(targetImage>=$galleryPicture.length){
	    		excess=targetImage-($galleryPicture.length-1);
	    		targetImage=$galleryPicture.length-1;
	    	}
	    	if(excess!=0){
	    		targetX=-targetImage*imageTotalWidth;
	    	}
	    	momentumTween=TweenMax.to(galleryPos,1-(Math.abs(excess)/20),{
	    		x:targetX,
	    		ease:Quint.easeOut,
	    		onUpdate:updateGalleryPos,
	    		onComplete:updateGalleryPos
	    	});

	    	if(Math.abs(totalDist)>=distThreshold){
	    		event.preventDefault();
	    		event.stopPropagation();
	    	}
	    }
    });

    // ====================================================

    function stopMomentum(){
    	if(momentumTween!=null){
	    	momentumTween.kill();
	    	momentumTween=null;
	    	updateGalleryPos();
	    }
    }

    setGalleryPos(0,false);
})