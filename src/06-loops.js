/**
 * rangeSum()
 * ---------------------
 * Takes in range (inclusive) and returns the sum of all numbers in that range.
 * @param {number} min
 * @param {number} max
 * @returns {number}
 *
 * EXAMPLE:
 *  rangeSum(3, 7);
 *  //> 25
 *  (3 + 4 + 5 + 6 + 7 = 25)
 */
function rangeSum(min, max) {    // GIGI EDIT :
  let answer = 0;                // let answer = 0
  for (i = min; i <= max; i++){  // for (let i = min; i <= max; i++) {
    answer += i                  // answer += i;
  }                              // }
  return answer;                 // return answer
}

/**
 * rangeOdd()
 * ---------------------
 * Takes in range (inclusive) and returns an array in decreasing order of only the odd numbers in that range.
 * @param {number} min
 * @param {number} max
 * @returns {number[]}
 *
 * EXAMPLE:
 *  rangeOdd(10, 15);
 *  //> [ 15, 13, 11 ]
 */
function rangeOdd(min, max) {
  let myArray = [];                 // let odd = []
  for (i = max; i >= min; --i){     // for(let i = max; i >= min; i--){
    if(i%2 !== 0){                  //  if (i % 2 !== 0) {
      myArray.push(i)               //    odd.push(i) 
    }                               //  }
  }                                 // }
  return myArray;                   // return odd; 
}

/**
 * rangeEveryOther()
 * ---------------------
 * Takes in range (inclusive) and returns an array in increasing order of only 
 * every other element. Start by including the first number.
 * @param {number} min
 * @param {number} max
 * @returns {number[]}
 *
 * EXAMPLE:
 *  rangeEveryOther(11, 18);
 *  //> [ 11, 13, 15, 17 ]
 */
function rangeEveryOther(min, max) {
  let myArray = [];                   // let everyOther = [];
  for (i = min; i <= max; i+=2){      // for (let i = min; i <= max; i+=2){
    myArray.push(i)                   //  everyOther.push(i);
  }                                   // }
  return myArray                      // return everyOther;
}

/**
 * containsWhileLoop()
 * ---------------------
 * Returns whether or not the `target` value exists in the array.
 *
 * NOTE: Must be written with a `while` loop.
 *
 * NOTE: Must NOT contain the `.includes()` method.
 *
 * @param {*[]} array
 * @param {number|string} target
 * @returns {boolean}
 *
 * EXAMPLE:
 *  containsWhileLoop([ 5, 2, 4 ], 4);
 *  //> true
 *
 *  containsWhileLoop([ "left", "up", "right" ], "down");
 *  //> false
 */
function containsWhileLoop(array, target) {
  while (array.indexOf(target) !== -1){       // let i = 0 
    return true;                              // while(i < array.length ){
  }                                           //    if (array[i] === target){
  return false;                               //      return true;
}                                             //    }
                                              //    i++;
                                              //  }
                                              // return false;
                                              // }

/**
 * containsForLoop()
 * ---------------------
 * Returns whether or not the `target` value exists in the array.
 *
 * NOTE: Must be written with a `for` loop.
 *
 * NOTE: Must NOT contain the `.includes()` method.
 *
 * @param {*[]} array
 * @param {number|string} target
 * @returns {boolean}
 *
 * EXAMPLE:
 *  containsForLoop([ 5, 2, 4 ], 4);
 *  //> true
 *
 *  containsForLoop([ "left", "up", "right" ], "down");
 *  //> false
 */
function containsForLoop(array, target) {
  for (i = 0; i < array.length; i++){     // for (let element of array){
    if (array[i] === target) {            //   if (element === target){
      return true;                        //     return true;
    }                                     //   }
  }                                       // }
  return false;                           // return false
}

/**
 * targetCount()
 * ---------------------
 * Returns how many times the `target` occurs in the array.
 * @param {*[]} array
 * @param {number|string} target
 * @returns {number}
 *
 * EXAMPLE:
 *  targetCount([ 10, 20, 10, 20, 30 ], 10);
 *  //> 2
 */
function targetCount(array, target) {
  let count = 0;

  for (i =0; i < array.length; i++){
    if (array[i] === target){
      count += 1;
    }
  }
  return count
}

/**
 * firstIndexFound()
 * ---------------------
 * Returns the first index that the `target` is found at in the array. If the `target` is not found, it should return `-1`.
 *
 * NOTE: You may NOT use the `.indexOf()` method.
 *
 * @param {*[]} array
 * @param {number|string} target
 * @returns {number}
 *
 * EXAMPLE:
 *  firstIndexFound([ "left", "right", "left" ], "left");
 *  //> 0
 *
 *  firstIndexFound([ "left", "right", "left" ], "up");
 *  //> -1
 */
function firstIndexFound(array, target) {
  while (array.indexOf(target) !== -1){       // for (let i=0; i < array.length; i++){
    return array.indexOf(target);             //   if array[i] == target{
  }                                           //     return i
  return -1;                                  //   }
}                                             // }
                                              // return -1
/**
 * lastIndexFound()
 * ---------------------
 * Returns the last index that the `target` is found at in the array. 
 * If the `target` is not found, it should return `-1`.
 *
 * NOTE: You may NOT use the `.indexOf()` method.
 *
 * @param {*[]} array
 * @param {number|string} target
 * @returns {number}
 *
 * EXAMPLE:
 *  lastIndexFound([ "left", "right", "left" ], "left");
 *  //> 2
 *
 *  lastIndexFound([ "left", "right", "left" ], "up");
 *  //> -1
 */
function lastIndexFound(array, target) {
  while (array.indexOf(target) !== -1){         // for (let i = array.length; i >= 0; i--){
    return array.lastIndexOf(target);           //    if (array[i] === target){
  }                                             //      return i
  return -1;                                    //    }
}                                               // }
                                                // return - 1

/**
 * timesIndex()
 * ---------------------
 * Returns a new array where each element has been multiplied by its index.
 * @param {number[]} elements
 * @returns {number[]}
 *
 * EXAMPLE:
 *  timesIndex([ 7, 10, 11 ]);
 *  //> [ 7 * 0, 10 * 1, 11 * 2 ]
 *  //> [ 0, 10, 22 ]
 */
function timesIndex(array) {
  let total = [];                         // let multipledNums = [];

  for (i = 0; i < array.length; i++){     // for (let i = 0; i < array.length; i++){
    total.push(array[i] * i);             //    multipledNums.push(array[i] * i)
  }                                       // }
  return total                            // return multipledNums
}

/**
 * cumulativeSum()
 * ---------------------
 * Returns a new array where each element is the cumulative sum in the array, up until that point.
 * @param {number[]} array
 * @returns {number[]}
 *
 * EXAMPLE:
 *  cumulativeSum([ 5, 2, 9 ]);
 *  //> [ 5, 5 + 2, 5 + 2 + 9 ]
 *  //> [ 5, 7, 16 ]
 */
function cumulativeSum(array) {
  let newArray = [array[0]];
  let emptyArray = [];
  
  if (!array.length) { 
    return emptyArray;
  } 
  
  for (i = 1; i < array.length; i++){
    newArray.push(array[i] + newArray[i - 1]);
  }
  return newArray;

  // GIGI Code:
  // if (!array.length) return [];
  //
  // let cumulativeNums = [array[0]];
  // for (let i = 1; i < array.length; i++) {
  //    cumulativeNums.push(array[i - 1] + array [i]);
  // };
  // return cumulativeNums

}

// Do not change anything below this line.
module.exports = {
  rangeSum,
  rangeOdd,
  rangeEveryOther,
  containsWhileLoop,
  containsForLoop,
  targetCount,
  firstIndexFound,
  lastIndexFound,
  timesIndex,
  cumulativeSum,
};
