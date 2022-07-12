/*
 * @Author: QD
 * @Date: 2022-07-11 16:42:36
 * @Description: 反转单向链表
 */

interface ILinkNode {
  value: number;
  next?: ILinkNode;
}

// a => b => c
// c => b => a
export const reverseILink = (listNode: ILinkNode): ILinkNode => {
  let prevNode: ILinkNode | undefined;
  let curNode: ILinkNode | undefined;
  let nextNode: ILinkNode | undefined = listNode;

  while (nextNode) {
    if (curNode && !prevNode) {
      delete curNode.next;
    }

    if (curNode && nextNode) {
      curNode.next = prevNode;
    }

    prevNode = curNode;
    curNode = nextNode;
    nextNode = nextNode?.next;
  }

  // curNode 最后一个
  curNode!.next = prevNode;

  return curNode!;
};
