const { Sequelize } = require('@sequelize/core')

const sequelize = new Sequelize("General", "sa", "LocalAdmin", {
    host: 'DESKTOP-TK4G906',
    dialect: 'mssql',
    port: 1433,
    logging: true
})

module.exports = {
    sequelize: sequelize
}