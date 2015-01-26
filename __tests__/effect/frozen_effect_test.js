jest.dontMock('lodash');
jest.dontMock('../../src/state/state');
jest.dontMock('../../src/state/frozen-state');
jest.dontMock('../../src/effect/frozen-effect');

describe('DizzyEffect', function() {

    var result;
    var FrozenEffect;
    var frozenEffect;

    beforeEach(function() {
        FrozenEffect = require('../../src/effect/frozen-effect');
        frozenEffect = new FrozenEffect();
        result = frozenEffect.trigger();
    });

    describe('#trigger()', function() {
        it('should return false that point PoisonEffect has damage immediately', function() {
            expect(result.is_damage).toBe(false);
        });

        it('should return string that is name 冻僵了', function() {
            expect(result.effect_string('dale')).toBe('dale冻僵了，');
        });

        it('should return string that is PoisonEffect of name', function() {
            expect(result.state.name()).toBe('冰冻');
        });
    });
});