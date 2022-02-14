'use strict';

var utils = require('../utils/writer.js');
var Inventory = require('../service/InventoryService');

module.exports.get_all_inventory = function get_all_inventory (req, res, next) {
  Inventory.get_all_inventory()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.get_inventory_id = function get_inventory_id (req, res, next, id) {
  Inventory.get_inventory_id(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.update_inventory_stock = function update_inventory_stock (req, res, next, id) {
  Inventory.update_inventory_stock(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
