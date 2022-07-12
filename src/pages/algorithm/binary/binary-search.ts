/**
 * @description: 二分法循环实现
 * @param {number} currentArr
 * @param {number} targetValue
 * @return {number}
 */
export const binarySearchCycle = (
  currentArr: number[],
  targetValue: number,
): number => {
  const length = currentArr?.length;

  if (!length) {
    return -1;
  }

  let startIndex = 0;
  let endIndex = length - 1;

  while (startIndex <= endIndex) {
    const midIndex = Math.floor((startIndex + endIndex) / 2);
    if (targetValue < currentArr[midIndex]) {
      endIndex = midIndex - 1;
    } else if (targetValue > currentArr[midIndex]) {
      startIndex = midIndex + 1;
    } else {
      return midIndex;
    }
  }

  return -1;
};

/**
 * @description: 二分递归实现
 * @param {number} currentArr
 * @param {number} targetValue
 * @param {number} startIndex
 * @param {number} endIndex
 * @return {number}
 */
export const binarySearchRecursion = (
  currentArr: number[],
  targetValue: number,
  startIndex: number,
  endIndex: number,
): number => {
  const length = currentArr.length;
  if (!length) {
    return -1;
  }
  if (startIndex === null) {
    startIndex = 0;
  }
  if (endIndex === null) {
    endIndex = length - 1;
  }
  if (startIndex > endIndex) {
    return -1;
  }

  const midIndex = Math.floor((startIndex + endIndex) / 2);

  if (targetValue < currentArr[midIndex]) {
    return binarySearchRecursion(
      currentArr,
      targetValue,
      startIndex,
      midIndex - 1,
    );
  }
  if (targetValue > currentArr[midIndex]) {
    return binarySearchRecursion(
      currentArr,
      targetValue,
      midIndex + 1,
      endIndex,
    );
  }
  return midIndex;
};
