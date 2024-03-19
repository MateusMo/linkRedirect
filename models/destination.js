'use strict';

module.exports = (sequelize, DataTypes) => {
  
  const Destination = sequelize.define('Destination', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
    },
    labelId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        foreignKey: true,
        references: { model: 'Labels', key: 'id' },
    },
    link: {
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
  },
    { tableName: 'Destinations'}
  );

  Destination.associate = (models) => {
    Destination.belongsTo(models.Label, { foreignKey: 'labelId' });
  };

    return Destination;
};