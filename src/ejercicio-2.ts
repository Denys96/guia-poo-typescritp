class Calculadora {
    
    sumar(a: number, b: number): void {
        const resultado = a + b;
        console.log(`${a} + ${b} = ${resultado}`);
    }

    restar(a: number, b: number): void {
        const resultado = a - b;
        console.log(`${a} - ${b} = ${resultado}`);
    }

    multiplicar(a: number, b: number): void {
        const resultado = a * b;
        console.log(`${a} × ${b} = ${resultado}`);
    }

    dividir(a: number, b: number): void {
        if (b === 0) {
            console.log("Error: No se puede dividir entre cero");
        } else {
            const resultado = a / b;
            console.log(`${a} ÷ ${b} = ${resultado}`);
        }
    }

    potencia(base: number, exponente: number): void {
        const resultado = Math.pow(base, exponente);
        console.log(`${base}^${exponente} = ${resultado}`);
    }

    factorial(n: number): void {
        if (n < 0) {
            console.log("Error: No se puede calcular el factorial de un número negativo");
        } else if (n === 0 || n === 1) {
            console.log(`${n}! = 1`);
        } else {
            let resultado = 1;
            for (let i = 2; i <= n; i++) {
                resultado *= i;
            }
            console.log(`${n}! = ${resultado}`);
        }
    }
}

// Ejemplo de uso
const calc = new Calculadora();
console.log("=== CALCULADORA ===");
calc.sumar(10, 5);
calc.restar(10, 5);
calc.multiplicar(10, 5);
calc.dividir(10, 5);
calc.potencia(2, 3);
calc.factorial(5);