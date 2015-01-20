var NoWeapon = require('./weapon');
var NoArmor = require('./armor');

function Soldier(name, hp, ap, weapon, armor) {

    Player.call(this, name, hp, ap);

    this.weapon = weapon ? weapon : new NoWeapon();
    this.armor = armor ? armor : new NoArmor();
}

Soldier.prototype = Object.create(Player.prototype);
Soldier.prototype.constructor = Soldier;

Soldier.prototype.origin_damage = function(ap) {
    return ap - this.armor.dp;
};