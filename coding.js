// 1)Display numbers rom 1 to 10
const numberTen = [];
for(let i = 1; i <= 10; i++) {
numberTen.push(i);
};
console.log(numberTen)


//2)Print odd numbers less than 100
const oddNumbers = [];
for( let i = 0; i < 100; i+=2){
  oddNumbers.push(i);
};
console.log(oddNumbers);


//3)Print the multiplication tanle whith 7
const numMultiplication = 7;
for( let i = 0; i <= 10; i++){
  console.log(numMultiplication + '*' + i + '=' + numMultiplication*i);
};


//4)Print the multiplication table from 1 to 10.
for(let i = 0; i <= 10; i++){
  for(let v = 0; v <= 10; v++){
    console.log(i + '*' + v + '=' + i*v);
  }
};


//5)Calculate the sum of numbers from 1 to 10
const numbersSumTen = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const reduce = numbersSumTen.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;});
console.log('The sum of numbers from 1 to 10 is ' + reduce);


// 6)Calculate the 10!
const factorial = num => {
  if(num === 0 || num === 1){
    return 1;
  }else {
    return num * factorial(num-1);
  }
};
console.log(factorial(10));


//7)Calculate the sum of odd numbers from 10 to 30
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
};
console.log('The sum of odd numbers from 10 to 30 in ' + total);


//8)Calculate the sum of numbers in an array of numbers
const sumOfNumbers = [3, 7, 1, 65, 49, 71,];
const totalSumOfNumbers = sumOfNumbers.reduce((accumulator, currentValue) =>{
  return accumulator + currentValue;
});
console.log('The sum of numbers in this array is ' + totalSumOfNumbers);


//9)Calculate the average of the munbers in an array.
const myArray = [4, 7, 18, 44, 72, 84];
const averageOfmyArray = myArray.reduce((accumulator, currentValue) =>{
  return (accumulator + currentValue) / myArray.length;
});
console.log('The average of the numbers in my array is  ' + averageOfmyArray);


//10)Create a function that recives an array of numbers and returns an array containing only the positive  numbers.
const originArray = ['1', '-4', '-7', '9', '-22', '42', '64', '-77', '82'];
const positiveArray = originArray.filter( originArray =>{
  return originArray > 0 ;
});
console.log(positiveArray);


//11)Find the maximum number in an array of numbers
const findMaxNumber = ['33', '62', '79', '5', '9', '37', '4'];
const maxNumber = findMaxNumber.reduce((accumulator, currentValue) =>{
  return Math.max(accumulator, currentValue);
});
console.log('The maximum number in ' + findMaxNumber + ' array is ' + maxNumber);


//12)Create a function that will return a Boolean specifying if a number is prime.
const primeNumber = n =>{
    for(let i = 2; i < n; i++){
      if(n % i === 0){
        return false;
      }
    }return true;
  };
console.log(primeNumber(2));


//13)Calculate the sum of digits of a positive integer number.
const sumOfDigits = positive =>{
  return positive % 10 + Math.floor(positive/10);
}
console.log(sumOfDigits(66));

//14)Print the first 100 prime numbers
const firstOneHundred = [];
for(i = 0; i <= 100; i++){
  firstOneHundred.push(i);
}
function getPrime(firstOneHundred){
  return firstOneHundred.filter(function(val){
    for(let v = 2; v < val; v++){
      if(val%v === 0){
        return false;
      }
    } return val>1;
  });
}
getPrime(firstOneHundred)
console.log('The first 100 prime numbers are ' + getPrime(firstOneHundred));


//15)Rotate an array to the left 1 position.
const arr = [6, 4, 2, 9];
const rotateLeft = arr =>{
  let left = arr.shift();
  arr.push(left);
  return arr;
};
console.log(rotateLeft(arr));


//16)Reverse an array
const reverseArray = [2,5,8];
const resultReverse = reverseArray.reverse();
console.log(resultReverse);

//17)Create a function that will merge two arrays and return the result as a new array
const array1 = [8, 5, 9, 44,];
const array2 = ['Barcelona', 'Chisinau'];
const mergeArrays = [].concat(array1, array2);
console.log(mergeArrays);


//18)Create a function that will receive two arrays of numbers as arguments and return an array composed of all the numbers that are either in the first array or second array but not in both
const arrNum1 = [3, 7, 10, 66];
const arrNum2 = [3, 4, 7, 89, 10];


//19)Create a function that will receive an array of numbers as argument and will return a new array with distinct elements
const distinctElements = [3, 6, 6, 9, 22, 3];
const resultDistinct = distinctElements =>{
  return [...new Set(distinctElements)];
} 
resultDistinct(distinctElements);
console.log(resultDistinct(distinctElements));


//20) Create a function that will return the number of words in a text
function  words(text){
return text.split(' ').length;
};
console.log(words('Create a function that will return the number of words in a text!'));


























