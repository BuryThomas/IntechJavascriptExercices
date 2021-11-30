//TODO : gérer les séparateurs a plusieur charactère
const {assert} = require("chai")
/**
 * @param {string} str 
 * @param {string} sep 
 * @returns {string{}}
 */

function split(str,sep){
    let arr=[];
    let temp ="";
    let i = 0;
    let length = str.length-1
    while( i <= length){        
        if(str.substring(i,i+sep.length) !== sep)temp += str[i]
        if(str.substring(i,i+sep.length) === sep || i  === length ) {
            arr.push(temp)
            temp=""
        }   
        i++
    }    
    return arr;
}
console.log(split("la chaine a split"," "))
console.log(split("la chaine a split","split"))