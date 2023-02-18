const { DataTypes } = require("sequelize")

module.exports = (sequelize) => {
    sequelize.define("Comment", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        content: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        publicationName: {
          type: DataTypes.STRING,
          allowNull: true,
        },
        userName: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    }, {
        timestamps: false,
    }, )
}