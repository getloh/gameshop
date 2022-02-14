'use strict';

var utils = require('../utils/writer.js');
var UserInfo = require('../service/UserInfoService');

module.exports.get_user_info = function get_user_info (req, res, next, id) {
  UserInfo.get_user_info(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.new_user = function new_user (req, res, next, body) {
  UserInfo.new_user(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.update_user_info = function update_user_info (req, res, next, body, id) {
  UserInfo.update_user_info(body, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
