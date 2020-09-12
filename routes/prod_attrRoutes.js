const express = require("express");
const router = express.Router();
const productController = require('../controllers/productController');


router.get("/get",productController.getProdAttr);
router.get("/getOne",productController.getProdAttrOne);
router.post("/create",productController.createProdAttr);
router.post("/update",productController.updProdAttr);
router.post("/delete",productController.delProdAttr);

module.exports = router;
