// 9. Escreva uma função que recebe um número e retorna se ele é par ou ímpar

function parOuImpar(num) {
  return num % 2 === 0 ? 'Par' : 'Ímpar';
}

console.log('É par ou ímpar?', parOuImpar(7)); // Ímpar
