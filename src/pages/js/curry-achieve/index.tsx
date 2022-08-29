/*
 * @Author: QD
 * @Date: 2022-07-18 17:39:37
 * @Description: 函数柯里化
 */

export function curryAchieve(fn: Function) {
  const fnArgsLength = fn.length; // 获取函数参数的长度
  let args: any[] = []; // 运行函数时的实际传参的参数 存储

  function curryFn(this: any, ...newsArgs: any[]) {
    args = [...args, ...newsArgs];
    if (args.length < fnArgsLength) {
      return curryFn;
    }
    return fn.apply(this, args.slice(0, fnArgsLength));
  }

  return curryFn;
}
