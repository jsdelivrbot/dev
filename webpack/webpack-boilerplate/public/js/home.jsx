import React from 'react';

require('../css/home.scss');

function Home() {
  return (
    <div className="home">
      <h1>webpack-boilerplate</h1>
    </div>
  );
}



const navTemplate = `
  <div class='zoomin'><i class='fa fa-search-plus' aria-hidden='true'></i></div>
  <div class='zoomout'><i class='fa fa-search-minus' aria-hidden='true'></i></div>
  <div class='previous'><i class='fa fa-arrow-left' aria-hidden='true'></i></div>
  <div class='next'><i class='fa fa-arrow-right' aria-hidden='true'></i></div>
`
const createTooltipsTemplate = (id, tooltip) => {
  const highlight = tooltip.highlight
  const toolTipStyles = `left:${tooltip.x}%;top:${tooltip.y}%`;
  const highlightStyles = `left:${highlight.x}%;top:${highlight.y}%;width:${highlight.width}%;height:${highlight.height}%;`;
  
  // return `
  //   <div class='tooltip-container' style=${toolTipStyles}>
  //     <div class='tooltip-button _${id}' id='${id}'>
  //       <div class='tooltip-button-content'>${id + 1}</div>
  //     </div>
  //     <div class='tooltip'>
  //       <span class='tooltip-title'>${tooltip.title}</span>
  //       <div class='tooltip-content'>${tooltip.content}</div>
  //     </div>
  //   </div>
  //   <div class='highlight' style=${highlightStyles}></div>`;

    return '\n    <div class=\'tooltip-container\' style=' + toolTipStyles + '>\n      <div class=\'tooltip-button _' + id + '\' id=\'' + id + '\'>\n        <div class=\'tooltip-button-content\'>' + (id + 1) + '</div>\n      </div>\n      <div class=\'tooltip\'>\n        <span class=\'tooltip-title\'>' + tooltip.title + '</span>\n        <div class=\'tooltip-content\'>' + tooltip.content + '</div>\n      </div>\n    </div>\n    <div class=\'highlight\' style=' + highlightStyles + '></div>';


    
}


export default Home;
