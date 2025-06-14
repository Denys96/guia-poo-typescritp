class Cancion {
    // Atributos privados: solo accesibles desde dentro de la clase
    private titulo: string;
    private genero: string;
    private autor: string;

    // Constructor que recibe el título y el género de la canción
    constructor(titulo: string, genero: string) {
        this.titulo = titulo;
        this.genero = genero;
        this.autor = ""; // Se inicializa vacío
    }

    // Getter: devuelve el valor del autor
    get getAutor(): string {
        return this.autor;
    }

    // Setter: permite asignar un valor al autor
    set setAutor(autor: string) {
        this.autor = autor;
    }

    // Método que imprime todos los datos de la canción
    mostrarDatos(): void {
        console.log("=== DATOS DE LA CANCIÓN ===");
        console.log(`Título: ${this.titulo}`);
        console.log(`Género: ${this.genero}`);
        console.log(`Autor: ${this.autor}`);
    }
}

// Ejemplo de uso:
const cancion = new Cancion("Bohemian Rhapsody", "Rock");
cancion.setAutor = "Queen"; // Establecer autor con set
console.log(`Autor obtenido: ${cancion.getAutor}`); // Obtener autor con get
cancion.mostrarDatos(); // Mostrar todos los datos
