const test = (...args) => {
  console.log('ar', args);
};

test(1, 2);
console.log('cetes-1', test.length);

var a = 1;

function test1() {
  console.log('this', this.a);
}

console.log('this...', this);
test1();
