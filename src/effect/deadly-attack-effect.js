var _ = require('lodash');

function DeadlyAttackEffect(multiple) {
  this.multiple = _.isUndefined(multiple) ? 3 : multiple;
}

DeadlyAttackEffect.prototype.trigger = function() {
  var multiple = this.multiple;

  return {

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