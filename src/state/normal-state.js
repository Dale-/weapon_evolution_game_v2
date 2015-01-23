var State = require('./state');

function NormalState(times) {
    State.call(this, times);
}

NormalState.prototype = Object.create(State.prototoye);
NormalState.prototype.constructor = NormalState;