/**
 * 
 * @param {Object} source 
 * @param {Object} propertyNames 
 * @returns {}
 */

function diff(source , propertyNames){
    for(const item in propertyNames) delete source[item] 
    return source 
}
let source ={a:0,b:0,c:0,d:0}
let propertyNames={c:0, a:0}
console.log(diff(source,propertyNames))