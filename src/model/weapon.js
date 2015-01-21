var NoEffect = require('../effect/no-effect');
var _ = require('lodash');

function Weapon(name, ap, effect) {
    this.name = name;
    this.ap = _.isUndefined(ap) ? 1 : ap;
    this.effect = effect ? effect : new NoEffect();
}

Weapon.prototype.weapon_string = function() {
  return '用' + this.name;
};

Weapon.all = function() {
  return[
      new Weapon('晕锤', 2),
      new Weapon('火焰剑', 2),
      new Weapon('优质毒剑', 3),
      new Weapon('利剑', 3),
      new Weapon('寒冰剑', 2)
  ];
};

module.exports = Weapon;