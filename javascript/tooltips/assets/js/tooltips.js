
(function(){

	//tooltips comes from the tooltips.js file

	var isShowingTooltip = false;

	/* ==========================================================================
	helpers
	========================================================================== */

	const isElementInViewport = function(el) {
	  const rect = el.getBoundingClientRect();
	  return (
	      rect.top >= 0 &&
	      rect.left >= 0 &&
	      rect.bottom <= (window.innerHeight || $(window).height()) &&
	      rect.right <= (window.innerWidth || $(window).width())
	  );
	}

	/* ==========================================================================
	template
	========================================================================== */

	const createTooltipsTemplate = function (id, tooltip) {
	  const highlight = tooltip.highlight;
	  
	  //create the tooltip container
	  var tooltipContainer = document.createElement('div');
	  tooltipContainer.classList.add('tooltip-container');
	  tooltipContainer.classList.add('_' + id + '_');
	  // tooltipContainer.style = toolTipStyles;
	  tooltipContainer.style.left = tooltip.x + "%";
	  tooltipContainer.style.top = tooltip.y + "%";

	  //create tooltip button
	  var tooltipButton = document.createElement('div');
	  tooltipButton.classList.add('tooltip-button');
	  tooltipButton.classList.add('_' + id);
	  tooltipButton.id = id;
	  var tooltipButtonContent = document.createElement('div');
	  tooltipButtonContent.classList.add('tooltip-button-content');
	  tooltipButtonContent.textContent = String(id + 1);

	  //add to container
	  tooltipButton.appendChild(tooltipButtonContent);
	  tooltipContainer.appendChild(tooltipButton);

	  //create the tooltip
	  var tooltipEl = document.createElement('div');
	  tooltipEl.classList.add('tooltip');
	  var tooltipTitle = document.createElement('span');
	  tooltipTitle.classList.add('tooltip-title');
	  tooltipTitle.textContent = tooltip.title;
	  tooltipEl.appendChild(tooltipTitle);
	  var toolTipContent = document.createElement('div');
	  toolTipContent.classList.add('tooltip-content');
	  toolTipContent.innerHTML = tooltip.content;
	  tooltipEl.appendChild(toolTipContent);

	  //add to container
	  tooltipContainer.appendChild(tooltipEl);

	  //create highlight
	  var highlightEl = document.createElement('div');
	  highlightEl.classList.add('highlight');
	  //highlightEl.style = highlightStyles;
	  highlightEl.style.left = highlight.x + "%";
	  highlightEl.style.top = highlight.y + "%";
	  highlightEl.style.width = highlight.width + "%";
	  highlightEl.style.height = highlight.height + "%";


	  //add all to the wrapper
	  var wrapper = document.createElement('div');
	  wrapper.classList.add('tooltip-wrapper')
	  wrapper.appendChild(tooltipContainer);
	  wrapper.appendChild(highlightEl);


	  	// "<div class='tooltip-container' style=" + toolTipStyles + ">" +
	   //    "<div class='tooltip-button _" + id + "' id='" + id + "'>" +
	   //     " <div class='tooltip-button-content'>" + id + "</div>" +
	   //    "</div>" +
	   //    "<div class='tooltip'>" +
	   //      "<span class='tooltip-title'>" + tooltip.title + "</span>" +
	   //      "<div class='tooltip-content'>" + tooltip.content + "</div>" +
	   //    "</div>" +
	   //  "</div>" +
	   //  "<div class='highlight' style=" + highlightStyles + "></div>";

	  return wrapper;

	}

	/* ==========================================================================
	index
	========================================================================== */

	//Adding tooltips
	var container = document.querySelector('body');
	for(var i = 0; i < tooltips.length; i++) {
		container.appendChild(createTooltipsTemplate(i, tooltips[i]));
	}

	/* ==========================================================================
	event listeners
	========================================================================== */

	//on tooltip hover
	var tooltipButtons = document.querySelectorAll('.tooltip-button');
	for(i = 0; i < tooltipButtons.length; i++ ) {
		tooltipButtons[i].addEventListener('mouseover', hovered, false);
	}
	function hovered(e) {
		//reset all tooltip offsets to their initial position
		var tooltips = document.querySelectorAll('.tooltip');
		for(i = 0; i < tooltips.length; i++ ) {
			tooltips[i].style.top = "0";
		}
		//if tooltip is out of view, offset it to it's negative height
		var tooltip = e.currentTarget.nextElementSibling;
		var elInView = isElementInViewport(tooltip);
		if(!elInView){
		  const newPosition =  -tooltip.offsetHeight;
		  tooltip.style.top = newPosition + 'px';
		}
	}

	//on bill document click (for hiding tooltips)
	var bill = document.querySelector('.bill');
	bill.addEventListener('click', function(e) {
		if(isShowingTooltip) {
			//hide all tooltips
			hideAll();
		}
		isShowingTooltip = false;

	}, false)


	//Mobile eventlisteners
	if (screen.width < 1050) {

	  //ontooltip click
	  $('.tooltip-button').click(function(e) {

	  	e.cancelBubble = true;
	  	if(e.stopPropagation) e.stopPropagation();

	    var openedTooltip = e.currentTarget.nextElementSibling;
	    var openedHighlight = e.currentTarget.parentElement.nextElementSibling;
	    
	    //hide all
	    hideAll();

	    //Open clicked tooltip and highlight
	    openedTooltip.style.visibility = 'visible';
	    openedHighlight.style.visibility = 'visible';
	    
	    var tooltip = tooltips[e.currentTarget.id];
	    var tooltipCoord = [tooltip.x, tooltip.x + 25, tooltip.y, tooltip.y + 28];
	    var highlightCoord = [
	      tooltip.highlight.x,
	      tooltip.highlight.x + tooltip.highlight.width,
	      tooltip.highlight.y,
	      tooltip.highlight.y + tooltip.highlight.height
	    ];

	    isShowingTooltip = true;

	  });

	}

	//hide all tooltips
	function hideAll() {
		var tooltips = document.querySelectorAll('.tooltip-wrapper');
		for(i = 0; i < tooltips.length; i++) {
			tooltips[i].querySelector('.tooltip').style.visibility = 'hidden';
			tooltips[i].querySelector('.highlight').style.visibility = 'hidden';
		}
	}
})();

