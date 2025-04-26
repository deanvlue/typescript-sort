import { binaryInsertionSort } from '../src/index';

describe('testing binary search sort', () => {
  test('empty array should return an empty array', () => {
    expect(binaryInsertionSort([])).toStrictEqual([]);
  });

  test('ordered array', () => {
    expect(binaryInsertionSort([9, 5, 4, 3, 2, 1])).toStrictEqual([1, 2, 3, 4, 5, 9]);

  })

});