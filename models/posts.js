'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Posts extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Posts.init({
    type: DataTypes.ENUM('repost', 'post', 'reply'),
    repostId: DataTypes.BIGINT,
    userId: DataTypes.BIGINT,
    content: DataTypes.STRING,
    postedAt: DataTypes.DATE,
    createdAt: DataTypes.DATE,
    deletedAt: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Posts',
  });
  return Posts;
};