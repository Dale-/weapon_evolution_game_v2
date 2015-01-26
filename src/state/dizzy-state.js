var State = require('./state');

function DizzyState(times, effectTime, damage) {
    State.call(this, times, effectTime, damage);
}

DizzyState.prototype = Object.create(State.prototype);
DizzyState.prototype.constructor = DizzyState;

DizzyState.prototype.name = function() {
    return '眩晕';
};

DizzyState.prototype.merge = function(fireState) {
    this.times += this.effectTime;
};

DizzyState.prototype.impact = function(human) {
    var string = human.role() + human.name + '晕倒了，无法攻击，眩晕还剩：' +
                 (this.times - 1) + '轮\n';
    this.reduceTimes();
    return string;
};

DizzyState.prototype.reduceTimes = function() {
    this.times--;
};

module.exports = DizzyState;