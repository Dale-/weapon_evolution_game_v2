var _ = require('lodash');
var NoArmor = require('./no-armor');
var NormalState = require('../state/normal-state');

function Player(name, hp, ap, armor) {

    this.name = name;
    this.hp = _.isUndefined(hp) ? 100 : hp;
    this.ap = _.isUndefined(ap) ? 10 : ap;
    this.armor = armor ? armor : new NoArmor();
    this.state = new NormalState();
}

Player.prototype.attack = function(player) {
    var attack_result = this.do_attack(player);
    return this.attack_string(player, attack_result);
};

Player.prototype.origin_damage = function(ap) {
  return ap;
};

Player.prototype.getAP = function(){
    return this.ap;
};

Player.prototype.isAlive = function() {
    return this.hp > 0;
};

Player.prototype.be_attacked = function(ap, attack_impact) {
    var damage = this.calculate_impacted_damage(ap, attack_impact);
    this.hp -= damage;
    return damage;
};

Player.prototype.do_attack = function(defencer) {
    var damage = defencer.be_attacked(this.getAP());
    return {
        damage: damage
    };
};

Player.prototype.calculate_impacted_damage = function(ap, attack_impact) {
  var damage = this.origin_damage(ap);
  if(attack_impact && attack_impact.is_damage) {
      return attack_impact.impact(damage);
  }
  return damage;
};

Player.prototype.attack_string = function(defender, attack_result) {
    //console.log(attack_result);
    return this.role() +
           this.name + '攻击了' + defender.role() + defender.name + '，' +
           defender.armor.armor_string(defender.name) +
           defender.name + '受到了' + attack_result.damage + '点伤害，' +
           defender.name + '剩余生命：' + defender.hp;
};

Player.prototype.role = function() {
  return '平民';
};

module.exports = Player;