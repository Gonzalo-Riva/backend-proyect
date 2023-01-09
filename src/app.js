const express = require('express');
const ProductManager = require("./ProductManager");
// vamos al navegador en el link localhost:8080/saludo => "hola bienvenidos"

const server = express();
//localhost:8080/
const productManager = new ProductManager('./assets/Usuarios.json');

server.get('/products', async (req, res) => {
    const limit = req.query.limit;

    let products = await productManager.getProducts();
    if (limit !== undefined)
        products = products.slice(0, limit);

    res.send(products);

})

server.get('/products/:pid', async (req, res) => {
    const id = req.params.pid;

    let product = await productManager.getProductById(id);
    res.send(product === undefined ? "Error, el producto no existe." : product);
})

server.listen(8080, () => {
    console.log("servidor escuchando el puerto 8080")
})



