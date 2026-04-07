// tests/filterAndSort.test.js

const { filterAndSort } = require('../src/filterAndSort');

const users = [
  { name: 'Dóra', age: 28, active: true},
  { name: 'Béla', age: 19, active: false},
  { name: 'Csaba', age: 20, active: true},
  { name: 'Anna', age: 22, active: true},
  ];

test('filterAndSort should return active users aged 21 or older, sorted by name', () => {
    const result = filterAndSort(users);
    expect(result).toEqual([
        { name: 'Anna', age: 22, active: true},
        { name: 'Dóra', age: 28, active: true}  
    ]);
});