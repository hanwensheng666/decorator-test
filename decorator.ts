const { debounceFn, throttleFn, logFn } = require('./utils');

export const debounce = (timeout: number) => {
  return function (target: any, name: any, descriptor: any) {
    descriptor.value = debounceFn(descriptor.value, timeout);
  };
};

export const throttle = (timeout: number) => {
  console.log('throttle');
  return function (target: any, name: any, descriptor: any) {
    descriptor.value = throttleFn(descriptor.value, timeout);
  };
};

export const log = () => {
  console.log('log');
  return function (target: any, name: any, descriptor: any) {
    descriptor.value = logFn(descriptor.value, name);
  };
};

export function mixins(objList: any[]) {
  return function (target: any) {
    console.log(target);
    objList.forEach((obj: any) => {
      Object.assign(target.prototype, obj);
    });
    console.log(target.prototype);
  };
}
