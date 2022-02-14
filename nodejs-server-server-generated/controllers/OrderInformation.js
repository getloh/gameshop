'use strict';

var utils = require('../utils/writer.js');
var OrderInformation = require('../service/OrderInformationService');

module.exports.delete_order = function delete_order (req, res, next, id) {
  OrderInformation.delete_order(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.get_order_single = function get_order_single (req, res, next, id) {
  OrderInformation.get_order_single(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.get_orders = function get_orders (req, res, next) {
  OrderInformation.get_orders()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.get_user_orders = function get_user_orders (req, res, next, id) {
  OrderInformation.get_user_orders(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.post_order = function post_order (req, res, next, body) {
  OrderInformation.post_order(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
