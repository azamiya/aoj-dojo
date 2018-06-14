var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var Arr=(input.trim()).split(" ").map(Number);
Arr.sort(function(a,b){return b-a;});
console.log(Arr.join(" "));