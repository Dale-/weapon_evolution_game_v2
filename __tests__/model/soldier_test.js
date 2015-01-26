jest.dontMock('lodash');
jest.dontMock('../../src/model/armor');
jest.dontMock('../../src/state/state');
jest.dontMock('../../src/model/player');
jest.dontMock('../../src/model/weapon');
jest.dontMock('../../src/model/soldier');
jest.dontMock('../../src/model/no-armor');
jest.dontMock('../../src/effect/no-effect');
jest.dontMock('../../src/state/normal-state');
jest.dontMock('../../src/state/poison-state');

describe('Soldier', function() {

    var Armor;
    var armor;
    var damon;
    var Weapon;
    var weapon;
    var stefan;
    var Player;
    var Soldier;
    var katherine;
    var normalState;
    var NormalState;
    var poisonState;
    var PoisonState;

    beforeEach(function() {

        Armor = require('../../src/model/armor');
        Player = require('../../src/model/player');
        Weapon = require('../../src/model/weapon');
        Soldier = require('../../src/model/soldier');
        NormalState = require('../../src/state/normal-state');
        PoisonState = require('../../src/state/poison-state');

        armor = new Armor('Armor', 2);
        normalState = new NormalState();
        poisonState = new PoisonState(1);
        weapon = new Weapon('Weapon', 2);
        stefan = new Player('Stefan', 100, 10);
        damon = new Soldier('Damon', 100, 12, weapon, armor);
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
    //Soldier.prototye.deal_state = function(defencer, attack_impact) {
    describe('#deal_state', function() {
        it('should return the same state after merge', function() {
            stefan.state = poisonState;
            var result = damon.deal_state(stefan, {state: poisonState});
            expect(result.name()).toBe('毒性');
        });

        it('should return newState', function() {

        });
    });

    describe('#attack_string()', function() {
        it('should return soldier vs player attack string', function() {

            weapon.weapon_string = jest.genMockFn();
            weapon.weapon_string.mockReturnValue('用Weapon');

            var result = katherine.attack_string(stefan, {damage: 8,
                                                          attack_impact:{
                                                              effect_string : function(name) {return '';}
                                                          }});
            expect(result).toBe('士兵Katherine用Weapon攻击了平民Stefan，Stefan受到了8点伤害，Stefan剩余生命：100');
        });

        it('should return soldier vs soldier attack string', function() {

            weapon.weapon_string = jest.genMockFn();
            weapon.weapon_string.mockReturnValue('用Weapon');

            var result = katherine.attack_string(damon, {damage: 8,
                                                         attack_impact:{
                                                             effect_string : function(name) {return '';}
                                                         }});
            expect(result).toBe('士兵Katherine用Weapon攻击了士兵Damon，' +
                                'Damon用Armor防御了2点伤害，Damon受到了8点伤害，Damon剩余生命：100');
        });
    });

    describe('#role()', function() {
        it('should return the string that equal 士兵', function() {
            var result = katherine.role();
            expect(result).toBe('士兵');
        });
    });
});