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
    res.status(200).json(results.rows)
  })
});

// DELETEs an order ?
orderRouter.delete('/:id', function(req, res, next) {
  res.status(405).send("Function not available yet")
});

// GET a user's orders
orderRouter.get('/user/:id', function(req, res, next) {
  pool.query(`SELECT * FROM orders WHERE user_id = ${req.params.id}`, (error, results) => {
    if (error) {
      throw error
    }
    res.status(200).json(results.rows)
  })
});

// POST new order - will generate an order in orders DB
orderRouter.post('/new', async function(req, res, next) {
  pool.query(`INSERT INTO orders (user_id, inventory_id, quantity, payment) VALUES ($1, $2, $3, $4)`,
  [req.body.user_id, req.body.inventory_id, req.body.quantity, req.body.payment], (error, results) => {
    if (error) {
      throw error
    }
  })
  await new Promise(resolve => setTimeout(resolve, 500));
  pool.query(`SELECT * FROM orders WHERE user_id = ${req.body.user_id} ORDER BY order_id DESC`, (error, results) => {
    if (error) {
      throw error
    }
    console.log(results.rows);
    res.status(200).json(results.rows[0])
  })
});


module.exports = orderRouter;
