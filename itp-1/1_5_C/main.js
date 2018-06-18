const fs = require('fs');

const yourAnswerFunctionComesHere = data => {
  console.log('---this is input data---');
  console.log(data);
  const splittedDataByLine = data.split("\n");
  console.log(splittedDataByLine);
  let splittedDataBySpace = splittedDataByLine.map(d => d.split(" "));
  console.log(splittedDataBySpace);
  const untaintedData = splittedDataBySpace.map(arr => arr.map(d => Number(d)));
  console.log(untaintedData);
  for(let i = 0; i < untaintedData.length; i++) {
    let stringRow = "";
    for(let j = 0; j < untaintedData[i].length; j++) {
      for(let k = 0; k < untaintedData[i][j]; k++) {
        if(k % 2 === 0) {
          stringRow += "#";
        } else {
          stringRow += "."
        }
      }
      console.log(stringRow);
    }
  }
}

const readFile = path => {
  fs.readFile(path, 'utf8', (err, data) => {
    yourAnswerFunctionComesHere(data);
  });
}

try { 
  readFile(process.argv[2]); 
} catch(error){ 
  console.log(error.message); 
}