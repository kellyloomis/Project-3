// Creating our Users model
module.exports = function(sequelize, DataTypes) {
  var Users = sequelize.define("Users", {
    // Giving the Users model a username of type STRING
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    // Giving the Users model a password of type STRING
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    // Giving the Users model an email of type STRING
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
        len: [1]
      }
    },
    // Giving the Users model a firstname of type STRING
    firstname: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        len: [1]
      }
    },
    // Giving the Users model a lastname of type STRING
    lastname: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        len: [1]
      }
    }
  });

  Users.associate = function(models) {
    // Associating Users with Employees
    // When a Users is deleted, also delete any associated Employees
    Users.hasMany(models.Employees, {
      onDelete: "cascade"
    });
  };

  return Users;
};
