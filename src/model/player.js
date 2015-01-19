var _ = require('lodash');

function Player(name, hp, ap) {
    this.name = name;
    this.hp = _.isUndefined(hp) ? 100 : hp;
    this.ap = _.isUndefined(ap) ? 10 : ap;
}

Player.prototype.isAlive = function() {
    return this.hp > 0;
};

Player.prototype.be_attacked = function(ap) {
    this.hp -= ap;
    return ap;
};

Player.prototype.do_attack = function(player) {
    var damage = player.be_attacked(this.ap);
    return {
        damage: damage
    };
};

Player.prototype.attack_string = function(player, attack_result) {
    return this.name + '攻击了' + player.name + '，' +
           player.name + '受到了' + attack_result.damage + '点伤害，' +
           player.name + '剩余生命：' + player.hp;
};

Player.prototype.attack = function(player) {
    var attack_result = this.do_attack(player);
    return this.attack_string(player, attack_result);
};



module.exports = Player;