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
    this.times = this.times >= 1 ? this.times + 1: (this.times + this.effectTime -1);
    if(this.times >= (this.effectTime - 1)) {
        this.roundDamage = 2 * this.damage;
    }
};

PoisonState.prototype.impact = function(human) {
    if(this.times > 0) {
        human.hp -= this.roundDamage;
        this.reduceTimes();
        return human.role + human.name + '受到了' + this.roundDamage + '点毒性伤害，' +
               human.name + '剩余生命：' + human.hp + '\n';
    } else {
        return '';
    }
};

PoisonState.prototype.reduceTimes = function() {
    this.times = this.times > 0 ? this.times - 1: this.times;
};

module.exports = PoisonState;