//must use done to let jest know it's async

//for callbacks
test('the data is peanut butter', done => {
  function callback(data) {
    expect(data).toBe('peanut butter');
    done();
  }
  fetchData(callback);
});



//for promises
test('the data is peanut butter', () => {
  expect.assertions(1);
  return expect(fetchData()).resolves.toBe('peanut butter');
});

//if expect promise to be rejected
test('the fetch fails with an error', () => {
  expect.assertions(1);
  return expect(fetchData()).rejects.toMatch('error');
});

// //long way:

// //for promises
// test('the data is peanut butter', () => {
//   expect.assertions(1);
//   return fetchData().then(data => {
//     expect(data).toBe('peanut butter');
//   });
// });

// //if expect promise to be rejected
// test('the fetch fails with an error', () => {
//   expect.assertions(1);
//   return fetchData().catch(e =>
//     expect(e).toMatch('error')
//   );
// });