jest.dontMock('lodash');
jest.dontMock('../../src/state/state');
jest.dontMock('../../src/state/fire-state');
jest.dontMock('../../src/effect/fire-effect');

describe('FireEffect', function() {

    var result;
    var FireEffect;
    var fireEffect;

    beforeEach(function() {
        FireEffect = require('../../src/effect/fire-effect');
        fireEffect = new FireEffect();
        result = fireEffect.trigger();
    });

    describe('#trigger()', function() {
        it('should return false that point PoisonEffect has damage immediately', function() {
            expect(result.is_damage).toBe(false);
        });

        it('should return string that is name 着火了', function() {

            expect(result.effect_string('dale')).toBe('dale着火了，');
        });

        it('should return string that is PoisonEffect of name', function() {

            expect(result.state.name()).toBe('火焰');
        });
    });
});