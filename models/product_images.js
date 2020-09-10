module.exports = (sequelize, DataTypes) => {
  const ProductImg = sequelize.define("product_images", {
    id: {
      type:DataTypes.BIGINT,
      primaryKey: true,
      autoIncrement: true
    },
    product_id: {
      type:DataTypes.BIGINT,
      allowNull: false
    },
    status: {
      type:DataTypes.STRING,
      allowNull: false
    },
    url: {
      type:DataTypes.STRING,
    },
    images: {
      type:DataTypes.BLOB,
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
  return ProductImg;
};
