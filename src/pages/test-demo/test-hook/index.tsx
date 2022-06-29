import React, { useState } from 'react';
import { useModel } from 'umi';
import { breakObjOf } from './utils';

const MyComponent = (props) => {
  console.log('obj', breakObjOf());
  const { visible } = useModel('useTestModel', (model) => ({
    visible: model.visible,
  }));

  return <div>ss visible: {`${visible}`}</div>;
};

export default MyComponent;
