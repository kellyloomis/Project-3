module.exports = function(sequelize, DataTypes) {
  var Achieved = sequelize.define("Achieved", {
    // Giving the Achieved model an description of type STRING
    description: {
      type: DataTypes.STRING,
      allowNull: true
    }
  });

  return Achieved;
};