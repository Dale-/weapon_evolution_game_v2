var Game = require('./game');
var Armor = require('./model/armor');
var Logger = require('./util/logger');
var Player = require('./model/player');
var Weapon = require('./model/weapon');
var Soldier = require('./model/soldier');

(function Run() {

    var logger = new Logger();
    var armor = new Armor('Armor', 1);
    var weapon = Weapon.all()[Weapon.random()];
    var stefan = new Player('Stefan', 100, 10);
    var katherine = new Soldier('Katherine', 100, 8, weapon, armor);

    var game = new Game(stefan, katherine, logger);
    game.fight();
})();