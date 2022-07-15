/*
 * @Author: QD
 * @Date: 2022-07-15 14:50:02
 * @Description: 查找数组两数之和
 */

export const matchTwoNumberSum = (arr: number[], n: number): number[] => {
  if (n == null) {
    throw new Error('no search number');
  }

  const length = arr.length;

  let startIndex = 0;
  let endIndex = length - 1;

  while (startIndex < endIndex) {
    const tempStartData = arr[startIndex];
    const tempEndData = arr[endIndex];
    const tempSum = tempStartData + tempEndData;

    if (tempSum === n) {
      return [tempStartData, tempEndData];
    }
    if (tempSum < n) {
      startIndex++;
    } else {
      endIndex--;
    }
  }

  return [];
};
