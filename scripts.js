//Day 5
//1.Anonymous Function
//a. Print odd numbers in an array

var odd = function () {
  array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  var result = array.filter((number) => number % 2 != 0);
  return result;
};
console.log(odd());

//b. Convert to all the string to title caps in an string array
var titlecase = function () {
  let str = "GEEKS FOR GEEKS";
  str = str.toLowerCase().split(" ");
  for (var i = 0; i < str.length; i++) {
    str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
  }
  return str.join(" ");
};
console.log(titlecase());

//c. Sum of all numbers in an array
var ourArray = function () {
  let Array = [1, 4, 8, 9];
  let sum = 0;
  for (let i = 0; i < Array.length; i += 1);
  return (sum += Array());
};
console.log(Array());

//d. Return all the prime numbers in array
var prime = function () {
  var num = 20;
  for (let i = 2; i * i <= num; i++) if (num % i === 0) return false;
  return num > 1;
};
console.log(prime());

//e.Return all the palindromes in an array
var palindromes = function () {
  var str = "noon";
  return str == str.split("").reverse().join("");
};

console.log(palindromes());

//g.Remove  duplicates from an array

var arr = function () {
  fruits = ["apple", "mango", "apple", "orange", "mango", "mango"];
  return fruits.filter((item, index) => fruits.indexOf(item) === index);
};

console.log(arr());

//2. IIFE function

//a. Print odd numbers in an array Arrow function
(function (oddNumber) {
  let array = [11, 22, 33, 44, 55, 66, 77, 88, 99];
  for (var i = 0; i < array.length; i++) {
    if (array[i] % 2 != 0) console.log(array[i]);
  }
})();

//b. Convert to all the string to title caps in an string array

(function (titlecase) {
  let str = "GEEKS FOR GEEKS";
  str = str.toLowerCase().split(" ");
  for (var i = 0; i < str.length; i++) {
    str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
  }
  return str.join(" ");
});
console.log(titlecase());

//c. Sum of all numbers in an array
(function (ourArray) {
  let Array = [1, 4, 8, 9];
  let sum = 0;
  for (let i = 0; i < Array.length; i += 1);
  return (sum += Array());
});
console.log(Array());

//d. Return all the prime numbers in array
(function (prime) {
  var num = 20;
  for (let i = 2; i * i <= num; i++) if (num % i === 0) return false;
  return num > 1;
});
console.log(prime());

//e.Return all the palindromes in an array
(function (palindromes) {
  var str = "noon";
  return str == str.split("").reverse().join("");
});

console.log(palindromes());

//g.Remove  duplicates from an array

(function (fruits) {
  var arr = ["apple", "mango", "apple", "orange", "mango", "mango"];
  return arr.filter((item, index) => arr.indexOf(item) === index);
});
console.log(arr());

//3. Arrow function

//a. Print odd numbers in an array Arrow function
var oddNumber = () => {
  let array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  for (var i = 0; i < array.length; i++) {
    if (array[i] % 2 != 0) console.log(array[i]);
  }
};
oddNumber(array);
//b. Convert to all the string to title caps in an string array
var titlecase = () => {
  let str = "GEEKS FOR GEEKS";
  str = str.toLowerCase().split(" ");
  for (var i = 0; i < str.length; i++) {
    str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
  }
  return str.join(" ");
};
console.log(titlecase());

//c. Sum of all numbers in an array
var ourArray = () => {
  let Array = [1, 4, 8, 9];
  let sum = 0;
  for (let i = 0; i < Array.length; i += 1);
  return (sum += Array());
};
console.log(Array());

//d. Return all the prime numbers in array
var prime = () => {
  var num = 20;
  for (let i = 2; i * i <= num; i++) if (num % i === 0) return false;
  return num > 1;
};
console.log(prime());

//e.Return all the palindromes in an array
var palindromes = () => {
  var str = "noon";
  return str == str.split("").reverse().join("");
};

console.log(palindromes());
