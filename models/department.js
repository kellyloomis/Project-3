module.exports = function(sequelize, DataTypes) {
  var Department = sequelize.define("Department", {
    // Giving the Department model an departmentName of type String
    departmentName: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });

  Department.associate = function(models) {
    // We're saying that a Department should belong to a User
    // A Department can't be created without a User due to the foreign key constraint
    Department.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return Department;
};

