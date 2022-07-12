/*
 * @Author: QD
 * @Date: 2022-07-11 15:46:59
 * @Description: 实现reduce方法
 */

/**
 * @description:
 * @param {*} arr 数组
 * @param {*} iteratee 迭代函数
 * @param {*} init 初始参数
 * @return {*}
 */
export const ReduceAchieve = (arr, iteratee, init) => {
  if (!Array.isArray(arr)) {
    return [];
  }

  for (let i = 0; i < arr.length; i++) {
    init = iteratee(init, arr[i], i, arr);
  }
  return init;
};
