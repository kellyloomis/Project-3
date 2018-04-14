// Creating our User model
module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("User", {
    // Giving the User model a username of type STRING
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    // Giving the User model a password of type STRING
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    // Giving the User model an email of type STRING
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      //unique: true,
      validate: {
        isEmail: true,
        len: [1]
      }
    },
    // Giving the User model a firstname of type STRING
    firstname: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        len: [1]
      }
    },
    // Giving the User model a lastname of type STRING
    lastname: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        len: [1]
      }
    },
    // Giving the User model a firebaseId of type STRING
    firebaseId: {
      type: DataTypes.STRING,
      allowNull: false
    },
    // Giving the User model a companyName of type STRING
    companyName: {
      type: DataTypes.STRING,
      allowNull: true
    }
  });

  return User;
};
