const { Router } = require('express');
const cartcontroller = require('../controller/cart.controller');
const router = Router();


router.post('/', cartcontroller.createCart);
router.get('/:cid', cartcontroller.getCartContent)
router.post('/:cid/products/:pid', cartcontroller.addProductCart)


module.exports = router;