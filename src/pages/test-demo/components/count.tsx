import React, { memo, useEffect, useLayoutEffect, forwardRef } from 'react';
const prefix = 'my-component';

console.log('ceshi-component');
const MyComponent = (props, ref) => {
  const { data } = props;

  useEffect(() => {
    console.log('data', data());
  }, [data]);

  console.log('count---children-', ref, props);
  return <div>{data().name}</div>;
};

MyComponent.displayName = 'CountComp';

export default memo(forwardRef(MyComponent));
