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

module.exports = Weapon;