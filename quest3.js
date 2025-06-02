// 3. Calcule o fatorial de um número passado por uma função.

function fatorial(n) {
  if (n === 0 || n === 1) return 1;
  return n * fatorial(n - 1);
}

console.log('Fatorial:', fatorial(5)); // 120
