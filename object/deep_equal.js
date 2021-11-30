function deepEqual(obj1, obj2) {
    if (obj1 === obj2) return true;
    else if (isObject(obj1) && isObject(obj2)) {
      if (Object.keys(obj1).length !== Object.keys(obj2).length) return false
      for (let prop in obj1) {
        if (!deepEqual(obj1[prop], obj2[prop]))return false      
      }
      return true;
    }
}

function isObject(obj) {
    return typeof obj === "object" && obj != null
}

const obj1 = [1, 2, [3, 4], 5];
const obj2 = JSON.parse(JSON.stringify(obj1)); // Deep copy
obj1 === obj2; // => false
console.log(deepEqual(obj1, obj2)); // => true
