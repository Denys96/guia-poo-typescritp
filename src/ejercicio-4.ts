class Cuenta {
    private nombre: string;
    private cantidad: number;
    private tipoCuenta: string;
    private numeroCuenta: string;

    constructor(nombre: string, cantidad: number, tipoCuenta: string, numeroCuenta: string) {
        this.nombre = nombre;
        this.cantidad = cantidad;
        this.tipoCuenta = tipoCuenta;
        this.numeroCuenta = numeroCuenta;
    }

    // Ahora depositar recibe un valor
    depositar(valor: number): void {
        if (valor < 5.00) {
            console.log("El valor a depositar debe ser mayor a $5.00");
        } else {
            this.cantidad += valor;
            console.log(`Se ha depositado correctamente $${valor.toFixed(2)}`);
        }
    }

    retirar(valor: number): void {
        if (valor < 5.00) {
            console.log("El valor a retirar debe ser mayor a $5.00");
        } else if (this.cantidad < valor) {
            console.log("No hay suficiente efectivo en la cuenta");
        } else {
            this.cantidad -= valor;
            console.log(`Ha retirado $${valor.toFixed(2)}`);
            console.log(`Su saldo restante es: $${this.cantidad.toFixed(2)}`);
        }
    }

    mostrarDatos(): void {
        console.log("=== DATOS DE LA CUENTA ===");
        console.log(`Nombre: ${this.nombre}`);
        console.log(`Tipo de cuenta: ${this.tipoCuenta}`);
        console.log(`Número de cuenta: ${this.numeroCuenta}`);
        console.log(`Saldo actual: $${this.cantidad.toFixed(2)}`);
    }
}

// Ejemplo de uso
const cuenta = new Cuenta("Juan Pérez", 100.00, "Ahorros", "12345678");
cuenta.depositar(10.00);   // Bien
cuenta.depositar(3.00);    // Error: menor a $5
cuenta.mostrarDatos();
cuenta.retirar(30.00);     // Bien
cuenta.retirar(3.00);      // Error: menor a $5
cuenta.mostrarDatos();
