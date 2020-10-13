function printTimes(options) {
  const { text, times } = options;

  for (let i = 0; i < times; i++) {
    console.log(`${String(i + 1).padStart(2, '0')} ${text}`);
  }
}

// print 'hello world' five times:
printTimes({ text: 'hello world', times: 5 });
