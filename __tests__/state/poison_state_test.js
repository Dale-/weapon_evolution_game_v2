jest.dontMock('../../src/state/poison-state');
jest.dontMock('../../src/state/state');
jest.dontMock('../../src/model/player');

describe('PoisonState', function() {

    var PoisonState;
    var poisonState;

    beforeEach(function() {
        PoisonState = require('../../src/state/poison-state');
        poisonState = new PoisonState(2, 2, 2);
    });

    describe('#name()', function() {
        it('should return string of 毒性', function() {
            var result = poisonState.name();
            expect(result).toBe('毒性');
        });
    });

    describe('#merge()', function() {
        it('should return poison times', function() {

            var newPoisonState = new PoisonState(2, 2, 2);
            var result = poisonState.merge(newPoisonState);
            expect(poisonState.times).toBe(3);
        });

        it('should return roundDamage', function() {
            var newPoisonState = new PoisonState(2, 2, 2);
            var result = poisonState.merge(newPoisonState);
            expect(poisonState.roundDamage).toBe(4);
        });
    });

    describe('#impact()', function() {
        it('should return string about poison impact', function() {

            var Player = require('../../src/model/player');
            var katherine = new Player('Katherine', 100, 8);
            var result = poisonState.impact(katherine);
            expect(result).toBe('平民Katherine受到了2点毒性伤害，Katherine剩余生命：98\n');
        });
    });

    describe('#reduceTimes()', function() {
        it('should return number that has been reduced', function() {

            poisonState.reduceTimes();
            expect(poisonState.times).toBe(1);
        });
    });
});