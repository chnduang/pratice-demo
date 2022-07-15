import { StackQueue } from '../../stack/queue';

test('栈实现队列', () => {
  const queue = new StackQueue();

  queue.add(1);
  queue.add(2);
  queue.add(3);

  expect(queue.length).toBe(3);

  const del = queue.delete();

  expect(del).toBe(1);
});
