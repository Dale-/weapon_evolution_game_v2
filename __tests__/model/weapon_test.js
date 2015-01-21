jest.dontMock('../../src/model/weapon');

describe('Weapon', function() {

    var Weapon;

    beforeEach(function() {
        Weapon = require('../../src/model/weapon');
    });

    describe('#weapon_string()', function() {

       it('should return one string of using weapon', function() {

           var weapon = new Weapon('weapon');
           var result = weapon.weapon_string();

           expect(result).toBe('用weapon');
       });
    });

    describe('.all()', function() {

        it('should return one weapon object', function() {

            var result = Weapon.all()[0];

            expect(result.name).toBe('晕锤');
        });
    });
});