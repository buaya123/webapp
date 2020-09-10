const product = require('../models/products');
const db = require("../models");


exports.createProd = async (req, res) => {
    try {
    const prod = await db.product.create({
      code:'1',
      type:'1',
      account_id:1,
      merchant_id:1,
      title:'1',
      description:'1',
      tags:'1',
      category:'1',
      status:'1',
      sku:'1',
      price_settings:'1',
      created_at:'2020-09-10',
      updated_at:'2020-09-10',
      deleted_at:'2020-09-10'
      });

    return res.status(201).json({
      prod,
    });
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
    const updated= await db.product.update({status:'2'}, {
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
