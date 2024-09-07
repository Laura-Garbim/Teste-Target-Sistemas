function isFibonacci(num) {
    let a = 0, b = 1;
    while (b < num) {
        let temp = a;
        a = b;
        b = temp + b;
    }
    return b === num;
}

let number = parseInt(prompt("Digite um número:"));
if (isFibonacci(number)) {
    console.log(`${number} pertence à sequência de Fibonacci.`);
} else {
    console.log(`${number} não pertence à sequência de Fibonacci.`);
}
