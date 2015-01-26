var _ = require('lodash');
var DizzyState = require('../state/dizzy-state');

function DizzyEffect(times, effectTime, damage) {
    this.times = _.isUndefined(times) ? 2 : times;
    this.effectTime = _.isUndefined(effectTime) ? 2 : effectTime;
    this.damage = _.isUndefined(damage) ? 0 : damage;
}

DizzyEffect.prototype.trigger = function() {
    var times = this.times;
    var effectTime = this.effectTime;
    var damage = this.damage;

    return {
        state: new DizzyState(times, effectTime, damage),

        is_damage: false,

        effect_string: function(name) {
            return name + '晕倒了，';
        }
    };
};

module.exports = DizzyEffect;