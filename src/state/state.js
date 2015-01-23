var _ = require('lodash');

function State(times) {
    this.times = _.isUndefined(times) ? 1 : times;
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