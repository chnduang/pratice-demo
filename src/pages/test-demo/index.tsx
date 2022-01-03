import React, { useState, useRef, useMemo } from 'react';
import { Button } from 'antd';
import { useImmer } from 'use-immer';
// import produce from 'immer';
import Count from './components/count';

const prefix = 'my-component';
let c = 1;

const MyComponent = () => {
  const [count, setCount] = useState(0);
  // const [info, setInfo] = useState({
  //   age: 18,
  //   name: 'test',
  // });
  const countRef = useRef(null);
  const [info, setInfo] = useImmer({
    age: 18,
    name: 'test',
    test: [{ id: 1 }],
    obj: {
      age: 19,
    },
  });

  const countObj = useMemo(() => 'name', []);

  console.log('ceshi----', info, count);

  return (
    <div>
      <Button
        onClick={() => {
          setCount(count + 1);
          // setInfo(
          //   produce((draft) => {
          //     draft.age = 19;
          //   }),
          // );
          setInfo((draft) => {
            draft.age = 19;
            draft.obj.age = 20 + c;
          });
          c++;
          // setInfo({ ...info, age: 19 });
        }}
      >
        执行{count}
      </Button>
      <Count data={countObj} key="count" ref={countRef} info={info.test} />
    </div>
  );
};

export default MyComponent;
