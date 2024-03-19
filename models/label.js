'use strict';

module.exports = (sequelize, DataTypes) => {

    const Label = sequelize.define('Label', {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        userId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: { model: 'Users', key: 'id' },
        },
        label: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        createdAt: {
            allowNull: false,
            type: DataTypes.DATE
        },
        updatedAt: {
            allowNull: false,
            type: DataTypes.DATE
        }
    }, {
        tableName: 'Labels'
    });

    Label.associate = (models) => {
        Label.belongsTo(models.User, { foreignKey: 'userId' });
        Label.hasOne(models.Destination, { foreignKey: 'labelId'});
    };

    return Label;
};