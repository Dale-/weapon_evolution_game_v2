jest.dontMock('lodash');
jest.dontMock('../../src/state/state');
jest.dontMock('../../src/state/poison-state');
jest.dontMock('../../src/effect/poison-effect');

describe('PoisonEffect', function() {

    var result;
    var PoisonEffect;
    var poisonEffect;

    beforeEach(function() {
        PoisonEffect = require('../../src/effect/poison-effect');
        poisonEffect = new PoisonEffect();
        result = poisonEffect.trigger();
    });

    describe('#trigger()', function() {
        it('should return false that point PoisonEffect has damage immediately', function() {
            expect(result.is_damage).toBe(false);
        });

        it('should return string that is name 中毒了', function() {
            expect(result.effect_string('dale')).toBe('dale中毒了，');
        });

        it('should return string that is PoisonEffect of name', function() {
            expect(result.state.name()).toBe('毒性');
        });
    });
});