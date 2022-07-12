/*
 * @Author: QD
 * @Date: 2022-07-11 15:13:38
 * @Description: 数组扁平化
 */

export const arrayFlatten = (arr: any[]): any[] => {
  if (!Array.isArray(arr)) {
    return [];
  }
  return arr.flat(Infinity);
};

export const arrayFlatten1 = (arr: any[]): any[] => {
  if (!Array.isArray(arr)) {
    return [];
  }

  const result = (tempArr = [], init = []) => {
    return tempArr.reduce((preValue, currentValue) => {
      if (!Array.isArray(currentValue)) {
        return preValue.concat(currentValue);
      }
      return result(currentValue, preValue);
    }, init);
  };

  return result(arr);
};
