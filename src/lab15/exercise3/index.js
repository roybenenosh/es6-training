function printTimes(options) {
  const { text, times } = options;

  for (let i = 0; i < times; i++) {
    console.log(`${String(i + 1).padStart(2, '0')} ${text}`);
  }
}

function printTimesFromWeirdDevelopersDownstairs(weirdOptions) {
  const { title, times } = weirdOptions;
  const text = title;
  printTimes({ text, times });
}

printTimesFromWeirdDevelopersDownstairs({ title: 'Hello', times: 4 });
