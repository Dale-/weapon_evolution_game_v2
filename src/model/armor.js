var _ = require('lodash');

function Armor(name, dp) {
    this.name = name;
    this.dp = _.isUndefined(dp) ? 1 : dp;
}

module.exports = Armor;