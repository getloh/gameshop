var express = require('express');
var gamesRouter = express.Router();
const db = require('./database');
const pool = db.pool;



gamesRouter.get('/', function(req, res, next) {

  pool.query('SELECT game_id, title, release, rating, image FROM games ORDER BY game_id ASC', (error, results) => {
    if (error) {
      throw error
    }
    res.status(200).json(results.rows)
  })

});

gamesRouter.get('/:id', function(req, res, next) {
  
  pool.query(`SELECT * FROM games WHERE game_id = ${req.params.id} ORDER BY game_id ASC`, (error, results) => {
    if (error) {
      throw error
    }
    res.status(200).json(results.rows)
  })

});


module.exports = gamesRouter;
