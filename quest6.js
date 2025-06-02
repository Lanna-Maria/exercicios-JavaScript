// 6. Escreva uma função que receba um array de números e retorne o maior número presente no array.

function maiorDoArray(arr) {
  return Math.max(...arr);
}

console.log('Maior do array:', maiorDoArray([5, 9, 2, 15, 3])); // 15
