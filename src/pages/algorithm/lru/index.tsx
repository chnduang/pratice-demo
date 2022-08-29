/*
 * @Author: QD
 * @Date: 2022-07-19 11:00:57
 * @Description: LRU 缓存淘汰算法
 */

export default class LRUCacheAchieve {
  private length: number;
  private cacheData: Map<any, any> = new Map();

  constructor(length: number) {
    if (!length || length < 0) {
      throw new Error('not the invalid number');
    }
    this.length = length;
  }

  set(key: any, value: any) {
    const tempCacheData = this.cacheData;
    if (tempCacheData.has(key)) {
      // 去除原有的key,重新赋值，使key值可以在map中最新
      tempCacheData.delete(key);
    }

    tempCacheData.set(key, value);

    if (tempCacheData.size > this.length) {
      // 获取map中最前面的key值 删除
      const getLessKey = tempCacheData.keys().next().value;
      tempCacheData.delete(getLessKey);
    }
  }

  get(key: any): any {
    const tempCacheData = this.cacheData;
    if (!tempCacheData.has(key)) {
      return null;
    }
    const cacheValue = tempCacheData.get(key);
    // 触发key值的获取，当前key增加活跃程度，重新添加至map最后
    tempCacheData.delete(key);
    tempCacheData.set(key, cacheValue);

    return cacheValue;
  }

  keys() {
    return this.cacheData.keys().next().value;
  }
}

const obj = {};

Object.defineProperty(obj, 'style', {
  value: () => {
    return 'ceshi';
  },
});
