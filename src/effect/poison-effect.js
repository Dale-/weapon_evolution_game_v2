var _ = require('lodash');
var PoisonState = require('../state/poison-state');

function PoisonEffect(times, effectTime, damage) {
    this.times = _.isUndefined(times) ? 2 : times;
    this.effectTime = _.isUndefined(effectTime) ? 2 : effectTime;
    this.damage = _.isUndefined(damage) ? 2 : damage;
}

PoisonEffect.prototype.trigger = function() {
    var times = this.times;
    var effectTime = this.effectTime;
    var damage = this.damage;

    return {
        state: new PoisonState(times, effectTime, damage),

        is_damage: false,

        effect_string: function(name) {
            return name + '中毒了，';
        }
    };
};

module.exports = PoisonEffect;