/*
 * @Author: QD
 * @Date: 2022-07-15 13:48:18
 * @Description: 两个栈实现队列
 */

export class StackQueue {
  private stackShift: number[] = [];
  private stackPop: number[] = [];

  constructor() {}

  add(n: number) {
    this.stackShift.push(n);
  }

  delete(): number | null {
    const tempStackShift = this.stackShift;
    const tempStackPop = this.stackPop;
    while (tempStackShift.length) {
      const popData = tempStackShift.pop();
      if (popData !== null) {
        tempStackPop.push(popData);
      }
    }

    let result = tempStackPop.pop();

    while (tempStackPop.length) {
      const popData = tempStackPop.pop();
      if (popData !== null) {
        tempStackShift.push(popData);
      }
    }

    return result || null;
  }

  get length(): number {
    return this.stackShift.length;
  }
}
