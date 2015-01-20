//jest.dontMock('../../src/model/soldier');
//
//describe('Soldier', function() {
//
//    var Player;
//    var Soldier;
//    var stefan;
//    var katherine;
//
//    beforeEach(function() {
//
//        Player = require('../../src/model/player');
//        Soldier = require('../../src/model/soldier');
//        stefan = new Player('Stefan', 100, 10);
//
//        var weapon = {name: 'Weapon', ap: 2};
//        katherine = new Soldier('Katherine', 100, 8, weapon);
//    });
//
//    describe('#origin_damage()', function() {
//        it('should return one number of origin_damage', function() {
//            var result = katherine.origin_damage();
//            expect(result).toBe(10);
//        }) ;
//    });
//
//    //describe('#do_attack()', function() {
//    //    it('should return the object that has one perproty of damage', function() {
//    //        var result = katherine.do_attack(stefan);
//    //        expect(result.damage).toBe(8);
//    //    });
//    //});
//    //
//    //describe('#attack_string()', function() {
//    //    it('should return player vs player attack string', function() {
//    //        var result = katherine.attack_string(stefan, {damage: 8});
//    //        expect(result).toBe('Katherine攻击了Stefan，Stefan受到了8点伤害，Stefan剩余生命：100');
//    //    });
//    //});
//
//    describe('#role()', function() {
//        it('should return the string that equal 士兵', function() {
//            var result = katherine.role();
//            expect(result).toBe('士兵');
//        });
//    });
//});