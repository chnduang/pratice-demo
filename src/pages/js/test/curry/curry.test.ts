import { curryAchieve } from '../../curry-achieve';

test('函数柯里化', () => {
  function add(a: number, b: number, c: number): number {
    return a + b + c;
  }

  const originFn = add(10, 20, 30);

  const curryFn = curryAchieve(add);
  const result = curryFn(10)(20)(30);
  console.log('result', result);
  expect(result).toBe(originFn);
});
