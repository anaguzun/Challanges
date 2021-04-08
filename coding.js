// Display numbers rom 1 to 10
const numberTen = [];
for(let i = 1; i <= 10; i++) {
numberTen.push(i);
}
console.log(numberTen)


//Print odd numbers less than 100
const oddNumbers = [];
for( let i = 0; i < 100; i+=2){
  oddNumbers.push(i);
}
console.log(oddNumbers);


//print the multiplication tanle whith 7
const numMultiplication = 7;
for( let i = 0; i <= 10; i++){
  console.log(numMultiplication + '*' + i + '=' + numMultiplication*i);
}


//print the multiplication table from 1 to 10.
for(let i = 0; i <= 10; i++){
  for(let v = 0; v <= 10; v++){
    console.log(i + '*' + v + '=' + i*v);
  }
};


//calculate the sum of numbers from 1 to 10
const numbersSum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const reduce = numbersSum.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;})
console.log('The sum of numbers from 1 to 10 is ' + reduce);


// calculate the 10!
const factorial = num => {
  if(num === 0 || num === 1){
    return 1;
  }else {
    return num * factorial(num-1);
  }
};
console.log(factorial(10));


//calculate the sum off odd numbers from 10 to 30
// Not sure whitch method is better to use on this condition, this one ->
const sumOddNumbers = [];
for(let i = 10; i <30; i+=2){
sumOddNumbers.push(i)
}
const totalOddNumbers = sumOddNumbers.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 10);
console.log('The sum of odd numbers from 10 to 30 is'   + totalOddNumbers);

// -> or  this one ???
let total = 10;
for( let i = 10; i <30; i+=2){
total = total + i;
}
console.log('The sum of odd numbers from 10 to 30 in ' + total);


//calculate the average of the munbers in an array.
const myArray = [4, 7, 18, 44, 72, 84];
const averageOfmyArray = myArray.reduce((accumulator, currentValue) =>{
  return (accumulator + currentValue) / myArray.length;
});
console.log('The average of the numbers in my array is  ' + averageOfmyArray);


//calculate a function that recives an array of numbers and returns an array containing only the positive  numbers.
const originArray = [1, -4, -7, 9, -22, 42, 64, -77, 82];
const positiveArray = originArray.filter( originArray =>{
  return originArray > 0 ;
});
console.log(positiveArray);


//Find the maximum numbers number in an array of numbers


