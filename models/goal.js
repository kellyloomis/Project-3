module.exports = function(sequelize, DataTypes) {
  var Goal = sequelize.define("Goal", {
    // Giving the Goal model a goals of type STRING
    goals: {
      type: DataTypes.STRING,
      allowNull: true
    }
  });

  // Goal.associate = function(models) {
  //   // We're saying that a Goal should belong to an Employee
  //   // A Goal can't be created without an Employee due to the foreign key constraint
  //   Goal.belongsTo(models.Employee, {
  //     foreignKey: {
  //       allowNull: false
  //     }
  //   });
  // };

  return Goal;
};