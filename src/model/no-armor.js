function NoArmor() {
    this.dp = 0;
}

NoArmor.prototype.armor_string = function() {
    return '';
};

module.exports = NoArmor;