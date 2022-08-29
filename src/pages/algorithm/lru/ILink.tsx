/*
 * @Author: QD
 * @Date: 2022-07-20 13:45:42
 * @Description: LRU 链表的实现
 */

export default class LRUILink {
  private length: number;

  constructor(length: number) {
    if (!length || length < 1) {
      throw new Error('no invalid length');
    }
    this.length = length;
  }
}
