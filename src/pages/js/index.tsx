/*
 * @Author: QD
 * @Date: 2022-07-07 17:32:11
 * @Description:
 */
import React, { useEffect } from 'react';
import { arrayFlatten, arrayFlatten1 } from './array-flat';

const JsDemo = (props) => {
  useEffect(() => {
    console.info(
      'flat',
      arrayFlatten([
        [1, [2, 3], 5],
        [2, [4, 6]],
      ]),
    );
    console.log(
      'reduce',
      arrayFlatten1([
        [1, [2, 3], 5],
        [2, [4, 6]],
      ]),
    );
  }, []);

  return <div>ceshi js</div>;
};

export default JsDemo;
