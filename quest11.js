// 11. Crie uma função que receba dois números e um operador (+, -, *, /) e retorne o resultado da operação.

function calcular(a, b, operador) {
  switch (operador) {
    case '+':
      return a + b;
    case '-':
      return a - b;
    case '*':
      return a * b;
    case '/':
      return b !== 0 ? a / b : 'Erro: divisão por zero';
    default:
      return 'Operador inválido';
  }
}

console.log('Resultado da operação:', calcular(10, 2, '/')); // 5
