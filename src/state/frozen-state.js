var _ = require('lodash');
var State = require('./state');

function FrozenState(times, effectTime, damage) {
    State.call(this, times, effectTime, damage);
    this.frozenStatus = [0];
}

FrozenState.prototype = Object.create(State.prototype);
FrozenState.prototype.constructor = FrozenState;

FrozenState.prototype.name = function() {
    return '冰冻';
};

FrozenState.prototype.merge = function(fireState) {
    this.frozenStatus.unshift(0);
};

FrozenState.prototype.impact = function(human) {
    this.addTimes();
    if(this.frozenStatus && this.frozenStatus[this.frozenStatus.length -1] === this.effectTime) {
        this.reduceTimes();
        return human.role() + human.name + '冻得直哆嗦，没有击中\n';
    } else {
        return '';
    }
};

FrozenState.prototype.addTimes = function() {
    if(this.frozenStatus) {
        this.frozenStatus = _.map(this.frozenStatus, function(num) {
            return num + 1;
        });
    }
};

FrozenState.prototype.reduceTimes = function() {
    this.frozenStatus.pop();
};

module.exports = FrozenState;