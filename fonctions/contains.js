const assert = require('assert');
/**
 * 
 * @param {*} haystack 
 * @param {*} needle 
 * @param {*} start 
 * @returns 
 */
function contains(haystack, needle, start) {
    for (let i = start === undefined ? 0 : start; i < haystack.length; i++) {
        if (haystack[i] === needle[0]) {
            for (let j = i; j - i < needle.length; j++) {
                if (haystack[j] !== needle[j - i]) break;
                else if (j - i === needle.length - 1) {
                    return i;
                }
            }
        }
    }
    return -1;
}


let test = contains("je suis aussi beau que Joseph", "Jos");
assert.deepEqual(test, 23);
console.log(test);