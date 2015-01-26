var State = require('./state');

function FireState(times, effectTime, damage) {
    State.call(this, times, effectTime, damage);
    this.roundDamage = 2;
}

FireState.prototype = Object.create(State.prototype);
FireState.prototype.constructor = FireState;

FireState.prototype.name = function() {
    return '火焰';
};

FireState.prototype.merge = function(fireState) {
    this.times ++;
    this.roundDamage = this.times * this.damage;
};

FireState.prototype.impact = function(human) {
    human.hp -= this.roundDamage;
    var string = human.role() + human.name + '受到了' + this.roundDamage + '点火焰伤害，' +
        human.name + '剩余生命：' + human.hp + '\n';
    this.reduceTimes();
    return string;
};

FireState.prototype.reduceTimes = function() {
    this.roundDamage = 2;
    this.times--;
};

module.exports = FireState;