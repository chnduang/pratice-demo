import React, { memo, forwardRef } from 'react';
const prefix = 'my-component';

console.log('ceshi-component');
const MyComponent = (props, ref) => {
  const { data } = props;

  console.log('count---children-', ref, props);
  return <div>{data.name}</div>;
};

MyComponent.displayName = 'CountComp';

export default memo(forwardRef(MyComponent));
