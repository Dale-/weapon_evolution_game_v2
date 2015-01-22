function DeadlyAttackEffect() {

}

DeadlyAttackEffect.prototype.trigger = function() {
  return {
      is_damage: true
  };
};

module.exports = DeadlyAttackEffect;