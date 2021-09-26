function sequence(start = 0, step = 1) {
    someNum = start;
    return (function() {
        return someNum += step;
    })
}

let gen1 = sequence(5);
let gen2 = sequence(1, 2);
let gen3 = sequence(5, 5);
console.log(gen1());
console.log(gen2());
console.log(gen3());
console.log(gen1());
console.log(gen2());
console.log(gen3());
