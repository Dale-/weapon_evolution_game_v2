var _ = require('lodash');

function Armor(name, dp) {
    this.name = name;
    this.dp = _.isUndefined(dp) ? 1 : dp;
}

Armor.prototype.armor_string = function() {
    return '用' + this.name +
           '防御了' + this.dp + '点伤害，';
};

module.exports = Armor;