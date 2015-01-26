jest.dontMock('lodash');
jest.dontMock('../../src/state/state');
jest.dontMock('../../src/state/dizzy-state');
jest.dontMock('../../src/effect/dizzy-effect');

describe('DizzyEffect', function() {

    var result;
    var DizzyEffect;
    var dizzyEffect;

    beforeEach(function() {
        DizzyEffect = require('../../src/effect/dizzy-effect');
        dizzyEffect = new DizzyEffect();
        result = dizzyEffect.trigger();
    });

    describe('#trigger()', function() {
        it('should return false that point PoisonEffect has damage immediately', function() {
            expect(result.is_damage).toBe(false);
        });

        it('should return string that is name 晕倒了', function() {
            expect(result.effect_string('dale')).toBe('dale晕倒了，');
        });

        it('should return string that is PoisonEffect of name', function() {
            expect(result.state.name()).toBe('眩晕');
        });
    });
});