// Write code inside the functions
// You will have to figure out what parameters to include
// All functions must use recursion

function lengthOfString(str, len = 0) {
  // If the length is 0 (base case), return len (0).
  // if (str.length === 0) return len;
  if (!str.length) return len;

  // Remove the first letter of the string
  let restOfString = str.substring(1);

  // Call function again, with updated string and len
  return lengthOfString(restOfString, ++len);
}

//Works
function sumOfArray(arr) {
  // This function returns the sum of all of the numbers in a given array.
  if (arr.length < 1) return 0 
  return arr.pop() + sumOfArray(arr);
}
console.log(sumOfArray([3, 4, 5, 6, 7]));

//works
function findMax(arr, i = 0, max =0) {
  // This function returns the largest number in a given array.
  if (i === arr.length) {
    return max
  } else {
    if (i === 0 && arr[i] < 0 && max ===0) {
        max =arr[i]
        return findMax(arr, i+1, max)
    } else {
        if (arr[i] > max) {
            max =arr[i]
            return findMax(arr, i+1, max)
            
        }
    }
  }
  
}
console.log(findMax([1,2,3,4,5]))

//works
function factorial(i) {
  // This function returns the factorial of a given number.
    if (i <= 1) {
        return 1
    }
    return i * factorial(i-1)
}
console.log(factorial(5))

//works
function fibonacci(n, count = 1, numOne = 1, numTwo = 1) {
  // This function returns the Nth number in the fibonacci sequence.
  // https://en.wikipedia.org/wiki/Fibonacci_number
  // For this function, the first two fibonacci numbers are 1 and 1
if (n === count) {
    return numOne
}
count += 1
return fibonacci(n, count, numTwo, numOne + numTwo)
}

function coinFlips(n) {
  // This function returns an array of all possible outcomes from flipping a coin N times.
  // Input type: Integer
  // For example, coinFlips(2) would return the following:
  // ["HH", "HT", "TH", "TT"]
  // H stands for Heads and T stands for tails
  // Represent the two outcomes of each flip as "H" or "T"
  if (n <= 0) {
    return ['']
  } else {
    const prev = coinFlips (n - 1)
    return [...prev .map (r => 'H' + r), ...prev .map (r => 'T' + r)]
  }
  
}
//copied from stack over flow
console.log(coinFlips(3))

function letterCombinations(arr = [x,y,z]) {
  // This function returns an array of all combinations of the given letters
  // Input type: Array of single characters
  // For example, letterCombinations(["a","b","c"]) would return the following:
  // ["a","b","c","ab","ac","ba","bc","ca","cb","abc","acb","bac","bca","cab","cba"]
    let result = []
    function comboLetters(letters, arr) {
    if (i == 0, arr.length)  {
        count ++
        result.push(letters + arr[i])
        comboLetters(letters + arr[i], arr.slice(i + 1))

    }
}
comboLetters('', arr)
return result
}
console.log(result)

module.exports = {
  lengthOfString,
  sumOfArray,
  findMax,
  factorial,
  fibonacci,
  coinFlips,
  letterCombinations,
};