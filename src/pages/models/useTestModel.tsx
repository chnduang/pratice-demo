import React, { useState } from 'react';

const useTestModel = (props) => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = (val?: boolean) => {
    setVisible(val || !visible);
  };

  return { visible, toggleVisible };
};

export default useTestModel;
