/*
 * @Author: QD
 * @Date: 2022-07-15 16:20:29
 * @Description: 斐波那契数列
 */

export const RecursionFib = (n: number): number => {
  if (n <= 0) {
    return 0;
  }

  if (n === 1) {
    return 1;
  }

  let fib1 = 0;
  let fib2 = 1;
  let result;

  for (let i = 2; i <= n; i++) {
    result = fib1 + fib2;
    fib1 = fib2;
    fib2 = result;
  }

  return result;
};
