function partial(f,...args){
    return function(...innerArgs){
        return f(...args,...innerArgs)
    }
}

const f = (x,y,z) => x*(y-7);