/**
* This function should return max number in array
* @param {Array} arr - this is an array of numbers
* @return {number} - max number in array
* @example
* max([1, 2, 4]); // 4
* max([-1, 0]);   // 0
*/

const max = arr => {
    for(var i=0; i<arr.length; i++)
        {
            if(!isNaN(arr[i]) && arr[i]!= Infinity && arr[i]!= -Infinity){
                return Math.max(arr);
            }
            else{
                return 1;
            }
        }
    
};

export default max;
