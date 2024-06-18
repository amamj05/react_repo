const { Model, DataTypes } = require('sequelize');

class Order extends Model {
  static initiate(sequelize) {
    return super.init({
      orderid: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
      custid: { type: DataTypes.INTEGER, allowNull: false },
      bookid: { type: DataTypes.INTEGER, allowNull: false },
      saleprice: { type: DataTypes.INTEGER, allowNull: false },
      orderdate: { type: DataTypes.DATE, allowNull: false }
    }, {
      sequelize,
      tableName: 'orders',
      timestamps: false
    });
  }

  static associate(models) {
    this.belongsTo(models.Customer, { foreignKey: 'custid' });
    this.belongsTo(models.Book, { foreignKey: 'bookid' });
  }
}

module.exports = Order;