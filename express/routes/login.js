var express = require('express');
var Router = express.Router();
const db = require('./database');
const pool = db.pool;
const session = require('./database-private');

const SERVER = "http://localhost:3000"

Router.post('/', function(req, res, next){

    if (!req.body.password ){
      throw new Error("Credentials invalid")
    }
    // const user = {email: req.body.email, password: req.body.password};
    pool.query('SELECT * FROM users WHERE email = $1;',[req.body.email], (error, results) => {
      console.log(`database password says ${results.rows[0].password}`);
      console.log(`posted password says ${req.body.password}`);
      if (error) {
        throw error
      };
      if (results.rows[0].password === req.body.password){
        res.cookie('session_id', session.generateId());
        res.cookie('email', req.body.email);
        res.cookie('user_id', results.rows[0].user_id);
        res.redirect(`${SERVER}/shop?message=Logged%20in`);
      }
      else {
        res.redirect(`${SERVER}/login?auth=fail`);
        res.status(500);
      };
    })
})

// authentication middleware
const authentication = (req, res, next) => {
    if (req.cookies.session_id === undefined){
      res.status(403).send("you need to log in for this action.");
      throw error;
    };
    if (session.checkId(req.cookies.session_id)){
      next();
    }
    // else {
    //   res.status(403).send("authentication fail");
    // }
}


module.exports = {Router, authentication};