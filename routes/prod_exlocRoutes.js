const express = require("express");
const router = express.Router();
const productController = require('../controllers/productController');


router.get("/get",productController.getProdExLoc);
router.get("/getOne",productController.getProdExLocOne);
router.post("/create",productController.createProdExLoc);
router.post("/update",productController.updProdExLoc);
router.post("/delete",productController.delProdExLoc);

module.exports = router;
