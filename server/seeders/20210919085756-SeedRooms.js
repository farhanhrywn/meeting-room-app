'use strict';
const data = [
  {
    roomName: "Conference Room",
    costPerHour: 5,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    roomName: "Discussion Room",
    costPerHour: 1,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    roomName: "Event Space",
    costPerHour: 10,
    createdAt: new Date(),
    updatedAt: new Date()
  }
]

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Rooms', data)
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Rooms', null, {})
  }
};
