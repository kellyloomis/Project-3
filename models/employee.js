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
    },
    // Giving the Employee model a company of type STRING
    company: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        len: [1]
      }
    },
    // Giving the Employee model a department of type STRING
    department: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        len: [1]
      }
    },
    // Giving the Employee model a manager of type STRING
    manager: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    }
  });

  Employee.associate = function(models) {
    // We're saying that an Employee should belong to a User
    // An Employee can't be created without a User due to the foreign key constraint
    Employee.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    });

    Employee.hasMany(models.Review);
    Employee.hasMany(models.Goal);
    Employee.hasMany(models.Department);
  };

  return Employee;
};

