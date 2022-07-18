/*
 * @Author: QD
 * @Date: 2022-07-18 16:58:27
 * @Description: 获取数据类型
 */

export const getDataType = (type: any): string => {
  const originType = Object.prototype.toString.call(type);

  const searchEmptyIndex = originType.indexOf(' '); // '[Object String]'
  const upperType = originType.slice(searchEmptyIndex + 1, -1);

  return upperType.toLowerCase();
};
