// Creating our Category model
module.exports = function(sequelize, DataTypes) {
  const Category = sequelize.define("Category", {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });
  return Category;
};
