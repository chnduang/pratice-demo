import { binarySearchCycle } from '../../binary/binary-search';

test('二分查找循环查找', () => {
  const arr = [10, 20, 30, 40, 50, 60];
  const index = binarySearchCycle(arr, 40);
  expect(index).toBe(3);
});

// test('二分查找', () => {});
