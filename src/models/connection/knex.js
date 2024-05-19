const config = require('../../config/knexfile')
const knex = require('knex')

module.exports = {
  createConnection(databaseName) {
    const databaseConfig = config[databaseName]
    return connection = knex(databaseConfig)
  }
}