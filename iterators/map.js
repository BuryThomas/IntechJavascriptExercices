function map(iterable,f){
    let iterator = iterable[Symbol.iterator]();
    return {
        next: function(){
            let result = iterator.next()
            return { done: result.done, value: result.done ? undefined : f(result.value) }
        }
    }
}
function getSequenceIterable(from, to) {
    return {
        [Symbol.iterator]: () => ({
            next() {
                return {
                    done: from > to,
                    value: from++,
                };
            }
        })
    };
}


const helloIterable = map("hello", v => v.toUpperCase());
const iterator = helloIterable[Symbol.iterator]();
assert.strictEqual(iterator.next().value, "H");
assert.strictEqual(iterator.next().value, "E");
assert.strictEqual(iterator.next().value, "L");
assert.strictEqual(iterator.next().value, "L");
assert.strictEqual(iterator.next().value, "O");
assert.strictEqual(iterator.next().done, true);