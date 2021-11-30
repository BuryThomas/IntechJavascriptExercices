function startWith(str,start){
   return str.substring(0,start.length)=== start
}

console.log(startWith("starterpack","start"))
console.log(startWith("notastarterpack","start"))