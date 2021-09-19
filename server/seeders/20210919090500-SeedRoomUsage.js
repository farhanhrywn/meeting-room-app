'use strict';
const data = [
  {
    clientId: 2,
    roomId: 2,
    startTime: "10:00",
    endTime: "11:00",
    bookingDate: "2021-04-13",
    quotaUsed: 5,
    createdAt: new Date(),
    updatedAt: new Date()
  }
]

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('RoomUsages', data)
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('RoomUsages', null, {})
  }
};
