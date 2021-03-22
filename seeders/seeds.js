/* eslint-disable no-unused-vars */
const bcrypt = require("bcryptjs");
const password = bcrypt.hashSync("test12345", bcrypt.genSaltSync(10), null);
console.log(password);
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Users", [
      {
        firstname: "Joe",
        lastname: "Ortisi",
        email: "jaortisi@mailinator.com",
        password,
        admin: true,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Users", null, {});
  }
};
