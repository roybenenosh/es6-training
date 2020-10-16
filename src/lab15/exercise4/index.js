function fib(n) {
  if (n == 0 || n == 1) {
    return 1;
  }
  return fib(n - 1) + fib(n - 2);
}

function timed(func) {
  return function(...args) {
    const s0 = Date.now();
    console.log(func(...args));
    const s1 = Date.now();
    console.log(`Took ${s1 - s0}ms`);
  };
}

const timedFib = timed(fib);
console.log(timedFib(40));
