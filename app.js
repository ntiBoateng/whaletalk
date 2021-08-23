let input = 'turpentine and turtles';
const vowels = ['a','i','e','o','u'];
let resultArray = [];
for(var i=0;i<input.length;i++){
  //console.log('i is '+i);
  for(var j=0;j<vowels.length;j++){
    //console.log('j is '+j);
if(input[i]===vowels[j]){
console.log(resultArray.push(vowels[j]));
}
 }
       if (input[i] === 'e' || input[i] === 'u') {
  resultArray.push(input[i]);
}
  }

console.log(resultArray);
console.log(resultArray.join('').toUpperCase());