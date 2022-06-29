import React, { useEffect, useState } from 'react';

let type = 'current';
const MyComponent = (props) => {
  const [order, setOrder] = useState(0);
  const [order1, setOrder1] = useState();
  useState(9);
  if (type === 'current') {
    var [current, setCurrent] = useState(1);
    var [next, setNext] = useState(2);
  } else {
    var [next2, setNext2] = useState(3);
  }
  const [next1, setNext1] = useState(4);

  useEffect(() => {
    setOrder(5);
    // setCurrent(3);
    setNext1(8);
  }, []);

  console.log('order', setNext2, setNext);

  return (
    <div>
      order: {order}&nbsp; current: {current}&nbsp; next: {next}&nbsp; next1:
      {next1}&nbsp; next2: {next2}
    </div>
  );
};

export default MyComponent;
