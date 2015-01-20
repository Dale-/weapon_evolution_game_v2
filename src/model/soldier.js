function Soldier(name, hp, ap, weapon, armor) {
    Player.call(this, name, hp, ap);
    this.weapon = weapon;
    this.armor = armor;
}