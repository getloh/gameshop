var express = require('express');
var inventoryRouter = express.Router();
// const inventoryRouter = require('express-promise-router');
const db = require('./database');
const pool = db.pool;


// Retrieves all inventory information
inventoryRouter.get('/', function(req, res, next) {

  pool.query('SELECT * FROM inventory ORDER BY inventory_id ASC', (error, results) => {
    if (error) {
      throw error
    }

    res.status(200).json(results.rows)
    
  })

});

// Retrieves info relating to a single inventory_id
inventoryRouter.get('/:id', function(req, res, next) {
  pool.query(`
  SELECT * FROM inventory 
  LEFT JOIN games
  ON inventory.game_id = games.game_id 
  WHERE inventory_id = ${req.params.id}
  `, (error, results) => {
    if (error) {
      throw error
    }
    let result = results.rows[0];
    res.status(200).json(result);

  })
});

// Retrieves array of inventory relating to game_id
inventoryRouter.get('/game/:id', function(req, res, next) {
  pool.query(`SELECT * FROM inventory WHERE game_id = ${req.params.id} ORDER BY inventory_id ASC`, (error, results) => {
    if (error) {
      throw error
    }
    res.status(200).json(results.rows);

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

// Retrieves JSON relating to order info and updates the stock for an ID
inventoryRouter.put('/:id', async function(req, res, next) {
  const inv_id = req.body.inventory_id;
  const quantitySold = req.body.quantity;
  
  let currentStock = await getStock(inv_id);
  currentStock = currentStock[0].stock;

  pool.query(
    `UPDATE inventory SET stock = ${Number(currentStock-quantitySold)} WHERE inventory_id = ${inv_id}`,
    (error, results) => {
      if (error) {
        throw error
      }
      res.status(200).send(`Stock has been modified Stock is now ${Number(currentStock-quantitySold)} for stock_ID ${inv_id}`)
    })
});

module.exports = inventoryRouter;
