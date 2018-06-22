const fs = require('fs');

const yourAnswerFunctionComesHere = data => {
  console.log("---this is input data---")
  console.log(data);
  const splittedDataByLine = data.split("\n");
  const firstString = splittedDataByLine[0];
  const secondString = splittedDataByLine[1];

  console.log("---answer---")
  let tmpStr = firstString;
  let answer = 0;
  let tmpAns;
  for(let i = 0; i < firstString.length; i++) {
    if(firstString.indexOf(secondString, i) > -1) {
      answer = firstString.indexOf(secondString, i);
      if(i == answer) {
        console.log(answer);
      } 
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