//Lodash
//---------------------------------------

//filter through an array of objects
_.filter(datastore, function(item){
  return item.incubatorIdentification.parent === 'Food';
});

//.some to return some objects from array of objects
var foundEngagements = _.some(mockDataStore.businessEngagedIn, function (item) {
  if(item === true) { return item }

});

//.omit return everything but the specified props
const props = _.omit(this.props, 'todo');

//find and replace
//-----------------
//copy the profession object at the incoming index payload
var data = _.find(INITIAL_STATE, function(item){ return item.id == action.idPayload; });
//set it to true
data.isSet = action.isSetPayload;
//console.log("found data: " + data);

// Find item index using indexOf+find
// look in to the initial state array to find the id of he passed action payload
var index = _.indexOf(INITIAL_STATE, _.find(INITIAL_STATE, {id: action.idPayload}));
//console.log("found index: " + index);

// Replace item at index using native splice
INITIAL_STATE.splice(index, 1, data);