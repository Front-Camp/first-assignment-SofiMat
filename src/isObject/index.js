/**
 * This function should return "true" only for "Object" type
 * @param {any} data - this can be any value: string, number, array, object, etc.
 * @return {boolean} result of the "isObject" function
 * @example
 * isObject({});   // true
 * isObject([]);   // false
 * isObject(null); // false
 */
const isObject = data => {
    for(var key in data){
  if(data instanceof Object && data.hasOwnProperty(key)){
      return true;
  }
    else{
        return false;
    }
    }
};

export default isObject;
