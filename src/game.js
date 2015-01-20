function Game(attacker, defender, logger) {
    this.attacker = attacker;
    this.defender = defender;
    this.logger = logger;
}

Game.prototype.fight = function() {

    while(this.attacker.isAlive() && this.defender.isAlive()) {
        this.logger.log(this.attacker.attack(this.defender));
        if(this.defender.isAlive()) {
            this.logger.log(this.defender.attack(this.attacker) + '\n');
        }
    }
    if(this.attacker.isAlive()) {
        this.logger.log(this.defender.name + '被打败了');
    } else {
        this.logger.log(this.attacker.name + '被打败了');
    }
};

module.exports = Game;