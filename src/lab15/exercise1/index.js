function printTimes(options) {
  const { text, times = 5 } = options;

  for (let i = 0; i < times; i++) {
    console.log(`${String(i + 1).padStart(2, '0')} ${text}`);
  }
}

// print 'hello world' ten times:
printTimes({ text: 'hello world', times: 10 });
