function memoize(n) {
    let map = new Map()
    
    if(map.has(n)) return map.get(n)
}

// Définition classique pas memoize-able (car elle se rappelle elle-même sans
//                                        possibilité de regarder dans le cache).
function fibonacci(n) {
    if (n === 0 || n === 1) return n;
    else return fibonacci(n - 1) + fibonacci(n - 2);
}

// Définition memoize-ée (car elle appelle fibonacci_m qui aura l'occasion
//                        de regarder dans le cache avant de rappeller la fonction.)
const fibonacci_m = memoize(function (n) {
    if (n === 0 || n === 1) return n;
    else return fibonacci_m(n - 1) + fibonacci_m(n - 2);
});

fibonacci(35);
fibonacci_m(35);