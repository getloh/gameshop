var express = require('express');
var orderRouter = express.Router();
const db = require('./database');
const pool = db.pool;
const login = require('./login');


// GET all order information (admin function)
orderRouter.get('/', login.staffAuthentication, function(req, res, next) {
  pool.query('SELECT * FROM orders ORDER BY order_id ASC', (error, results) => {
    if (error) {
      throw error
    }
    res.status(200).json(results.rows)
  })
});

// GETs a single order via Order_ID
orderRouter.get('/:id', login.authentication, function(req, res, next) {
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
orderRouter.get('/user/:id', login.authentication, function(req, res, next) {
  pool.query(`SELECT * FROM orders WHERE user_id = ${req.params.id} ORDER BY order_id DESC`, (error, results) => {
    if (error) {
      throw error
    }
    res.status(200).json(results.rows)
  })
});

// Function for getting stock
async function getStock(inv_id){
  let response;
  try {
    response = await pool.query(`SELECT stock FROM inventory WHERE inventory_id = ${inv_id}`)
  } catch (error){
    throw error;
  }
  return response.rows
}

// POST new order - will generate an order in orders DB
orderRouter.post('/new', login.authentication, async function(req, res, next) {

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
    const inv_id = cart[i].inventory_id;
    const quantitySold = cart[i].quantity;
    
    let currentStock = await getStock(inv_id);
    currentStock = currentStock[0].stock;

    if (currentStock >= quantitySold) {

    pool.query(`INSERT INTO orders (user_id, inventory_id, quantity, payment, order_date) VALUES ($1, $2, $3, $4, $5)`,
    [user.user_id, cart[i].inventory_id, cart[i].quantity, "VISA 1234567812345678", today], (error, results) => {
      if (error) {
        throw error
      }
    });
    


    pool.query(
      `UPDATE inventory SET stock = ${Number(currentStock-quantitySold)} WHERE inventory_id = ${inv_id}`,
      (error, results) => {
        if (error) {
          throw error
        }
        console.log(`Stock has been modified Stock is now ${Number(currentStock-quantitySold)} for stock_ID ${inv_id}`)
      })
    }
    else {
      throw new Error("Insufficient Stock, an item may be sold out");
    }
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
