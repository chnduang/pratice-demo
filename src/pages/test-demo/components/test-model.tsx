import { Button } from 'antd';
import React from 'react';
import { history, useModel } from 'umi';

const TestModelComp = (props) => {
  const { visible, toggleVisible } = useModel('useTestModel', (model) => ({
    visible: model.visible,
    toggleVisible: model.toggleVisible,
  }));
  console.log('vi----', visible);
  return (
    <div>
      com:visible: {`${visible}`}
      <Button
        onClick={() => {
          toggleVisible();
        }}
      >
        测试model
      </Button>
      <Button
        onClick={() => {
          history.push(`/test-demo/test-hook`);
        }}
      >
        跳转
      </Button>
    </div>
  );
};

export default TestModelComp;
