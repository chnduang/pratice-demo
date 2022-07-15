import { matchTwoNumberSum } from '../../other/two-number-sum';

test('查找两数和', () => {
  const res = matchTwoNumberSum([1, 2, 5, 4, 9], 6);

  expect(res).toEqual([2, 4]);
});
