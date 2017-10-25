//querySelector
//-------------------

//returns the first element that matches the selector
var el = document.querySelector("div.user-panel.main input[name=login]");

//same thing, but queries within a specific element
var el = document.body.querySelector("style[type='text/css'], style:not([type])");

//querySelectorAll
//note that it doesn't return a live list
//returns a node list of all matching elements
var allLinks = document.querySelectorAll("a");
for(i = 0; i < allLinks.length; i++)
{
  allLinks[i].style.color = "red";
}


// In this example, when selecting .outer .inner in the context of .select, .inner is still found, even though .outer is not a descendant of the baseElement (.select).
// querySelectorAll() only verifies that the last element in the selector is within the baseElement.
<div class="outer">
  <div class="select">
    <div class="inner">
    </div>
  </div>
</div>
let select = document.querySelector('.select');
let inner = select.querySelectorAll('.outer .inner');
inner.length; // 1, not 0!


//the html element
document.documentElement

//the body elememt
document.body

//getElementsByClassNames
//-------------------
//Returns an array-like object of all child elements which have all of the given class names. 
var elements = document.getElementsByClassName('test');

//getElementsByTagName
//-------------------
var list = document.getElementsByTagName('a');

//getElementById
//-------------------
var element = getElementById('myId');

//using data attributes
//-------------------
var article = document.getElementById('electriccars');
 
article.dataset.columns // "3"
article.dataset.indexNumber // "12314" * note that dashed datasets are converted to cammel case
article.dataset.myThing // "cars"

// <article 
//   id="electriccars"
//   data-columns="3" 
//   data-index-number="12314" 
//   data-myThing="cars">
// </article>

//get parent node
//-------------------
var element = getElementById('myId');
var parent = element.parentNode;

//get last child node
//-------------------
var element = getElementById('myId');
var parent = element.lastChild;

//get attribute
//-------------------
var attribute = element.getAttribute(attributeName);

//convert elments list to array (from querySelectorAll) so we can use it in a forEach loop for example
//-------------------
var arrows = [].slice.call(document.querySelectorAll('.sideArrow'));
arrows.forEach(function(item, index) {
  item.addEventListener('click', onArrowClick);
});



