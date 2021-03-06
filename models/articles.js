// Creating our Articles model using Sequelize. Each article must have a title, category ID and must have text in English. Additional languages are included for future development.
module.exports = function(sequelize, DataTypes) {
  const Articles = sequelize.define("Article", {
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    categoryId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    english: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    spanishTrans: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    japaneseTrans: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    koreanTrans: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    mandarinTrans: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    articleImage: {
      type: DataTypes.STRING,
      allowNull: true
    }
  });
  return Articles;
};
