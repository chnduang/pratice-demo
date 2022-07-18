/*
 * @Author: QD
 * @Date: 2022-07-15 17:15:55
 * @Description: Event Bus
 */

type eventBus = {
  [key: string]: Array<{ fn: Function; isOnce: boolean }>;
};

export default class EventBus {
  private events: eventBus;

  constructor() {
    this.events = {};
  }

  // 挂载事件
  on(type: string, fn: Function, isOnce?: boolean) {
    const events = this.events;
    if (events[type] == null) {
      events[type] = [];
    }
    events[type].push({ fn, isOnce });
  }

  // 只触发一次，然后解绑
  once(type: string, fn: Function) {
    this.on(type, fn, true);
  }

  // 触发事件
  emit(type: string, ...args: any[]) {
    const tempTypeFnList = this.events[type];
    if (!tempTypeFnList || !tempTypeFnList.length) {
      return;
    }

    // 执行并且 过滤只挂载一次的
    this.events[type] = tempTypeFnList.filter((item) => {
      const { fn, isOnce } = item;
      fn(...args);
      return !isOnce;
    });
  }

  // 解绑事件，
  off(type?: string, fn?: Function) {
    if (!type) {
      this.events = {};
      return;
    }
    if (type && !fn) {
      this.events[type] = [];
      return;
    }
    const tempEventList = this.events[type];
    this.events[type] = tempEventList.filter((item) => item.fn !== fn);
  }
}
