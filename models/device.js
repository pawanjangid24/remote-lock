const { Sequelize, DataTypes } = require('@sequelize/core')
const { sequelize } = require('./../database/db')

const Device = sequelize.define('Device', {
    id: {
        type: DataTypes.UUID,
        primaryKey: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: true
    },
    power_source: {
        type: DataTypes.STRING,
        allowNull: true
    },
    connected_at: {
        type: DataTypes.STRING,
        allowNull: true
    },
    firmware_version: {
        type: DataTypes.STRING,
        allowNull: true
    },
    serial_number: {
        type: DataTypes.STRING,
        allowNull: true
    },
    programming_code: {
        type: DataTypes.STRING,
        allowNull: true
    },
    state: {
        type: DataTypes.STRING,
        allowNull: true
    },
    model_number: {
        type: DataTypes.STRING,
        allowNull: true
    }
}, {
    updatedAt: false,
    createdAt: false,
    timestamps: false
})

module.exports = {
    Device: Device
}