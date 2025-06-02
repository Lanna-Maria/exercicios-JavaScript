// 5. Escreva uma função que receba um array de números e retorne apenas os números pares.

function numerosPares(arr) {
  return arr.filter((num) => num % 2 === 0);
}

console.log('Números pares:', numerosPares([1, 2, 3, 4, 5, 6])); // [2, 4, 6]
