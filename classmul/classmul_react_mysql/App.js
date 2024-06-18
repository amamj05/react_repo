const express = require('express');
const cors = require('cors');
const { sequelize, Book, Customer, Order } = require('./models');

const app = express();

app.use(cors());  //모든 경로 허용??

app.use(express.json());

app.get('/books', async (req, res) => {
    try {
      const books = await Book.findAll();
      res.json(books);
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch books' });
    }
  });
  
  app.get('/customers', async (req, res) => {
    try {
      const customers = await Customer.findAll();
      res.json(customers);
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch customers' });
    }
  });
  
  app.get('/orders', async (req, res) => {
    try {
      const orders = await Order.findAll({
        include: [Book, Customer]
      });
      res.json(orders);
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch orders' });
    }
  });

  const PORT = process.env.PORT || 3000;
app.listen(PORT, async () => {
  console.log(`Server is running on port ${PORT}`);
  // await sequelize.sync({ force: true });
  await sequelize.sync({ force: false }); //false가 기존데이터 초기화 없이 진행
  console.log('Database synced');
});