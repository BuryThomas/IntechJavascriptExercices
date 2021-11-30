const {assert} = require("chai");

function compose(fct1, fct2) {
    return value => fct2(fct1(value));
}

const fct1 = e => e+1;
const fct2 = e => e*2;
const highFct = compose(fct1, fct2);

assert.deepEqual(highFct(5), 12);