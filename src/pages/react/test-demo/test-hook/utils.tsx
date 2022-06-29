const obj = {
  success: 'success',
  waring: 'waring',
  error: 'error',
};

export const breakObjOf = () => {
  let type: string;
  for (let [key, val] of Object.entries(obj)) {
    console.log('key', key);
    if (key === 'waring') {
      type = val;
      break;
    }
  }
  return type;
};
