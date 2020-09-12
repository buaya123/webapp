const product = require('../models/products');
const product_images = require('../models/product_images');
const product_exclusive_locations = require('../models/product_exclusive_locations');
const product_attributes = require('../models/product_attributes');
const product_inventories = require('../models/product_inventories');
const db = require("../models");

// Create Product Row
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

// Get All Product Rows
exports.getProd = async (req, res) =>{
  try {
   const posts = await db.product.findAll();
   return res.status(200).json({ posts });
 } catch (error) {
   return res.status(500).send(error.message);
 }
 }
// Get only 1 Product row
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

// Update Product
exports.updProd = async function (req,res,idd){
  try {
    const updated= await db.product.update({status:'323', updated_at:new Date().toISOString().slice(0, 19).replace('T', ' ')}, {
      where: { id: 3 }
    });
    if (updated) {
      const updatedPost = await db.product.findOne({ where: { id:num} });
      return res.status(200).json({ post: updatedPost });
    }
    throw new Error('Post not found');
  } catch (error) {
    return res.status(500).send(error.message);
  }
 }
// Delete Product
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


 // Create Product_inventory row
  exports.createInv = async (req, res) => {
    try {
      product_id = req.body.product_id;
      qty = req.body.qty;
      created_at = req.body.created_at;
      updated_at = req.body.updated_at;
      deleted_at = req.body.deleted_at;
      if(product_id !=NULL &&qty !=NULL){
          const prod_inv = await db.product_inventories.create({
            product_id:product_id,
            qty:qty,
            created_at:new Date().toISOString().slice(0, 19).replace('T', ' '),
            updated_at:new Date().toISOString().slice(0, 19).replace('T', ' '),
            deleted_at:''
            });

          return res.status(201).json({
            prod_inv,
          });
        }
      } catch (error) {
        return res.status(500).json({error: error.message})
      }
  }


  // Get All Product_inventory Row
   exports.getProdInv = async (req, res) => {
     try {
      const posts = await db.product_inventories.findAll();
      return res.status(200).json({ posts });
    } catch (error) {
      return res.status(500).send(error.message);
    }
   }

// Get Product_inventory Row One
   exports.getProdInvOne = async (req, res) =>{
     try {
      const one = await db.product_inventories.findOne({
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

// Update Product_inventory
exports.updProdInv = async function (req,res,idd){
  try {
    const updated= await db.product_inventories.update({qty:32, updated_at:new Date().toISOString().slice(0, 19).replace('T', ' ')}, {
      where: { id: 1 }
    });
    if (updated) {
      const updatedPost = await db.product_inventories.findOne({ where: { id:1} });
      return res.status(200).json({ post: updatedPost });
    }
    throw new Error('Post not found');
  } catch (error) {
    return res.status(500).send(error.message);
  }
 }

 // Delete Product_inventory
exports.delProdInv = async (req, res) => {
    try {
        const deleted = await db.product_inventories.destroy({
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

  // Create Product_attributes
  exports.createProdAttr = async (req, res) => {
    try {
      product_id = req.body.product_id;
      payload = req.body.payload;
      payload_value = req.body.payload_value;
      if(product_id !=NULL &&payload !=NULL && payload_value != NULL){
          const prod = await db.product_attributes.create({
            product_id:product_id,
            payload:payload,
            payload_value:payload_value,
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


  // Get All Product_attributes Row
   exports.getProdAttr = async (req, res) => {
     try {
      const posts = await db.product_attributes.findAll();
      return res.status(200).json({ posts });
    } catch (error) {
      return res.status(500).send(error.message);
    }
  }


// Get Product_attributes Row One
   exports.getProdAttrOne = async (req, res) =>{
     try {
      const one = await db.product_attributes.findOne({
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


  // Update Product_attributes
  exports.updProdAttr = async function (req,res,idd){
    try {
      const updated= await db.product_attributes.update({payload:"paload", updated_at:new Date().toISOString().slice(0, 19).replace('T', ' ')}, {
        where: { id: 1 }
      });
      if (updated) {
        const updatedPost = await db.product_attributes.findOne({ where: { id:1} });
        return res.status(200).json({ post: updatedPost });
      }
      throw new Error('Post not found');
    } catch (error) {
      return res.status(500).send(error.message);
    }
   }

   // Delete Product_attributes
  exports.delProdAttr = async (req, res) => {
      try {
          const deleted = await db.product_attributes.destroy({
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


    // Create Product_exclusive_location
    exports.createProdExLoc = async (req, res) => {
      try {
        product_id = req.body.product_id;
        locality = req.body.locality;
        region = req.body.region;
        country = req.body.country;
        if(product_id !=NULL &&locality !=NULL && region != NULL && country !=NULL){
            const prod = await db.product_exclusive_locations.create({
              product_id:product_id,
              locality:locality,
              region:region,
              country:country,
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


    // Get All Product Exclusive Location Rows
     exports.getProdExLoc = async (req, res) => {
       try {
        const posts = await db.product_exclusive_locations.findAll();
        return res.status(200).json({ posts });
      } catch (error) {
        return res.status(500).send(error.message);
      }
    }


  // Get Product Exclusive Location Row One
     exports.getProdExLocOne = async (req, res) =>{
       try {
        const one = await db.product_exclusive_locations.findOne({
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


    // Update Product Exclusive Location
    exports.updProdExLoc = async function (req,res){
      try {
        const updated= await db.product_exclusive_locations.update({locality:"lukal", updated_at:new Date().toISOString().slice(0, 19).replace('T', ' ')}, {
          where: { id: 1 }
        });
        if (updated) {
          const updatedPost = await db.product_exclusive_locations.findOne({ where: { id:1} });
          return res.status(200).json({ post: updatedPost });
        }
        throw new Error('Post not found');
      } catch (error) {
        return res.status(500).send(error.message);
      }
     }

     // Delete Product Exclusive Location
    exports.delProdExLoc = async (req, res) => {
        try {
            const deleted = await db.product_exclusive_locations.destroy({
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


      // Create Product Images row
       exports.createProdImg = async (req, res) => {
         try {
           product_id = req.body.product_id;
           status = req.body.status;
           url = req.body.url;
           images = req.body.images;
           if(product_id !=NULL &&status !=NULL && url !=NULL &&images !=NULL){
               const prod_inv = await db.product_images.create({
                 product_id:product_id,
                 status:status,
                 url:url,
                 images:images,
                 created_at:new Date().toISOString().slice(0, 19).replace('T', ' '),
                 updated_at:new Date().toISOString().slice(0, 19).replace('T', ' '),
                 deleted_at:''
                 });

               return res.status(201).json({
                 prod_inv,
               });
             }
           } catch (error) {
             return res.status(500).json({error: error.message})
           }
       }


       // Get All Product Images Row
        exports.getProdImg = async (req, res) => {
          try {
           const posts = await db.product_images.findAll();
           return res.status(200).json({ posts });
         } catch (error) {
           return res.status(500).send(error.message);
         }
        }

      // Get Product Images Row One
        exports.getProdImgOne = async (req, res) =>{
          try {
           const one = await db.product_images.findOne({
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

      // Update Product Images
      exports.updProdImg = async function (req,res,idd){
       try {
         const updated= await db.product_images.update({status:"noice", updated_at:new Date().toISOString().slice(0, 19).replace('T', ' ')}, {
           where: { id: 1 }
         });
         if (updated) {
           const updatedPost = await db.product_images.findOne({ where: { id:1} });
           return res.status(200).json({ post: updatedPost });
         }
         throw new Error('Post not found');
       } catch (error) {
         return res.status(500).send(error.message);
       }
      }

      // Delete Product Images
      exports.delProdImg = async (req, res) => {
         try {
             const deleted = await db.product_images.destroy({
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
