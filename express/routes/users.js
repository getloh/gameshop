var express = require('express');
var userRouter = express.Router();
const db = require('./database');
const pool = db.pool;
const session = require('./login');


/* Retrieve information relating to the logged in user */
userRouter.get('/:id', session.authentication, function(req, res, next) {
  pool.query(`SELECT user_id, firstname, lastname, email, address, postcode FROM users WHERE user_id = ${req.params.id}`, (error, results) => {
    if (error) {
      throw error
    }
    let resp = results.rows[0];
    res.status(200).json(resp);
  })
});

// Amend user information
userRouter.put('/:id', session.authentication, async function (req, res, next){

  if (req.body.firstname){
    pool.query(`UPDATE users SET firstname = $1 WHERE user_id = $2`,[req.body.firstname, req.params.id], (error, results) => {
      if (error) {        throw error      }
    })
  }

  if (req.body.lastname){
    pool.query(`UPDATE users SET lastname = $1 WHERE user_id = $2`,[req.body.lastname, req.params.id], (error, results) => {
      if (error) {        throw error      }
    })
  }

  if (req.body.email){
    pool.query(`UPDATE users SET email = $1 WHERE user_id = $2`,[req.body.email, req.params.id], (error, results) => {
      if (error) {        throw error      }
    })
  }
  if (req.body.address){
    pool.query(`UPDATE users SET address = $1 WHERE user_id = $2`,[req.body.address, req.params.id], (error, results) => {
      if (error) {        throw error      }
    })
  }
  if (req.body.password){
    pool.query(`UPDATE users SET password = $1 WHERE user_id = $2`,[req.body.password, req.params.id], (error, results) => {
      if (error) {        throw error      }
    })
  }
  if (req.body.postcode){
    pool.query(`UPDATE users SET postcode = $1 WHERE user_id = $2`,[req.body.postcode, req.params.id], (error, results) => {
      if (error) {        throw error      }
    })
  }
  res.status(202).send("Request recieved");
})

// For creation of new users, takes JSON, returns JSON
userRouter.post ('/new', function (req, res, next){
  console.log(`${req.body.firstname}, ${req.body.lastname}, ${req.body.email}, ${req.body.password}, ${req.body.address},${req.body.postcode}`)
  
  pool.query(`
    INSERT INTO users (firstname, lastname, email, password, address, postcode) 
    VALUES ($1, $2, $3, $4, $5, $6)`, [req.body.firstname, req.body.lastname, req.body.email, req.body.password, req.body.address, req.body.postcode], (error, results) => {
    if (error) {
      throw error
    }
    console.log(`New user created successfully - ${req.body.firstname} ${req.body.lastname}`)
  })

  pool.query(`SELECT user_id, firstname, lastname, email, address, postcode FROM users WHERE email = $1`,[req.body.email], (error, results) => {
    if (error) {
      throw error
    }
    res.status(200).json(results.rows)
  })
})







module.exports = userRouter;
