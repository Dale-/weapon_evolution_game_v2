var _ = require('lodash');
var FrozenState = require('../state/frozen-state');

function FrozenEffect(times, effectTime, damage) {
    this.times = _.isUndefined(times) ? 1 : times;
    this.effectTime = _.isUndefined(effectTime) ? 3 : effectTime;
    this.damage = _.isUndefined(damage) ? 0 : damage;
}

FrozenEffect.prototype.trigger = function() {
    var times = this.times;
    var effectTime = this.effectTime;
    var damage = this.damage;

    return {
        state: new FrozenState(times, effectTime, damage),

        is_damage: false,

        effect_string: function(name) {
            return name + '冻僵了，';
        }
    };
};

module.exports = FrozenEffect;