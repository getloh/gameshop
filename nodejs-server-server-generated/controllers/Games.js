'use strict';

var utils = require('../utils/writer.js');
var Games = require('../service/GamesService');

module.exports.get_games = function get_games (req, res, next) {
  Games.get_games()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.get_single_game = function get_single_game (req, res, next, id) {
  Games.get_single_game(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
