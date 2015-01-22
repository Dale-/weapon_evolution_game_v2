jest.dontMock('lodash');
jest.dontMock('../../src/model/weapon');
jest.dontMock('../../src/effect/no-effect');

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

    describe('#triggerEffect()', function() {

       it('should return object of effect', function() {

           Math.random = jest.genMockFn();
           Math.random.mockReturnValue(0.99);

           var weapon = Weapon.all()[3];
           var result = weapon.triggerEffect();

           expect(result.effect_string('empty')).toEqual('');
       }) ;
    });

    describe('.all()', function() {
        it('should return one weapon object', function() {

            var result = Weapon.all()[0];

            expect(result.name).toBe('晕锤');
        });
    });
});