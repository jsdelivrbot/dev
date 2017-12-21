# Foo Slider

### depenencies

* jquery
* GSAP

### usage

js:

```
var mySlider = FooSlider.init({
  slideSpeed: 0.6
});

```

html:

```
<div class="fooslider">
    <div class="slide">
    	<div class="slide-inner">
    		1
    	</div>
	</div>
    <div class="slide">
    	<div class="slide-inner">
    		2
	    </div>
	</div>
    <div class="slide">
    	<div class="slide-inner">
    		3
    	</div>
	</div>
</div>

<div class="fooslider-controls">
  <a class="prev">prev</button>
  <a class="next">next</button>
</div>
```

### slides

Any content can go into 'slide-inner'. It is relative positioned and overflow will be scrollable

### controls

Controls are optional and fooslider-controls can be anywhere on the page.
You can have multiple prev/next controls.

### styling

set background transition color in css file for '.fooslider' class.

### notes

don't change z-index in the animation or it will trigger re-composite