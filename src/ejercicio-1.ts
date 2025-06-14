class CabeceraPagina {
    private titulo: string;
    private color: string;
    private fuente: string;
    private alineacion: string;

    constructor() {
        this.titulo = "";
        this.color = "";
        this.fuente = "";
        this.alineacion = "";
    }

    // Primer método: establecer título, color y fuente
    establecerPropiedades(titulo: string, color: string, fuente: string): void {
        this.titulo = titulo;
        this.color = color;
        this.fuente = fuente;
    }

    // Segundo método: establecer alineación del título
    establecerAlineacion(alineacion: string): void {
        if (alineacion === "centrado" || alineacion === "derecha" || alineacion === "izquierda") {
            this.alineacion = alineacion;
        } else {
            console.log("Alineación no válida. Use: centrado, derecha o izquierda");
        }
    }

    // Tercer método: imprimir todas las propiedades
    imprimirPropiedades(): void {
        console.log("=== PROPIEDADES DE LA CABECERA ===");
        console.log(`Título: ${this.titulo}`);
        console.log(`Color: ${this.color}`);
        console.log(`Fuente: ${this.fuente}`);
        console.log(`Alineación: ${this.alineacion}`);
    }
}

// Ejemplo de uso
const cabecera = new CabeceraPagina();
cabecera.establecerPropiedades("Mi Página Web", "Azul", "Arial");
cabecera.establecerAlineacion("centrado");
cabecera.imprimirPropiedades();
