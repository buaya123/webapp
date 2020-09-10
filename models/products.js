module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define("product", {
    id: {
      type:DataTypes.BIGINT,
      primaryKey: true,
      autoIncrement: true
    },
    code: {
      type:DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4
    },
    type: {
      type:DataTypes.STRING,
      allowNull: false
    },
    account_id: {
      type:DataTypes.BIGINT,
      allowNull: false
    },
    merchant_id: {
      type:DataTypes.BIGINT,
      allowNull: false
    },
    title: {
      type:DataTypes.STRING,
      allowNull: false
    },
    description: {
      type:DataTypes.STRING,
      allowNull: false
    },
    tags: {
      type:DataTypes.STRING,
      allowNull: false
    },
    category: {
      type:DataTypes.STRING,
      allowNull: false
    },
    status: {
      type:DataTypes.STRING,
      allowNull: false
    },
    sku: {
      type:DataTypes.STRING,
      allowNull: false
    },
    price_settings: {
      type:DataTypes.STRING,
      allowNull: false
    },
    created_at: {
      type:DataTypes.DATE,
    },
    updated_at: {
      type:DataTypes.DATE,
    },
    deleted_at: {
      type:DataTypes.DATE,
    }
  }, {timestamps:false});
  return Product;
};
