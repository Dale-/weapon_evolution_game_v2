jest.dontMock('../../src/model/soldier');
jest.dontMock('../../src/model/player');
jest.dontMock('../../src/model/weapon');

describe('Soldier', function() {

    var Player;
    var Soldier;
    var Weapon;
    var stefan;
    var katherine;
    var weapon;
    var armor

    beforeEach(function() {

        Player = require('../../src/model/player');
        Soldier = require('../../src/model/soldier');
        Weapon = require('../../src/model/weapon');

        armor = {name:'Armor', dp: 2};
        stefan = new Player('Stefan', 100, 10);
        weapon = new Weapon('Weapon', 2);
        katherine = new Soldier('Katherine', 100, 8, weapon, armor);
    });

    describe('#getAP()', function() {
        it('should return one player of ap', function() {
            var result = katherine.getAP();
            expect(result).toBe(10);
        });
    });

    describe('#origin_damage()', function() {
        it('should return one number of origin_damage', function() {
            var result = katherine.origin_damage(10);
            expect(result).toBe(8);
        }) ;
    });

    describe('#attack_string()', function() {
        it('should return player vs player attack string', function() {

            weapon.weapon_string = jest.genMockFn();
            weapon.weapon_string.mockReturnValue('用Weapon');

            var result = katherine.attack_string(stefan, {damage: 8});
            expect(result).toBe('士兵Katherine用Weapon攻击了Stefan，Stefan受到了8点伤害，Stefan剩余生命：100');
        });
    });

    describe('#role()', function() {
        it('should return the string that equal 士兵', function() {
            var result = katherine.role();
            expect(result).toBe('士兵');
        });
    });
});