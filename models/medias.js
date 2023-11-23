'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Medias extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Medias.init({
    index: DataTypes.INTEGER,
    postedId: DataTypes.BIGINT,
    url: DataTypes.STRING,
    type: DataTypes.ENUM('image', 'video', 'gif')
  }, {
    sequelize,
    modelName: 'Medias',
  });
  return Medias;
};