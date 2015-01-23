var _ = require('lodash');
var NormalState = require('../state/normal-state');

function DeadlyAttackEffect(multiple) {
  this.multiple = _.isUndefined(multiple) ? 3 : multiple;
}

DeadlyAttackEffect.prototype.trigger = function() {
  var multiple = this.multiple;

  return {
      state: new NormalState(),

      is_damage: true,

      impact: function(damage) {
        return (damage * multiple);
      },

      effect_string: function(name) {
        return name + '发动了致命一击,';
      }
  };
};

module.exports = DeadlyAttackEffect;