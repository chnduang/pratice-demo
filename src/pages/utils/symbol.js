class Test {
  [Symbol.hasInstance](str) {
    return str === 'test';
  }
}

console.log('test---', 'test' instanceof new Test());
