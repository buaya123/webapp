const product = require('../models/products');
const db = require("../models");


exports.createProd = async (req, res) => {
    try {
      code = req.body.code;
      type = req.body.type;
      account_id = req.body.account_id;
      merchant_id=req.body.merchant_id;
      title = req.body.title;
      description = req.body.description;
      tags = req.body.tags;
      category = req.body.category;
      status = req.body.status;
      sku = req.body.sku;
      price_settings=req.body.price_settings;
      created_at = req.body.created_at;
      updated_at = req.body.updated_at;
      deleted_at = req.body.deleted_at;
      if(code !=NULL &&type !=NULL &&account_id !=NULL &&merchant_id !=NULL &&title !=NULL &&description !=NULL &&tags !=NULL &&category !=NULL &&status !=NULL &&sku !=NULL &&price_settings !=NULL){
          const prod = await db.product.create({
            code:code,
            type:type,
            account_id:account_id,
            merchant_id:merchant_id,
            title:title,
            description:description,
            tags:tags,
            category:category,
            status:status,
            sku:sku,
            price_settings:price_settings,
            created_at:new Date().toISOString().slice(0, 19).replace('T', ' '),
            updated_at:new Date().toISOString().slice(0, 19).replace('T', ' '),
            deleted_at:''
            });

          return res.status(201).json({
            prod,
          });
        }
      } catch (error) {
        return res.status(500).json({error: error.message})
      }
}


exports.getProd = async (req, res) =>{
  try {
   const posts = await db.product.findAll();
   return res.status(200).json({ posts });
 } catch (error) {
   return res.status(500).send(error.message);
 }
 }

 exports.getOne = async (req, res) =>{
   try {
    const one = await db.product.findOne({
      where: { id: 3 }
    });
    if (one) {
      return res.status(200).json({ one });
    }
    return res.status(404).send('Product with the ID does not exists');
  } catch (error) {
    return res.status(500).send(error.message);
  }
}

exports.updProd = async (req, res) =>{
  try {
    const updated= await db.product.update({status:'2', updated_at:new Date().toISOString().slice(0, 19).replace('T', ' ')}, {
      where: { id: 3 }
    });
    if (updated) {
      const updatedPost = await db.product.findOne({ where: { id: 3 } });
      return res.status(200).json({ post: updatedPost });
    }
    throw new Error('Post not found');
  } catch (error) {
    return res.status(500).send(error.message);
  }
 }

 exports.delProd = async (req, res) => {
   try {
       const deleted = await db.product.destroy({
         where: { id: 2 }
       });
       if (deleted) {
         return res.send("Post deleted");
       }
       throw new Error("Post not found");
     } catch (error) {
       return res.send(error.message);
     }
 }
