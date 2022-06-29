import React from 'react';

export const PAGE_ROUTE = ['/skill-tree', '/product-academy'];

export const getIsPageRoute = (pathname) => {
  let route;
  for (let item of PAGE_ROUTE) {
    console.log('item---', item);
    if (pathname.startsWith(item)) {
      route = item;
      break;
    }
  }
  return route;
};

const MyComponent1 = (props) => {
  console.log('props--', props);
  const { children, location } = props;

  if (!getIsPageRoute(location.pathname)) {
    return null;
  }
  return <>{children}</>;
};

export default MyComponent1;
