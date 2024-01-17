function fibonacci(numero) {
    let fibArray = [];
    for (let i = 0; i < numero; i++) {
      if (i <= 1) {
        fibArray.push(i);
      } else {
        fibArray.push(fibArray[i - 1] + fibArray[i - 2]);
      }
    }
    return fibArray;
  }
  
  let numero;
  
  do {
    let input = prompt("Ingrese un número");
    numero = parseFloat(input);
  
    if (isNaN(numero)) {
      alert("Por favor, ingrese un número válido.");
    }
  } while (isNaN(numero));
  
  let resultadoFibonacci = fibonacci(numero);
  
  document.write(`Los primeros ${numero} números de la secuencia Fibonacci son: ${resultadoFibonacci.join(', ')}`);
  