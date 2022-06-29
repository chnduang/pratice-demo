const obj = { id: 10 };

const testProxy = new Proxy(obj, {
  get(target, propKey) {
    console.log('target', target, propKey);
    if (propKey === 'name') {
      return target[propKey];
    }
    return { id: 12 };
  },
});
testProxy.name = 'ceshi';
// throw new Error('error');
console.log('test', obj, testProxy, testProxy.name);
