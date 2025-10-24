function produto(...numeros){
    let p = 1;
    for (e of numeros){
        p = p * e;
    }
    return p;
}