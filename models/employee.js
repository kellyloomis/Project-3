module.exports = function(sequelize, DataTypes) {
  var Employee = sequelize.define("Employee", {
    // Giving the Employee model a firstname of type STRING
    firstname: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    // Giving the Employee model a lastname of type STRING
    lastname: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    // Giving the Employee model an email of type STRING
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isEmail: true
      }
    }
  });

  return Employee;
};

