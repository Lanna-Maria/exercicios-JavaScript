// 13. Desenvolva uma função que implemente um cronômetro simples, contando segundos e exibindo o resultado no console.

function iniciarCronometro(segundos) {
  let contador = 0;
  const intervalo = setInterval(() => {
    console.log(`${contador} segundo(s)`);
    contador++;
    if (contador > segundos) clearInterval(intervalo);
  }, 1000);
}

iniciarCronometro(5); // Mostra no console de 0 a 5 segundos
