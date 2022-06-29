import React from 'react';
import styles from './index.less';

const prefix = 'test-css';

const TestCss = (props) => {
  return (
    <div className={styles[`${prefix}`]}>
      test-css
      <div className={styles[`${prefix}-box`]}>box</div>
      <div className={styles[`${prefix}-sticky`]}>
        <div className={styles[`${prefix}-sticky-container`]}>
          <div className={styles[`${prefix}-sticky-active`]}>
            sticky-position-a
          </div>
          <span>a</span>
          <span>a</span>
          <span>a</span>
          <span>a</span>
        </div>
        <div className={styles[`${prefix}-sticky-container`]}>
          <div className={styles[`${prefix}-sticky-active`]}>
            sticky-position-b
          </div>
          <span>b</span>
          <span>b</span>
          <span>b</span>
          <span>b</span>
        </div>
        <div className={styles[`${prefix}-sticky-container`]}>
          <div className={styles[`${prefix}-sticky-active`]}>
            sticky-position-c
          </div>
          <span>c</span>
          <span>c</span>
          <span>c</span>
          <span>c</span>
        </div>
      </div>
      <div className={styles[`${prefix}-empty`]}>empty</div>
    </div>
  );
};

export default TestCss;
