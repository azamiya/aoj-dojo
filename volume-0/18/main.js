let fs = require('fs');

const yourAnswerFunctionComesHere = data => {
  var splitedData = data.split(" ");
  var sortedData = splitedData.sort((x, y) => y - x);  
  console.log(sortedData.join(" "));
}

const readFile = path => {
  fs.readFile(path, 'utf8', (err, data) => {
    yourAnswerFunctionComesHere(data);
  });
}

const readFileWithoutArg = () => {
  const data = require('fs').readFileSync('/dev/stdin', 'utf8');
  yourAnswerFunctionComesHere(data);
}

let sampleInputPath = "";

if(process.argv.length > 2) {
  sampleInputPath = process.argv[2];
  readFile(sampleInputPath);
} else {
  readFileWithoutArg();
}
