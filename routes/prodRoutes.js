const express = require("express");
const router = express.Router();
const productController = require('../controllers/productController');


router.get("/get",productController.getProd);
router.get("/getOne",productController.getOne);
router.post("/create",productController.createProd);
router.post("/update",productController.updProd);
router.post("/delete",productController.delProd);

module.exports = router;
