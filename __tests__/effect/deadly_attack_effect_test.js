jest.dontMock('lodash');
jest.dontMock('../../src/state/normal-state');
jest.dontMock('../../src/effect/deadly-attack-effect');

describe('DeadlyAttackEffect', function() {

    var result;
    var DeadlyAttackEffect;
    var deadlyAttackEffect;

    beforeEach(function() {
        DeadlyAttackEffect = require('../../src/effect/deadly-attack-effect');
        deadlyAttackEffect = new DeadlyAttackEffect();
        result = deadlyAttackEffect.trigger();
    });

    describe('#trigger()', function() {
        it('should return true that point DeadlyAttackEffect has damage', function() {
            expect(result.is_damage).toBe(true);
        });

        it('should return number that is damagePoint', function() {

            expect(result.impact(3)).toBe(9);
        });

        it('should return string that is NormalState of name', function() {

            expect(result.state.name()).toBe('正常');
        });
    });
});