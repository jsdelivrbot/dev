/* ==========================================================================
chai-jquery (using the react test_helper)
========================================================================== */

// check for element to exist
expect(component.find('.comment-box')).to.exist;

// check that is has a specific class
expect(leftButton2).to.have.class('open'); 

// check that an input has a specific value
expect(component).to.have.value('new comment');

//check if values are what they are expected to be:
.to.equal(expected)
// deep equality (use with object for example)
.to.eql(expected)        

