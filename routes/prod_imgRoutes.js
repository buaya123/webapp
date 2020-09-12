const express = require("express");
const router = express.Router();
const productController = require('../controllers/productController');


router.get("/get",productController.getProdImg);
router.get("/getOne",productController.getProdImgOne);
router.post("/create",productController.createProdImg);
router.post("/update",productController.updProdImg);
router.post("/delete",productController.delProdImg);

module.exports = router;
