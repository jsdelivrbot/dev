/* ==========================================================================
basic setup
========================================================================== */
//first do imports then...

//describe the componet at hand
describe('ComponentName', () => {
  //can store varables here for use in the below

  beforeEach(() => {
  	//somthing to do before each it block
  });

  it('shows an LI for each comment', () => {
    // do an assertion
  });

  //can do nested describes.
  //the parent describe and beforeEach is run before chil describes
  describe('ComponentName', () => {
    beforeEach(() => {
    	//somthing to do before each it block
    });

    it('does this particual thing', () => {
    	// do an assertion
    });
  });

});


/* ==========================================================================
package.json script
========================================================================== */

"test": "mocha --compilers js:babel-core/register --require ./src/react-app/test/test_helper.js 'src/react-app/test/**/*.js'",
"test:watch": "npm run test -- --watch"