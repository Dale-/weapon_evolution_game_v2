var _ = require('lodash');
var FireState = require('../state/fire-state');

function FireEffect(times, effectTime, damage) {
    this.times = _.isUndefined(times) ? 2 : times;
    this.effectTime = _.isUndefined(effectTime) ? 2 : effectTime;
    this.damage = _.isUndefined(damage) ? 2 : damage;
}

FireEffect.prototype.trigger = function() {
    var times = this.times;
    var effectTime = this.effectTime;
    var damage = this.damage;

    return {
        state: new FireState(times, effectTime, damage),

        is_damage: false,

        effect_string: function(name) {
            return name + '着火了，';
        }
    };
};

module.exports = FireEffect;