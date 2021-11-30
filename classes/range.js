class Range {
    // Initialise l'objet
    #from
    #to
    constructor(from, to){
        this.#from= from
        this.#to = to
    }

    // Dit si `x` tombe dans l'interval [from; to]
    includes(x) {
        return this.#from <= x && x <= this.#to;
    };

    // Produit une chaîne de caractère sous la forme "(from...to)", par exemple "(2...8)"
    toString(){ return "("+ this.#from+"..."+this.#to+")"}

    // Analyse une chaîne de caractère au format "(from...to)" et retourne une nouvelle instance
    static parse(s) {
        return new Range(s.slice(1,5),s.slice(8,10))
    }

    // RegExp pour analyser la chaîne avec parse
    static integerRangePattern;
}

class Span {
    constructor(from,to){
        this.from = from 
        this.to = to
    }

}
Object.setPrototypeOf(Span.prototype,Range)
new Span(2,4).toString()
new Span(12, -8).toString()