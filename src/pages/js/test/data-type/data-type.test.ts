import { getDataType } from '../../data-type';

test('获取数据类型', () => {
  expect(getDataType(true)).toBe('boolean');
});
