var a = { name: 'foo', age: 12 }
var b = Object.assign({}, a, { name: 'fred' }, { foo: 'poo' });
// { name: 'fred', age: 12, foo: 'poo' }