
/**
  
 * @param {string} char 
 * @param {string} str 
 * @param {int} quantity 
 * @returns {string}
 */
function padLeft(char,str,quantity){
    let result ="";
    if(str.length < quantity){ 
        while((result+= char).length + str.length < quantity);
        result += str
        
    }
    else result = str.slice(0,quantity)
    console.log(result.length)

    return result
}

console.log(padLeft("1","zebi",2))
console.log(padLeft("1","zebi",6))