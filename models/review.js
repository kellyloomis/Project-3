module.exports = function(sequelize, DataTypes) {
  var Review = sequelize.define('Review', {
    // Giving the Review model an attendance of type INTEGER
    attendance: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    // Giving the Review model an appearance of type INTEGER
    appearance: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    // Giving the Review model an professionalism of type INTEGER
    professionalism: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    // Giving the Review model an communication of type INTEGER
    communication: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    // Giving the Review model an taskcompletion of type INTEGER
    taskcompletion: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    // Giving the Review model an quality of type INTEGER
    quality: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  });

  return Review;
};
