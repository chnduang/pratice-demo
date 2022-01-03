import React from 'react';

const hocLogProps = (log) => (Component) => {
  console.log(log);
  class LogProps extends React.Component {
    componentDidMount() {
      console.log('componentDidMount:', this.props);
    }
    componentDidUpdate(prevProps) {
      console.log('old props:', prevProps);
      console.log('new props:', this.props);
    }

    render() {
      const { forwardedRef, ...rest } = this.props;

      // 将自定义的 prop 属性 “forwardedRef” 定义为 ref
      return <Component ref={forwardedRef} {...rest} />;
    }
  }

  // 注意 React.forwardRef 回调的第二个参数 “ref”。
  // 我们可以将其作为常规 prop 属性传递给 LogProps，例如 “forwardedRef”
  // 然后它就可以被挂载到被 LogProps 包裹的子组件上。
  return React.forwardRef((props, ref) => {
    console.log('forwar', props);
    return <LogProps {...props} forwardedRef={ref} />;
  });
};

class TextComp extends React.Component {
  componentDidMount() {
    console.log('this', this.props);
  }

  render() {
    return <>test-comp</>;
  }
}

export default hocLogProps({ log: 'test' })(TextComp);
