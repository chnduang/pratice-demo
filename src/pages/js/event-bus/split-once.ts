/*
 * @Author: QD
 * @Date: 2022-07-18 16:16:38
 * @Description: 区分执行一次和多次
 */

type eventBus = {
  [key: string]: Array<Function>;
};

export default class EventBusCombine {
  private events: eventBus;
  private onceEvents: eventBus;

  constructor() {
    this.events = {};
    this.onceEvents = {};
  }

  private eventsOn(events: eventBus, type: string, fn: Function) {
    if (events[type] === null) {
      events[type] = [];
    }
    events[type].push(fn);
  }

  private eventOff(events: eventBus, type: string, fn: Function) {
    const fnList = events[type];
    if (fnList) {
      events[type] = fnList.filter((curFn) => curFn !== fn);
    }
  }

  on(type: string, fn: Function) {
    this.eventsOn(this.events, type, fn);
  }

  once(type: string, fn: Function) {
    this.eventsOn(this.onceEvents, type, fn);
  }

  emit(type: string, ...args: any[]) {
    const fnList = this.events[type];
    const onceFnList = this.onceEvents[type];

    if (fnList) {
      fnList.forEach((curFn) => curFn(...args));
    }

    if (onceFnList) {
      onceFnList.forEach((curFn) => curFn(...args));
      // once执行后删除
      this.onceEvents[type] = [];
    }
  }

  off(type: string, fn?: Function) {
    if (!fn) {
      this.events[type] = [];
      this.onceEvents[type] = [];
      return;
    }
    this.eventOff(this.events, type, fn);
    this.eventOff(this.onceEvents, type, fn);
  }
}
