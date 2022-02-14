'use strict';


/**
 * Delete an order
 * Deletes an order from the database
 *
 * id String The id of the order.
 * no response value expected for this operation
 **/
exports.delete_order = function(id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Gets a single order via order_id
 * Retrieves the order information from SQL
 *
 * id String The id of the order.
 * no response value expected for this operation
 **/
exports.get_order_single = function(id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Get order data
 * managerial level retrieve order data
 *
 * no response value expected for this operation
 **/
exports.get_orders = function() {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Get orders made by a user {id}
 * Retrieve array of objects for user relating to orders
 *
 * id String The id of the order.
 * no response value expected for this operation
 **/
exports.get_user_orders = function(id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * New order creation
 * Creates a new order, posts the data to SQL
 *
 * body Order A new order object (optional)
 * no response value expected for this operation
 **/
exports.post_order = function(body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

