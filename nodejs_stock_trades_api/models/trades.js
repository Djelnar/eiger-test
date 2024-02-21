const { Sequelize } = require('sequelize')
const sequelize = new Sequelize('sqlite::memory:')
exports.sequelize = sequelize

class Trades extends Sequelize.Model {}
Trades.init(
  {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    type: {
      type: Sequelize.ENUM('buy', 'sell'),
      validate: {
        isIn: {
          args: [['buy', 'sell']],
          msg: 'Type must be Buy or Sell',
        },
      },
    },
    user_id: {
      type: Sequelize.INTEGER,
    },
    symbol: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    shares: {
      type: Sequelize.INTEGER,
      allowNull: false,
      validate: {
        min: 1,
        max: 100,
      },
    },
    price: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    timestamp: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: 'Trades',
    timestamps: false,
  },
)

module.exports = Trades
