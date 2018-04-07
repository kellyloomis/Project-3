module.exports = function(sequelize, DataTypes) {
  var Review = sequelize.define("Review", {
    // Giving the Review model a review of type STRING
    review: {
      type: DataTypes.STRING,
      allowNull: true
    }
  });

  Review.associate = function(models) {
    // We're saying that a Review should belong to an Employee
    // A Review can't be created without an Employee due to the foreign key constraint
    Review.belongsTo(models.Employee, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return Review;
};

