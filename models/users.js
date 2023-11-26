// "use strict";
// const { Model } = require("sequelize");
// module.exports = (sequelize, DataTypes) => {
//   class Users extends Model {
//     /**
//      * Helper method for defining associations.
//      * This method is not a part of Sequelize lifecycle.
//      * The `models/index` file will call this method automatically.
//      */
//     static associate(models) {
//       // define association here
//     }
//   }
//   Users.init(
//     {
//       username: DataTypes.STRING,
//       displayName: DataTypes.STRING,
//       email: DataTypes.STRING,
//       location: DataTypes.STRING,
//       bio: DataTypes.TEXT,
//       website: DataTypes.STRING,
//       dateOfBirth: DataTypes.DATE,
//       createdAt: DataTypes.DATE,
//       updatedAt: DataTypes.DATE,
//       password: DataTypes.STRING,
//       profilePicUrl: DataTypes.STRING,
//       headerPicUrl: DataTypes.STRING,
//     },
//     {
//       sequelize,
//       modelName: "Users",
//     }
//   );
//   return Users;
// };

"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Users.init(
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.BIGINT,
      },
      username: {
        type: DataTypes.STRING(50),
        unique: true,
        allowNull: false,
      },
      displayName: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING(120),
        unique: true,
        allowNull: false,
      },
      location: {
        type: DataTypes.STRING(100),
        allowNull: true,
      },
      bio: {
        type: DataTypes.TEXT(200),
        allowNull: false,
      },
      website: {
        type: DataTypes.STRING(100),
        allowNull: true,
      },
      dateOfBirth: {
        type: DataTypes.DATE,
        allowNull: false,
        validate: {
          isAbove13(value) {
            const today = new Date();
            const userBirthDate = new Date(value);
            const ageDiff = today.getFullYear() - userBirthDate.getFullYear();

            if (ageDiff < 13) {
              throw new Error("User must be at least 13 years old.");
            }
          },
        },
      },
      createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.fn("NOW"),
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE,
        defaultValue: DataTypes.fn("NOW"),
      },
      password: {
        type: DataTypes.STRING(256),
        allowNull: false,
      },
      profilePicUrl: {
        type: DataTypes.STRING(1024),
        allowNull: true,
      },
      headerPicUrl: {
        type: DataTypes.STRING(1024),
        allowNull: true,
      },
    },
    {
      sequelize,
      modelName: "Users",
    }
  );
  return Users;
};
