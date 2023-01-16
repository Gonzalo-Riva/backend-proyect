const { Router } = require("express")

const productscontroller = require('../controller/products.controller');

const router = Router();

router.get('/', productscontroller.getProducts);
router.get('/:pid', productscontroller.getProductById);
router.post('/', productscontroller.addProduct);
router.put('/:pid', productscontroller.updateProduct);
router.delete('/:pid', productscontroller.deleteProduct);


module.exports = router;