/*
 * @Author: QD
 * @Date: 2022-07-07 17:32:11
 * @Description:
 */
import React, { useEffect } from 'react';
import { IListQueueFunc, TestSetInstance } from './ILink/queue';

const Algorithm = (props) => {
  useEffect(() => {
    IListQueueFunc();
    TestSetInstance();
  }, []);

  return <div>ceshi algorithm</div>;
};

export default Algorithm;
