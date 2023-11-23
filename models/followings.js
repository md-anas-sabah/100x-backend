'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Followings extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Followings.init({
    followedId: DataTypes.BIGINT,
    followerId: DataTypes.BIGINT,
    followingId: DataTypes.BIGINT,
    followedAt: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Followings',
  });
  return Followings;
};