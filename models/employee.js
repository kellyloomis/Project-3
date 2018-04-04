module.exports = function(sequelize, DataTypes) {
  var Employees = sequelize.define("Employees", {
    // Giving the Employees model a firstname of type STRING
    firstname: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    // Giving the Employees model a lastname of type STRING
    lastname: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    // Giving the Employees model an email of type STRING
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isEmail: true
      }
    },
    // Giving the Employees model a lastname of type STRING
    goals: {
      type: DataTypes.STRING,
      allowNull: true
    }

  });

  Employees.associate = function(models) {
    // We're saying that an Employee should belong to a User
    // An Employees can't be created without a User due to the foreign key constraint
    Employees.belongsTo(models.Users, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return Employees;
};

