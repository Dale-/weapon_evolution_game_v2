var _ = require('lodash');
var NoEffect = require('../effect/no-effect');
var DeadlyAttackEffect = require('../effect/deadly-attack-effect');


function Weapon(name, ap, effect) {
    this.name = name;
    this.ap = _.isUndefined(ap) ? 1 : ap;
    this.effect = effect ? effect : new NoEffect();
}

Weapon.prototype.weapon_string = function() {
  return '用' + this.name;
};

Weapon.prototype.triggerEffect = function() {
    var size = this.effect.length + 1;
    var region = 1 / size;
    var random = Math.random();
    var index = 0;

    for(var i = 1; i <= size; i++) {
        if(random < i * region && random > (i - 1) * region) {
            index = i - 1;
        }
    }

    if(index === this.effect.length) {
        this.effect = new NoEffect().trigger();
        return this.effect;
    } else {
        this.effect = this.effect[i];
        return this.effect.trigger();
    }
};

Weapon.all = function() {
  return[
      new Weapon('晕锤', 2, []),
      new Weapon('火焰剑', 2, []),
      new Weapon('优质毒剑', 3, []),
      new Weapon('利剑', 3, [new DeadlyAttackEffect()]),
      new Weapon('寒冰剑', 2, [])
  ];
};

Weapon.random = function() {
    var number = Math.random();
    if(number <= 0.2) {
        return 0;

    } else if (number <= 0.4) {
        return 1;

    } else if (number <= 0.6) {
        return 2;

    } else if (number <= 0.8) {
        return 3;

    } else {
        return 4;
    }
};

module.exports = Weapon;