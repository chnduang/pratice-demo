import React, { useState, useRef, useMemo, useCallback } from 'react';
import { Button } from 'antd';
import { useImmer } from 'use-immer';
import ReactDOM from 'react-dom';
import { useModel } from 'umi';
// import produce from 'immer';
import Count from './components/count';
import TestModelComp from './components/test-model';

const prefix = 'my-component';
let c = 1;
const setObj = new Set();

const MyComponent = () => {
  const [count, setCount] = useState(0);
  const [count1, setCount1] = useState(0);
  const { visible } = useModel('useTestModel', (model) => ({
    visible: model.visible,
  }));
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

  const countObj = useCallback(() => ({ name: 'name1' }), []);
  setObj.add(countObj);

  console.log('ceshi----', info, count);
  console.log('count1', count1, setObj);

  return (
    <div>
      <span id="test-css">测试-1</span>
      {ReactDOM.createPortal(<>测试portal</>, document.body)}
      {/* {ReactDOM.render(<>测试</>, )} */}
    </div>
  );
  // return (
  //   <div>
  //     visible: {`${visible}`}
  //     {/* <Button
  //       onClick={() => {
  //         setCount1(count1 + 1);
  //         setCount(count + 1);

  //         // setInfo(
  //         //   produce((draft) => {
  //         //     draft.age = 19;
  //         //   }),
  //         // );
  //         setInfo((draft) => {
  //           draft.age = 19;
  //           draft.obj.age = 20 + c;
  //         });
  //         c++;
  //         // setInfo({ ...info, age: 19 });
  //       }}
  //     >
  //       执行{count}
  //     </Button> */}
  //     <TestModelComp />
  //     {/* <Count data={countObj} key="count" ref={countRef} info={info.test} /> */}
  //   </div>
  // );
};

export default MyComponent;
