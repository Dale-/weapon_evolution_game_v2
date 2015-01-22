jest.dontMock('../../src/effect/deadly-attack-effect');

describe('DeadlyAttackEffect', function() {

    var DeadlyAttackEffect;
    var deadlyAttackEffect;

    beforeEach(function() {
        DeadlyAttackEffect = require('../../src/effect/deadly-attack-effect');
        deadlyAttackEffect = new DeadlyAttackEffect();
    });

    describe('#trigger()', function() {
        it('should return true that point DeadlyAttackEffect has damage', function() {

            var result = deadlyAttackEffect.trigger();
            expect(result.is_damage).toBe(true);
        });
    });
});