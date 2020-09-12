const express = require("express");
const router = express.Router();
const productController = require('../controllers/productController');


router.get("/get",productController.getProdInv);
router.get("/getOne",productController.getProdInvOne);
router.post("/create",productController.createInv);
router.post("/update",productController.updProdInv);
router.post("/delete",productController.delProdInv);

module.exports = router;
