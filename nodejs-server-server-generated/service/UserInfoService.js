'use strict';


/**
 * Retrieve information relating to the logged in user
 * Will use userdata to fetch information relating to the user
 *
 * id Integer The id of the order.
 * no response value expected for this operation
 **/
exports.get_user_info = function(id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Creates a new user
 * for creation of new users
 *
 * body User A new order object (optional)
 * no response value expected for this operation
 **/
exports.new_user = function(body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Amend user info
 * Amend user info
 *
 * body User Update user information (optional)
 * id Integer The id of the order.
 * no response value expected for this operation
 **/
exports.update_user_info = function(body,id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

