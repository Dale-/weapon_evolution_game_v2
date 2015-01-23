var _ = require('lodash');

function State(times, effectTime, damage) {
    this.times = _.isUndefined(times) ? 1 : times;
    this.effectTime = _.isUndefined(effectTime) ? 2 : effectTime;
    this.damage = _.isUndefined(damage) ? 1 : damage;
}

State.prototype.equal = function(state) {
  return this.name() === state.name();
};

State.prototype.expire = function() {
  return this.times <= 0;
};

State.prototype.name = function() {
    return '';
}

module.exports = State;