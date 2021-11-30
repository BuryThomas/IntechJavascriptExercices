const { toUnicode } = require("punycode");

function dump(obj){
    let str = "{";
    for(let [key,value] of Object.entries(obj)){
        str +=key+": "
        switch(typeof value){
            case "string":
                str +="'"+value+"', "
                break;
            case "object":
                str+="["+value+"], "
                break;
            default:
                str+=value
                break;
        }
        
    }
    str = str.slice(0,str.length-2)
    str += "}"
    return str
}

let obj = {};
obj.firstname = "Alan";
obj.lastname = "Turing";
obj.birthday = [1921, 6, 23];
console.log(dump(obj));