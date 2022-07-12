/*
 * @Author: QD
 * @Date: 2022-07-07 14:49:52
 * @Description: 链表模拟队列
 */

/**
 * @description:
 * @return {*}
 */

// head =>   tail => 用于指向链表中
//  a => b
// 从tail入队，head出队

interface ILinkedListNode {
  value: number;
  next: ILinkedListNode | null;
}

class ILinkeQueue {
  private head: ILinkedListNode | null = null;
  private tail: ILinkedListNode | null = null;
  private len: number = 0;

  add(val: number) {
    const addLinkNode: ILinkedListNode = {
      value: val,
      next: null,
    };

    if (this.head === null) {
      this.head = addLinkNode;
    }

    const copyNode = this.tail;
    if (copyNode) {
      copyNode.next = addLinkNode;
    }

    this.tail = addLinkNode;

    this.len++;
  }
  delete() {
    if (this.head === null) {
      return null;
    }

    const delNode = this.head;

    this.head = delNode.next;

    this.len--;

    return delNode.value;
  }

  get length(): number {
    // 如果取链表的长度 相当于遍历数组 时间复杂度 O(n)
    return this.len;
  }
}

const IListQueueFunc = () => {
  const queue = new ILinkeQueue();

  queue.add(3);

  console.info('ILinkeQueue', queue);

  queue.add(2);

  console.log('delete', queue.delete());
};

class TestSet {
  public temp: string;

  get text() {
    return this.temp;
  }
  set text(val: string) {
    this.temp = val;
  }
}

const TestSetInstance = () => {
  const ins = new TestSet();
};

export { ILinkeQueue, IListQueueFunc, TestSetInstance };
