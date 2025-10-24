function fatorial(n) {
    if (n < 0) {
        return "Erro";
    }
    if (n === 0 || n === 1) {
        return 1;
    }
    return n * fatorial(n - 1);
}


console.log(fatorial(5)); // 120
console.log(fatorial(0)); // 1
console.log(fatorial(1)); // 1
console.log(fatorial(7)); // 5040
