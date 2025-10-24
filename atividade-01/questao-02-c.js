function notaFinal(n1, n2){
    let nota1 = n1*2
    let nota2 = n2*3
    final = (nota1+nota2)/5
    console.log("Sua nota final é: " + final)
    if (final>=7){
        console.log("Aprovado!")
    }
    else{
        console.log("Reprovado!")
    }
}