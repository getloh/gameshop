var express = require('express');
var gamesRouter = express.Router();
const db = require('./database');
const pool = db.pool;
const login = require('./login')

// Retrieves all game info
gamesRouter.get('/',function(req, res, next) {

  pool.query('SELECT game_id, title, release, rating, image FROM games ORDER BY game_id ASC', (error, results) => {
    if (error) {
      throw error
    }
    res.status(200).json(results.rows)
  })

});

gamesRouter.get('/inv', function (req, res, next){
  pool.query(`
  SELECT games.game_id, games.title, games.release, games.rating, games.image, inventory.inventory_id, inventory.platform, inventory.stock, inventory.price, inventory.discount FROM games
    LEFT JOIN inventory
    ON games.game_id = inventory.game_id 
    ORDER BY games.game_id ASC`, (error, results) => {
    if (error) {
      throw error
    }
    let resp = results.rows
    res.status(200).json(resp);
  })
})

// Retrieves detailed info on a single game_ID
gamesRouter.get('/:id', function(req, res, next) {
  
  pool.query(`SELECT * FROM games WHERE game_id = ${req.params.id} ORDER BY game_id ASC`, (error, results) => {
    if (error) {
      throw error
    }
    let resp = results.rows[0]
    res.status(200).json(resp);
  })

});


module.exports = gamesRouter;
