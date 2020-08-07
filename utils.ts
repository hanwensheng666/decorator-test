/* 
  节流函数 debounce
*/
export function debounceFn(callback: Function, timeout: number = 300) {
  let timer: any;
  return function () {
    let ctx: any = this; // 获取函数所在作用域this
    let args = arguments; // 取得传入参数
    clearTimeout(timer);
    timer = setTimeout(() => {
      timer = null;
      callback.apply(ctx, args);
    }, timeout);
  };
}

/* 
  防抖函数
*/
export function throttleFn(callback: Function, timeout: number = 300) {
  let timer: any;
  return function () {
    const ctx = this;
    const args = arguments;
    if (!timer) {
      callback.apply(ctx, args);
      timer = setTimeout(() => {
        timer = null;
      }, timeout);
    }
  };
}

/* 
  记录函数执行日志
*/
export function logFn(callback: Function, name: string) {
  return function () {
    console.log(`${name} 开始执行`);
    const ctx = this;
    const args = arguments;
    callback.apply(ctx, args);
    console.log(`${name} 执行完成`);
  };
}
