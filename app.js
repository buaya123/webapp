const express = require("express");
const app = express();
const db = require("./models");
const PORT = process.env.PORT || 3000;
const prodRoutes = require('./routes/prodRoutes.js');
const prod_attrRoutes = require('./routes/prod_attrRoutes.js');
const prod_exlocRoutes = require('./routes/prod_exlocRoutes.js');
const prod_imgRoutes = require('./routes/prod_imgRoutes.js');
const prod_invRoutes = require('./routes/prod_invRoutes.js');

app.use(express.urlencoded({extended:true}));
app.use(express.json());

db.sequelize.sync().then(() => {
  app.listen(PORT, ()=>{
    console.log(`listening on: http://localhost:${PORT}`);
  });
});

app.use("/product",prodRoutes);
app.use("/product_attributes",prod_attrRoutes);
app.use("/product_exclusive_locations",prod_exlocRoutes);
app.use("/product_images",prod_imgRoutes);
app.use("/product_inventories",prod_invRoutes);
