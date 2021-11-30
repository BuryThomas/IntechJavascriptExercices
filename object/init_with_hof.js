function initWith(action){
    return value => action(value)
}
/*
let arr =[]
    for(let i =0; i < size ; i++) arr.push(f(i))
*/
const withZero = () => 0;
const fromZero = index => index;
const initWithZeros = initWith(/* ??? */);
const initFrom = initWith(/* ??? */);

initWithZeros(3); // [0, 0, 0]
initFrom(3, 42); // [42, 43, 44]
