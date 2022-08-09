import 'dart:io';

// Crio uma função somaTotal
String somaTotal(val) {
  val = int.parse(val);
  int soma = 0;

  // Aplicar Loop até encontrar valor informado
  for (int i = 0; i < val; i++) {

    // Verificar se o valor é dividendo por 3 ou 5
    if ((i % 3) == 0 || (i % 5) == 0) {
        
      // Caso o valor seja dividido aumento o valor do loop
      soma += i;
    }
  }
  return "A soma dos números múltiplos por 5 e 3 menores que " +
      val.toString() +
      " é " +
      soma.toString() +
      ".";
}

void main() {
  stdout.write("Digite um número inteiro: ");
  var val = stdin.readLineSync();

  stdout.write(somaTotal(val));
}
