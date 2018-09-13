/**
 * This function should return values of first two elements which sum equals to "base" parameter
 *
 * @param {Array<number>} arr - the an array of numbers
 * @param {number} base - the sum of two elements of array
 * @return {Array<number>} - should return an array of values
 * @example
 * twoSums([1, 2, 4], 3); // [1, 2]
 * twoSums([5, 9, 3], 12); // [9, 3]
 */
const twoSums = (arr, base) => {
  for(var i=0; i<arr.length; i++){
      var sum = arr[i]+arr[i+1];
      if(sum == base){
          var arr2 = [];
          arr2.push(arr[i]);
arr2.push(arr[i+1]);
          return arr2;
      }
  }
};

export default twoSums;
