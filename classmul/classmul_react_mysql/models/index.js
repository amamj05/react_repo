
const Sequelize = require('sequelize');
const env = process.env.NODE_ENV || 'development';
const config = require('/../config/config.json')[env];
const db = {};
const Book = require('./book');
const Book = require('./customer');
const Book = require('./order');

let sequelize = new Sequelize(config.database, config.username, config.password, config);


db.sequelize = sequelize;
db.book = Book;
db.Customer = Customer;
db.Order = Order;

Book.associate(db);
Customer.associate(db);
Order.associate(db);

module.exports = db;
