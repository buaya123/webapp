module.exports = (sequelize, DataTypes) => {
  const ProductInventory = sequelize.define("product_Inventories", {
    id: {
      type:DataTypes.BIGINT,
      primaryKey: true,
      autoIncrement: true
    },
    product_id: {
      type:DataTypes.BIGINT,
      allowNull: false
    },
    qty: {
      type:DataTypes.INTEGER,
      allowNull: false
    },
    created_at: {
      type:DataTypes.DATE
    },
    updated_at: {
      type:DataTypes.DATE
    },
    deleted_at: {
      type:DataTypes.DATE
    }
  }, {timestamps:false});
  return ProductInventory;
};
