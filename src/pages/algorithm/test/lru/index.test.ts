import LRUCacheAchieve from '../../lru';

test('LRU基本测试', () => {
  const lru = new LRUCacheAchieve(2);
  lru.set('2', 200);
  lru.set('1', 100);

  expect(lru.get('2')).toBe(200);
  expect(lru.keys()).toBe('1');
});

test('LRU set超出设定容量', () => {
  const lru = new LRUCacheAchieve(2);
  lru.set('1', 100);
  lru.set('2', 200);
  lru.set('1', 400);
  lru.set('3', 300);

  expect(lru.get('2')).toBeNull();
  expect(lru.get('1')).toBe(400);
  expect(lru.get('3')).toBe(300);
});

test('LRU get key值变化', () => {
  const lru = new LRUCacheAchieve(2);
  lru.set('1', 100);
  lru.set('2', 200);
  lru.get('1');
  lru.set('3', 300);
  expect(lru.get('1')).toBe(100);
  expect(lru.get('2')).toBeNull();
  expect(lru.get('3')).toBe(300);
});
