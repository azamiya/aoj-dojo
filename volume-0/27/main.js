let fs = require('fs');

const dayNames = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];

const convertDataToDate = data => {
  let date = "2004/" + data[0] + "/" + data[1];
  const d = new Date(date);
  const day = d.getDay();
  console.log(dayNames[day]);
  return dayNames[day];
}

const yourAnswerFunctionComesHere = data => {
  console.log(data);

  const splittedDataByLine = data.split("\n");
  let dataArray = splittedDataByLine.map(elem => elem.split(" "));

  //digitize each data
  dataArray = dataArray.map(datas => datas.map(elem => Number(elem)));
  dates = dataArray.map(data => {
    if(data[0]) {
      return convertDataToDate(data);
    } else {
      return "endline";
    }
  });
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