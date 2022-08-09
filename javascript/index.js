// Readline importado para javascript
const readline = require("readline")
const cmd = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

function somaTotal(valor) {
// Converter o valor passado para inteiro
    const valorInf = parseInt(valor);

// Valor inicial da soma
    let soma = 0;

/* Faço um loop até o valor informado, depois verifico se o valor é dividendo por 3 ou 5, caso o valor seja, 
acrescento o valor atualdo loop */
    for (let i = 0; i < valorInf; i++) {
        if (!(i % 3) || !(i % 5)) { 
            soma += i;
        }
    }
// Resultado da soma
    return soma;
}


// Inicio um Readline para poder captar o número informado, moostro o resultado com console.log e fecho a Readline
cmd.question("Digite um número inteiro:", function(val) {
    const res = somaTotal(val)
    console.log(
        "A soma de todos os números múltiplos por 5 e 3 menores que " + val + " é " + res + "."
    )
    cmd.close()
});