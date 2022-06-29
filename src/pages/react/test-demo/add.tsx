import React, {
  useState,
  useEffect,
  useRef,
  useMemo,
  useCallback,
} from 'react';
import { Button } from 'antd';
import { useIntersection } from 'react-use';

const prefix = 'my-component';
let c = 1;
const setObj = new Set();

const MyComponent = () => {
  const [list, setList] = useState([
    {
      id: 1,
      text: 'list-1',
    },
  ]);

  const docRef = useRef(null);

  const observer = useMemo(
    () =>
      new ResizeObserver((entries) => {
        console.log('mutationsList', entries);
      }),
    [],
  );

  useEffect(() => {
    // const config = { attributes: true, childList: true, subtree: true };
    observer.observe(docRef.current);
    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        width: 200,
        height: 400,
        backgroundColor: '#eec',
      }}
    >
      {list.map((item) => (
        <span
          style={{ width: '120px', height: '60px', backgroundColor: '#ecc' }}
          key={item.id}
        >
          {item.text}
        </span>
      ))}
      <div ref={docRef}>
        <Button
          onClick={() => {
            setList([
              ...list,
              {
                id: list.length + 1,
                text: `list-${list.length + 1}`,
              },
            ]);
          }}
        >
          增加
        </Button>
      </div>
    </div>
  );
};

export default MyComponent;
