const express = require('express');
const db = require('../config/db');

const router = express.Router();

router.post('/', (req, res) => {
  const { user, order } = req.body;

  const queryUser = 'INSERT INTO Users (name, email) VALUES (?, ?)';
  db.query(queryUser, [user.name, user.email], (err, result) => {
    if (err) throw err;
    const userId = result.insertId;

    const orderAmount = order.cart.reduce((acc, item) => acc + item.price, 0);

    const queryOrder = 'INSERT INTO `Orders` (amount, user_id) VALUES (?, ?)';
    db.query(queryOrder, [orderAmount, userId], (err, result) => {
      if (err) throw err;
      const orderId = result.insertId;

      order.cart.forEach(item => {
        let queryOrderItem;
        if (item.category === 'Chairs') {
          queryOrderItem = 'INSERT INTO Order_Chairs (order_id, chair_id) VALUES (?, ?)';
        } else if (item.category === 'Table') {
          queryOrderItem = 'INSERT INTO Order_Tables (order_id, table_id) VALUES (?, ?)';
        } else if (item.category === 'Top') {
          queryOrderItem = 'INSERT INTO Order_Tops (order_id, top_id) VALUES (?, ?)';
        }
        db.query(queryOrderItem, [orderId, item.id], (err) => {
          if (err) throw err;
        });
      });

      res.send('Order placed successfully!');
    });
  });
});

module.exports = router;
