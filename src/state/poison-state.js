var State = require('./state');

function PoisonState(times, effectTime, damage) {
    State.call(this, times, effectTime, damage);
    this.roundDamage = 2;
}

PoisonState.prototype = Object.create(State.prototype);
PoisonState.prototype.constructor = PoisonState;

PoisonState.prototype.name = function() {
    return '毒性';
};

PoisonState.prototype.merge = function(poisonState) {
    this.times ++;
    this.roundDamage = this.times * this.damage;
};

PoisonState.prototype.impact = function(human) {
        human.hp -= this.roundDamage;
        var string = human.role() + human.name + '受到了' + this.roundDamage + '点毒性伤害，' +
               human.name + '剩余生命：' + human.hp + '\n';
        this.reduceTimes();
        return string;
};

PoisonState.prototype.reduceTimes = function() {
    this.roundDamage = 2;
    this.times--;
};

module.exports = PoisonState;