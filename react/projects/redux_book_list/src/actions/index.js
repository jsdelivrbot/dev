export function selectBook(book) {
  // selectBook is an ActionCreator, it needs to return an action,
  // which is actually just an object with a type property.
  //this action will be automatically be sent to all the reducers when the
  //action creator is called.
  // type: <purpose of action>,
  // payload: <the data of the action taken>
  return {
    type: 'BOOK_SELECTED',
    payload: book
  };
}