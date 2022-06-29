import React, { useEffect } from 'react';
import { Button } from 'antd';
import axios from 'axios';

const MOCK_URL =
  'http://mock.qdzhou.cn/mock/5fa90af320c8da4aef4a3bd8/open-1/mock';

const prefix = 'my-component';

const MyComponent = () => {
  const init = async () => {
    const res = await axios({
      method: 'GET',
      url: MOCK_URL,
    });
    console.log('res', res);
  };

  useEffect(() => {
    init();
  }, []);

  return (
    <div>
      <Button type="primary">测试</Button>
    </div>
  );
};

export default MyComponent;
