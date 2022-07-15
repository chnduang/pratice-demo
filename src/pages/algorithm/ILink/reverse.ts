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

// 创建链表
export const createLink = (arr: number[]): ILinkNode => {
  const length = arr.length;
  if (!length) {
    throw new Error('not array');
  }
  let curNode: ILinkNode = {
    value: arr[length - 1],
  };

  if (length === 1) {
    return curNode;
  }

  for (let i = length - 2; i >= 0; i--) {
    curNode = {
      value: arr[i],
      next: curNode,
    };
  }
  return curNode;
};
