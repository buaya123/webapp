module.exports = (sequelize, DataTypes) => {
  const ProductAttr = sequelize.define("product_attribute", {
    id: {
      type:DataTypes.BIGINT,
      primaryKey: true,
      autoIncrement: true
    },
    product_id: {
      type:DataTypes.BIGINT,
      allowNull: false
    },
    payload: {
      type:DataTypes.STRING,
      allowNull: false
    },
    payload_value: {
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
  return ProductAttr;
};
