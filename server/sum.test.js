const sum = require('./sum');

test('adds 1 + 2 to equal 3', () => {
  expect(sum.add(1, 2)).toBe(3);
});

test('object assignment 1 + 2 to equal obj id: 3', () => {
    expect(sum.getSumObj(1, 2)).toEqual( {id:3, quantity:1} );
});


//test a value
test('two plus two is four', () => {
    expect(2 + 2).toBe(4);
});

//test an object/array
test('object assignment', () => {
    const data = [1,2];
    expect(data).toEqual([1,2]);
});