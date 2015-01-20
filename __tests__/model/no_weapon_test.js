jest.dontMock('../../src/model/no-weapon');

describe('NoWeapon', function() {

    describe('#weapon_string()', function() {
        it('should return an empty string', function() {

            var NoWeapon = require('../../src/model/no-weapon');
            var noWeapon = new NoWeapon();
            var result = noWeapon.weapon_string();

            expect(result).toBe('');
        });
    });
});