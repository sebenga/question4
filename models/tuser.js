'use strict';
module.exports = (sequelize, DataTypes) => {
  const tUSER = sequelize.define('tUSER', {
    id_number: DataTypes.STRING,
    first_names: DataTypes.STRING,
    last_name: DataTypes.STRING,
    first_names: DataTypes.STRING
  }, {});
  tUSER.associate = function(models) {
    // associations can be defined here
  };
  return tUSER;
};