const { Model, DataTypes, Sequelize } = require('sequelize');
const sequelize = require('./../libs/sequelize');

class Note extends Model {
    static associate() { }
}
module.exports = Note.init(
    {
        id: {
            allowNull: false,
            primaryKey: true,
            type: DataTypes.UUIDV4
        },
        title: {
            allowNull: false,
            type: DataTypes.STRING,
        },
        description: {
            type: DataTypes.TEXT,
        },
        date: {
            allowNull: false,
            type: DataTypes.DATE,
            defaultValue: Sequelize.NOW,
        },
        user_id: {
            allowNull: false,
            type: DataTypes.UUIDV4
        },
    },
    {
        sequelize,
        tableName: 'notes',
        modelName: 'Note',
        timestamps: false
    }
);