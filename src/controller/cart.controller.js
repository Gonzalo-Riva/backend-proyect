const CartManager = require('../CartManager.js');
const ProductManager = require('../ProductManager');

const cart = new CartManager(__dirname + '/../assets/cart.json');
const pm = new ProductManager('./src/assets/Usuarios.json');

const createCart = async (req, res) => {
    const resp = await cart.createFile();
    res.json({ msg: 'El carrito existe', id: resp });
};

const getCartContent = async (req, res) => {
    const resp = await cart.getCart(req.params.cid);
    if (resp.error) {
        res.json(resp.status).send(resp);
    } else {
        res.json(resp);
    }
};

const addProductCart = async (req, res) => {
    const { cid, pid } = req.params;

    const products = await pm.getProductById(pid);

    if (products) {
        const resp = await cart.addProductCart(cid, products.id);
        res.json({ msg: "Producto Agregado" })
    } else {
        res.json({ msg: "Producto no Encontrado" })
    }

};

module.exports = {
    createCart,
    getCartContent,
    addProductCart
};