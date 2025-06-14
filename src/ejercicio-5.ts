// Clase abstracta Persona, no se puede crear directamente, sirve como base para otras clases
abstract class Persona {
    // Atributos protegidos para que solo puedan usarse en esta clase y sus hijas
    protected nombre: string;
    protected apellido: string;
    protected direccion: string;
    protected telefono: string;
    protected edad: number;

    // Constructor que recibe los datos personales para inicializar la clase
    constructor(nombre: string, apellido: string, direccion: string, telefono: string, edad: number) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.direccion = direccion;
        this.telefono = telefono;
        this.edad = edad;
    }

    // Método para verificar si la persona es mayor de edad o no
    verificarMayoriaEdad(): void {
        if (this.edad >= 18) {
            console.log(`${this.nombre} es mayor de edad (${this.edad} años)`);
        } else {
            console.log(`${this.nombre} es menor de edad (${this.edad} años)`);
        }
    }

    // Método abstracto: no tiene cuerpo aquí, debe implementarse en las clases hijas
    abstract mostrarDatos(): void;
}

// Clase Empleado que hereda de Persona
class Empleado extends Persona {
    // Atributo privado sueldo, solo accesible dentro de esta clase
    private sueldo: number;

    // Constructor que llama al constructor de la clase padre y además inicializa el sueldo en 0
    constructor(nombre: string, apellido: string, direccion: string, telefono: string, edad: number) {
        super(nombre, apellido, direccion, telefono, edad);
        this.sueldo = 0;
    }

    // Método para cargar el sueldo, con validación para evitar números negativos
    cargarSueldo(sueldo: number): void {
        if (sueldo < 0) {
            console.log("El sueldo no puede ser negativo.");
            return; // Sale del método si el sueldo es inválido
        }
        this.sueldo = sueldo;
        console.log(`Sueldo cargado: $${this.sueldo.toFixed(2)}`);
    }

    // Método para imprimir el sueldo actual
    imprimirSueldo(): void {
        console.log(`El sueldo del empleado es: $${this.sueldo.toFixed(2)}`);
    }

    // Implementación obligatoria del método abstracto para mostrar todos los datos
    mostrarDatos(): void {
        console.log("=== DATOS DEL EMPLEADO ===");
        console.log(`Nombre completo: ${this.nombre} ${this.apellido}`);
        console.log(`Dirección: ${this.direccion}`);
        console.log(`Teléfono: ${this.telefono}`);
        console.log(`Edad: ${this.edad} años`);
        console.log(`Sueldo: $${this.sueldo.toFixed(2)}`);
    }
}

// Ejemplo de uso: crear un empleado y usar sus métodos
const empleado = new Empleado("María", "González", "Calle Principal #123", "555-1234", 25);
empleado.verificarMayoriaEdad();    // Muestra si es mayor o menor de edad
empleado.cargarSueldo(1500.00);     // Asigna el sueldo (valida que no sea negativo)
empleado.imprimirSueldo();           // Muestra el sueldo
empleado.mostrarDatos();             // Muestra todos los datos del empleado
