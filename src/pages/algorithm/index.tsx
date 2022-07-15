/*
 * @Author: QD
 * @Date: 2022-07-07 17:32:11
 * @Description:
 */
import React, { useEffect } from 'react';
import { IListQueueFunc, TestSetInstance } from './ILink/queue';
import { createLink, reverseILink } from './ILink/reverse';
import { StackQueue } from './stack/queue';
import { matchTwoNumberSum } from './other/two-number-sum';

const Algorithm = (props) => {
  const testStackQueue = () => {
    const insQue = new StackQueue();

    insQue.add(1);
    insQue.add(2);
    insQue.add(3);

    console.log('insQue', insQue.length);
    console.log('delete', insQue.delete());
  };

  const testMatchTwoSum = () => {
    return matchTwoNumberSum([1, 2, 3, 5], 6);
  };

  useEffect(() => {
    // testStackQueue();
    console.log('sum---', testMatchTwoSum());
  }, []);

  return <div>ceshi algorithm</div>;
};

export default Algorithm;
