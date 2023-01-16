const express = require('express');
const server = express();
const ProductsRoute = require('./routes/product.route')
const CartRoute = require('./routes/cart.route')


server.use(express.urlencoded({ extended: true }))
server.use(express.json())

server.use('/api/products/', ProductsRoute);
server.use('/api/products/', ProductsRoute);
server.use('/api/products/', ProductsRoute);
server.use('/api/products/', ProductsRoute);
server.use('/api/products/', ProductsRoute);

server.use('/api/carts/', CartRoute);
server.use('/api/carts/', CartRoute);
server.use('/api/carts/', CartRoute);

server.listen(8080, () => {
    console.log("Servidor Escuchando en el puerto 8080")
})