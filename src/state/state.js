var _ = require('lodash');

function State(times, effectTime, damage) {
    this.times = _.isUndefined(times) ? 0 : times;
    this.effectTime = _.isUndefined(effectTime) ? 0 : effectTime;
    this.damage = _.isUndefined(damage) ? 0 : damage;
}

State.prototype.equal = function(state) {
  return this.name() === state.name();
};

State.prototype.expire = function() {
  return this.times <= 0;
};

State.prototype.name = function() {
    return '';
};

State.prototype.merge = function(newState) {
    return this;
};

State.prototype.reduceTimes = function() {
    return this;
};

State.prototype.impact = function(human) {
    return '';
};

module.exports = State;