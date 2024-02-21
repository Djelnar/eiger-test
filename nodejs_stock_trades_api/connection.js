// You can safely remove the initialization of the connectionManager object once you have selected an ORM to use
let connectionManager = {
  getConnection: () => {},
  clearDatabase: () => {},
  closeConnection: () => {},
}

const SequelizeConnection = require('./lib/sequelize.connection')
connectionManager = new SequelizeConnection()

module.exports = connectionManager
