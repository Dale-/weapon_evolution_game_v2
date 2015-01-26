var Player = require('./player');
var NoArmor = require('./no-armor');
var NoWeapon = require('./no-weapon');
var NormalState = require('../state/normal-state');
var PoisonState = require('../state/poison-state');

function Soldier(name, hp, ap, weapon, armor) {

    Player.call(this, name, hp, ap);
    this.weapon = weapon ? weapon : new NoWeapon();
    this.armor = armor ? armor : new NoArmor();
}

Soldier.prototype = Object.create(Player.prototype);
Soldier.prototype.constructor = Soldier;

Soldier.prototype.getAP = function() {
  return this.ap + this.weapon.ap;
};

Soldier.prototype.origin_damage = function(ap) {
    return ap - this.armor.dp;
};

Soldier.prototype.deal_state = function(defencer, attack_impact) {

    if (defencer.state.expire()) {
        defencer.state = new NormalState();
    }
    if (defencer.state.equal(attack_impact.state)) {
        defencer.state.merge(attack_impact.state);
    } else if(attack_impact.state.name() !== '正常') {
        defencer.state = attack_impact.state;
    } else if (attack_impact.state.name() === '正常') {
        defencer.state.reduceTimes();
    }

    return defencer.state;
};

Soldier.prototype.do_attack = function(defencer) {
    var attack_impact = this.weapon.triggerEffect();
    this.deal_state(defencer, attack_impact);
    var damage = defencer.be_attacked(this.getAP(), attack_impact);
    return {
        damage: damage,
        attack_impact: attack_impact
    };
};

Soldier.prototype.attack_string = function(defender, attack_result) {
    return this.role() + this.name + this.weapon.weapon_string() + '攻击了' + defender.role() + defender.name + '，' +
           defender.armor.armor_string(defender.name) + attack_result.attack_impact.effect_string(this.name) +
           defender.name + '受到了' + attack_result.damage + '点伤害，' +
           defender.name + '剩余生命：' + defender.hp + attack_result.attack_impact.state.impact(defender);
};

Soldier.prototype.role = function(ap) {
    return '士兵';
};

module.exports = Soldier;