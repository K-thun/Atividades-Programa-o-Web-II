function primos(numeros) {
    let soma = 0;
    for (let e of numeros) {
        let primo = true;
        if (e < 2) primo = false;
        for (let i = 2; i <= Math.sqrt(e); i++) {
            if (e % i === 0) {
                primo = false;
                break;
            }
        }

        if (primo) {
            soma += e;
            console.log(e); 
        }
    }
    console.log("Soma dos números primos: " + soma);
}

