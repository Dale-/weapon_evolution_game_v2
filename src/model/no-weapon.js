var NoEffect = require('../effect/no-effect');

function NoWeapon() {
    this.ap = 0;
    this.effect = new NoEffect();
}

NoWeapon.prototype.weapon_string = function() {
    return '';
};

module.exports = NoWeapon;