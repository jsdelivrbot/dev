import data from '../obj';

test('object assignment', () => {
	expect(data).toEqual({ one: 1, two: 2 });
});