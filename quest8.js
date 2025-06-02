// 8. Escreva uma função que conte quantas vogais existem em uma string fornecida.

function contarVogais(str) {
  return (str.match(/[aeiouáéíóúàèìòùãõâêîôû]/gi) || []).length;
}

console.log('Quantidade de vogais:', contarVogais('Olá, mundo!')); // 4
