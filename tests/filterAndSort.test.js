// tests/filterAndSort.test.js

const { filterAndSort } = require('../src/filterAndSort');

const users = require('../src/data');

describe('filterAndSortUsers', () => {
    test('original input is not modified', () => {
        const original = [...users];
        filterAndSort(users);

        expect(users).toEqual(original);
    })
});

test('filterAndSort should return active users aged 21 or older, sorted by name', () => {
    const result = filterAndSort(users);
    expect(result).toEqual([
        { name: 'Anna', age: 22, active: true},
        { name: 'Dóra', age: 28, active: true}  
    ]);
});