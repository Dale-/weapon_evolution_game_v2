jest.dontMock('../../src/model/armor');
jest.dontMock('../../src/state/state');
jest.dontMock('../../src/model/player');
jest.dontMock('../../src/model/soldier');
jest.dontMock('../../src/model/no-armor');

describe('Player', function() {

    var armor;
    var Armor;
    var weapon;
    var Weapon;
    var stefan;
    var Player;
    var Soldier;
    var caroline;
    var katherine;

    beforeEach(function() {

        Armor = require('../../src/model/armor');
        Player = require('../../src/model/player');
        Weapon = require('../../src/model/weapon');
        Soldier = require('../../src/model/soldier');


        armor = new Armor('Armor', 2);
        weapon = new Weapon('Weapon', 2);
        stefan = new Player('Stefan', 100, 10);
        katherine = new Player('Katherine', 100, 8);
        caroline = new Soldier('Caroline', 100, 6, weapon, armor);
    });

    describe('#attack()', function() {
        it('should return attack reduce hp', function() {
            var result = katherine.attack(stefan);
            expect(stefan.hp).toBe(92);
        });

        it('should return player vs player attack string', function() {
            katherine.state = {impact: function(defender) {return '';}};
            var result = katherine.attack(stefan);
            expect(result).toBe('平民Katherine攻击了平民Stefan，Stefan受到了8点伤害，Stefan剩余生命：92');
        });

        it('should return player vs soldier attack string', function() {
            katherine.state = {impact: function(defender) {return '';}};
            var result = katherine.attack(caroline);
            expect(result).toBe('平民Katherine攻击了士兵Caroline，Caroline用Armor防御了2点伤害，' +
                                'Caroline受到了6点伤害，Caroline剩余生命：94');
        });
    });

    describe('#origin_damage()', function() {
       it('should return one number of origin_damage', function() {
           var result = stefan.origin_damage(10);
           expect(result).toBe(10);
       }) ;
    });

    describe('#getAP()', function() {
       it('should return one player of ap', function() {
           var result = stefan.getAP(10);
           expect(result).toBe(10);
       });
    });

    describe('#isAlive()', function() {
        it('should return true when hp greater than o', function() {
            var player = new Player('player', 1);
            expect(player.isAlive()).toBe(true);
        });

        it('should return true when hp equal o', function() {
            var player = new Player('player', 0);
            expect(player.isAlive()).toBe(false);
        });

        it('should return true when hp less than o', function() {
            var player = new Player('player', -1);
            expect(player.isAlive()).toBe(false);
        });
    });

    describe('#be_attacked()', function() {
        it('should return attacker ap', function() {
            var result = stefan.be_attacked(10);
            expect(result).toBe(10);
        });

        it('should get the hp that has been reduce', function() {
            var result = stefan.be_attacked(10);
            expect(stefan.hp).toBe(90);
        });
    });

    describe('#do_attack()', function() {
        it('should return the object that has one perproty of damage', function() {
            var result = katherine.do_attack(stefan);
            expect(result.damage).toBe(8);
        });
    });

    describe('#calculate_impacted_damage()', function() {
        it('should return calculated damage', function() {
            var result = caroline.calculate_impacted_damage(10);
            expect(result).toBe(8);
        });
    });

    describe('#attack_string()', function() {
        it('should return player vs player attack string', function() {
            katherine.state = {impact: function(defender) {return '';}};
            var result = katherine.attack_string(stefan, {damage: 8});
            expect(result).toBe('平民Katherine攻击了平民Stefan，Stefan受到了8点伤害，Stefan剩余生命：100');
        });

        it('should return player vs soldier attack string', function() {
            katherine.state = {impact: function(defender) {return '';}};
            var result = katherine.attack_string(caroline, {damage: 6});
            expect(result).toBe('平民Katherine攻击了士兵Caroline，Caroline用Armor防御了2点伤害，' +
            'Caroline受到了6点伤害，Caroline剩余生命：100');
        });
    });

    describe('#role()', function() {
       it('should return the string that equal 平民', function() {
           var result = katherine.role();
           expect(result).toBe('平民');
       });
    });
});