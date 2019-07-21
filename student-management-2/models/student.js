'use strict';
module.exports = (sequelize, DataTypes) => {
  const student = sequelize.define('student', {
    student_code: DataTypes.STRING,
    full_name: DataTypes.STRING,
    dob: DataTypes.DATE,
    address: DataTypes.STRING
  }, {});
  student.associate = function(models) {
    // associations can be defined here
    models.student.belongsTo(models.specialization, {
      onDelete: "CASCADE",
      foreignKey: {
        name: "specialization_id",
        allowNull: false
      }
    });
  };
  return student;
};