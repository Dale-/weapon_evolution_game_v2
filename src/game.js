function Game(attacker, defender, logger) {
    this.attacker = attacker;
    this.defender = defender;
    this.logger = logger;
}

Game.prototype.fight = function() {

};

module.exports = Game;