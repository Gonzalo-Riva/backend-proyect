const { response } = require("express");
const ProductManager = require("../ProductManager");
const pm = new ProductManager("./src/assets/Usuarios.json");


const getProducts = async (req, res) => {
    const { limite: limite = "" } = req.query
    if (!limite) {
        let productos = await pm.getProducts();
        res.json(productos)
    } else {
        let productos = await pm.getProducts(limite);
        res.json(productos)
    }
};

const getProductById = async (req, res) => {
    const id = req.params.pid
    let producto = await pm.getProductById(id);
    if (!producto) {
        res.status(producto.status).send(producto)
    } else {
        res.json(producto)
    }
}

const addProduct = async (req, res) => {
    const body = req.body
    const products = await pm.addProduct(body);
    if (products.error) {
        res.status(products.status).send(products)
    } else {
        res.json(products)
    }
}

const updateProduct = async (req, res) => {
    const body = req.body
    const id = +req.params.pid
    const update = await pm.updateProduct(id, body);
    if (update.error) {
        res.status(update.status).send(update)
    } else {
        res.json(update)
    }
}

const deleteProduct = async (req, res) => {
    const id = req.params.pid
    let eliminado = await pm.deleteProduct(parseInt(id));
    if (eliminado.error) {
        res.status(eliminado.status).send(eliminado)
    } else {
        res.json(eliminado)
    }
}

module.exports = {
    getProducts,
    getProductById,
    addProduct,
    updateProduct,
    deleteProduct
}