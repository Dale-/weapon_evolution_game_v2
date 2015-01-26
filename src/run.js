var Game = require('./game');
var Armor = require('./model/armor');
var Logger = require('./util/logger');
var Player = require('./model/player');
var Weapon = require('./model/weapon');
var Soldier = require('./model/soldier');

(function Run() {

    var logger = new Logger();
    var armor = new Armor('Armor', 1);
    var weapon = Weapon.all()[4];
    var stefan = new Player('Stefan', 200, 10);
    var katherine = new Soldier('Katherine', 200, 8, weapon, armor);

    var game = new Game(katherine, stefan, logger);
    game.fight();
})();