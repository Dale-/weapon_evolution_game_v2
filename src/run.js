var Player = require('./model/player');
var Logger = require('./util/logger');
var Game = require('./game');

(function Run() {
    var stefan = new Player('Stefan', 100, 10);
    var katherine = new Player('Katherine', 100, 8);
    var logger = new Logger();
    var game = new Game(stefan, katherine, logger);
    game.fight();
})();