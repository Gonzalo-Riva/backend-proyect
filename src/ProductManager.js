const fs = require('fs');


class ProductManager {
    //path

    constructor(path) {
        this.path = path
    }

    addProduct = async (title, description, price, thumbnail, code, stock) => {
        let data // para no repetir toda la linea de writeFile, establezco en una variable auxiliar la información a guardar

        if (fs.existsSync(this.path)) {
            const response = await this.getProducts() // 'array' con todos los productos
            response.push({ id: 0, title, description, price, thumbnail, code, stock }) // añade el nuevo producto
            data = response.map((item, index) => { return { ...item, id: index } })
        } else {
            data = [{ id: 0, title, description, price, thumbnail, code, stock }]
        }


        await fs.promises.writeFile(this.path, JSON.stringify(data, null, 2))
    }

    getProducts = async () => {
        const response = await fs.promises.readFile(this.path, { encoding: 'utf8' })
        return JSON.parse(response)
    }

    getProductById = async (id) => {
        const { products } = await this.getProducts();

        return products.find(p => p.id == id);
    }

    deleteProduct = async (id) => {
        const response = await this.getProducts()

        const objWithIdIndex = response.findIndex((obj) => obj.id === id);

        if (objWithIdIndex > -1) {
            response.splice(objWithIdIndex, 1);
        }

        await fs.promises.writeFile(this.path, JSON.stringify(response, null, 2))
    }

    updateProduct = async (id, object) => {
        let response = await this.getProducts();
        const index = response.findIndex((item) => item.id === id);
        response[index] = Object.assign(response[index], object);
        await fs.promises.writeFile(this.path, JSON.stringify(response, null, 2))
    }


}
module.exports = ProductManager;
/*

const productManager = new ProductManager('./assets/Usuarios.json');

const addProducts = async () => {
    await productManager.addProduct("Remera", "Mclovin", 59.99, "https://url.com/img.png", "na8182m3", 100)
    await productManager.addProduct("Buzos", "Buzo marca Mclovin", 29.99, "https://url.com/img.png", "na8182m3", 1);
    await productManager.addProduct("Campera", "La campera que uso Mclovin en rusia", 159.99, "https://url.com/img.png", "na8182m3", 2);
    await productManager.addProduct("Pie de oro de Lionel Andres Messi Cuccittini, AKA 'The Flea'", "Replica de la mejor zurda", 5, "https://static.wikia.nocookie.net/muchalucha/images/1/12/MLTheFlea.png/revision/latest?cb=20221117023138", "na8182m3", 5);
    // await productManager.deleteProduct(2);
    console.log(await productManager.getProductById(1))
    await productManager.updateProduct(1, { description: "Nueva descripcion" })
}

addProducts()*/

