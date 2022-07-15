/*
 * @Author: QD
 * @Date: 2022-07-15 16:33:24
 * @Description: 手动实现 new
 */

export function newCustomAchieve<T>(constructor: Function, ...args: any[]): T {
  // 创建一个空对象，继承constructor的原型
  const tempObj = Object.create(constructor.prototype);
  // tempObj作为this 执行constructor 传入参数
  constructor.apply(tempObj, args);

  return tempObj;
}
