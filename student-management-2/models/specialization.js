'use strict';
module.exports = (sequelize, DataTypes) => {
  const specialization = sequelize.define('specialization', {
    code: DataTypes.STRING,
    name: DataTypes.STRING,
    total_credit: DataTypes.INTEGER
  }, {});
  specialization.associate = function(models) {
    // associations can be defined here
    models.specialization.hasMany(models.student, {
      foreignKey: "specialization_id"
    });
  };
  return specialization;
};