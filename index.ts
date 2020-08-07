const { debounce, throttle, log, mixins } = require('./decorator');

const act = {
  sayHi() {
    console.log('sayHi');
  },
  eat() {
    console.log('eat food');
  },
};

@mixins([act])
export class A {
  public getTime() {
    console.log(new Date().toLocaleTimeString());
  }

  @debounce(1000)
  public testDebounce() {
    console.log(new Date().toLocaleTimeString());
  }

  @throttle(1000)
  @log()
  public testThrottle() {
    console.log(new Date().toLocaleTimeString());
  }
}

let a = new A();

// test debounce
// for (let i = 0; i < 100; i++) {
//   a.testDebounce();
// }

// test throttle
// setInterval(() => {
//   a.testThrottle();
// }, 10);

console.log(a.eat());
