import EventBus from '../../event-bus';

test('测试EventBus绑定事件', () => {
  const event = new EventBus();
  // jest mock fn
  const fn1 = jest.fn();
  const fn2 = jest.fn();
  const fn3 = jest.fn();

  event.on('key1', fn1);
  event.on('key1', fn2);
  event.on('key3', fn3);

  event.emit('key1', 10, 20);

  expect(fn1).toBeCalledWith(10, 20);
  expect(fn2).toBeCalledWith(10, 20);
  expect(fn3).not.toBeCalled();
});

test('测试EventBus解绑事件', () => {
  const event = new EventBus();
  // jest mock fn
  const fn1 = jest.fn();
  const fn2 = jest.fn();

  event.on('key1', fn1);
  event.on('key1', fn2);

  event.off('key1', fn2);
  event.emit('key1', 10, 20);

  expect(fn1).toBeCalledWith(10, 20);
  expect(fn2).not.toBeCalled();
});
