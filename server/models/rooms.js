'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Rooms extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Rooms.belongsToMany(models.Client, {
        through: models.RoomUsage,
        foreignKey: 'roomId'
      })
    }
  };
  Rooms.init({
    roomName: DataTypes.STRING,
    costPerHour: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Rooms',
  });
  return Rooms;
};