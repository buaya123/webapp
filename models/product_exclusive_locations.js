module.exports = (sequelize, DataTypes) => {
  const ProductExclusiveLocation = sequelize.define("product_exclusive_Locations", {
    id: {
      type:DataTypes.BIGINT,
      primaryKey: true,
      autoIncrement: true
    },
    product_id: {
      type:DataTypes.BIGINT,
      allowNull: false
    },
    locality: {
      type:DataTypes.STRING,
      allowNull: false
    },
    region: {
      type:DataTypes.STRING,
      allowNull: false
    },
    country: {
      type:DataTypes.STRING,
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
  return ProductExclusiveLocation;
};
