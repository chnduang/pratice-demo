import React from 'react';
import Demo from './demo';
const prefix = 'my-component';

const MyComponent = (props) => {
  return (
    <div>
      test-demo
      <Demo test="test" />
    </div>
  );
};

export default MyComponent;
