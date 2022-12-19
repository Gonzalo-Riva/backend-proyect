class Usuario {
    constructor(nombre, apellido, libros, mascotas) {
        this.nombre = nombre
        this.apellido = apellido
        this.libros = libros
        this.mascotas = mascotas
    }
    getFullName() {
        return console.log(`${this.nombre} ${this.apellido}`)
    }
    addMascota(mascota) {
        this.mascotas.push(mascota)
    }
    countMascotas() {
        return console.log(this.mascotas.length)
    }
    addBook(nombre, autor) {
        this.libros.push({ nombre: nombre, autor: autor })
    }
    getBookNames() {
        const bookNames = []
        this.libros.forEach(libro => {
            bookNames.push(libro.nombre)
        })
        return console.log(bookNames)
    }
}

const usuario1 = new Usuario("Gonzalo", "Riva", [{ nombre: "Cementerio de animales ", autor: "Stephen King" }], ["Milo"])
usuario1.getFullName()
usuario1.addMascota("Reinhardt")
usuario1.countMascotas()
usuario1.addBook("El resplandor", "Stephen King")
usuario1.getBookNames()
