const fs = require('fs');

const writeFile = async (path, cart) => {
    fs.promises.writeFile(path, JSON.stringify(cart));
};
const readFile = async (path) => {
    const getCart = await fs.promises.readFile(path, { encoding: 'utf-8' });
    const cartJSON = JSON.parse(getCart || '[]');
    return cartJSON;
};

class CartManager {
    constructor(path) {
        this.path = path;
        this.carts = [];
    }

    createFile = async () => {
        const File = await readFile(this.path);
        const id = File.length;
        File.push({ id, products: [] });
        await writeFile(this.path, File);
        return id;
    };

    getCart = async (id) => {
        const carts = await readFile(this.path);
        if (carts[id]) {
            return carts[id];
        } else {
            return { status: 400, error: 'El carrito no existe' };
        }
    };

    addProductCart = async (cid, pid) => {
        const carts = await readFile(this.path);
        if (carts[cid]) {
            const productIndex = carts[cid].products.findIndex((element) => element.id == pid)
            if (productIndex !== -1) {
                carts[cid].products[productIndex].quantity++
            } else {
                carts[cid].products.push({ id: pid, quantity: 1 })
            }
            await writeFile(this.path, carts);
            return carts;
        } else {
            return ({ msg: "Carrito no existente" });
        }
    }

}

module.exports = CartManager;