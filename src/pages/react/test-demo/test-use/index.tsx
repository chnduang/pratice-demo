import React, { useEffect, useRef } from 'react';
import { Button } from 'antd';

const TestUse = (props) => {
  const typeRef = useRef('second');

  useEffect(() => {
    console.log('type---', typeRef.current);
  }, [typeRef.current]);

  const handleClick = () => {
    console.log('llll----');
    typeRef.current = 'third';
  };

  console.log('this', typeRef.current);

  return (
    <div>
      <Button onClick={handleClick}>切换type</Button>
    </div>
  );
};

export default TestUse;
