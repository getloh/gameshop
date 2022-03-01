var express = require('express');
var orderRouter = express.Router();
const db = require('./database');
const pool = db.pool;

// GET all order information (admin function)
orderRouter.get('/', function(req, res, next) {
  pool.query('SELECT * FROM orders ORDER BY order_id ASC', (error, results) => {
    if (error) {
      throw error
    }
    res.status(200).json(results.rows)
  })
});

// GETs a single order via Order_ID
orderRouter.get('/:id', function(req, res, next) {
  pool.query(`SELECT * FROM orders WHERE order_id = ${req.params.id}`, (error, results) => {
    if (error) {
      throw error
    }
    let resp = results.rows[0];
    res.status(200).json(resp);
  })
});

// DELETEs an order ?
orderRouter.delete('/:id', function(req, res, next) {
  res.status(405).send("Function not available yet")
});

// GET a user's orders
orderRouter.get('/user/:id', function(req, res, next) {
  pool.query(`SELECT * FROM orders WHERE user_id = ${req.params.id} ORDER BY order_id DESC`, (error, results) => {
    if (error) {
      throw error
    }
    res.status(200).json(results.rows)
  })
});

// POST new order - will generate an order in orders DB
orderRouter.post('/new', async function(req, res, next) {

  //  input Data is JSON
  //  Cart : [array of objects],
  //  userinfo: {object}
  // 
  var today = new Date();
  var dd = String(today.getDate()).padStart(2, '0');
  var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
  var yyyy = today.getFullYear();
  today = yyyy +'-'+ mm +'-'+ dd;

  const cart = req.body.cart;
  const user = req.body.userinfo;

  console.log(cart);
  console.log(user);
  

  for (let i = 0; i < cart.length; i++){
    pool.query(`INSERT INTO orders (user_id, inventory_id, quantity, payment, order_date) VALUES ($1, $2, $3, $4, $5)`,
    [user.user_id, cart[i].inventory_id, cart[i].quantity, "VISA 1234567812345678", today], (error, results) => {
      if (error) {
        throw error
      }
    })
  }

  await new Promise(resolve => setTimeout(resolve, 1000));
  pool.query(`SELECT * FROM orders WHERE user_id = ${user.user_id} ORDER BY order_id DESC`, (error, results) => {
    if (error) {
      throw error
    }
    console.log(results.rows);
    res.status(200).json(results.rows)

  })


}
);


module.exports = orderRouter;
