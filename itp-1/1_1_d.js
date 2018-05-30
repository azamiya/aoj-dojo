process.stdin.setEncoding('utf-8');
process.stdin.on('data', input => {
  const parsedValue = parseInt(input);
  const hour = Math.floor(parsedValue / 3600);
  const minute = Math.floor((parsedValue % 3600) / 60);
  const second = parsedValue % 60;
  console.log(hour + ":" + minute + ":" + second);
});