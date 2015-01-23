var State = require('./state');

function NormalState(times) {
    State.call(this, times);
}

NormalState.prototype = Object.create(State.prototype);
NormalState.prototype.constructor = NormalState;

NormalState.prototype.name = function() {
    return '正常';
}

NormalState.prototype.expire = function() {
    return false;
}

NormalState.prototype.impact = function(human) {
    return '';
};

module.exports = NormalState;