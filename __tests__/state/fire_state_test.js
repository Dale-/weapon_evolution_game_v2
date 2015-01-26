jest.dontMock('lodash');
jest.dontMock('../../src/state/state');
jest.dontMock('../../src/model/player');
jest.dontMock('../../src/state/fire-state');

describe('FireState', function() {

    var FireState;
    var fireState;

    beforeEach(function() {
        FireState = require('../../src/state/fire-state');
        fireState = new FireState(2, 2, 2);
    });

    describe('#name()', function() {
        it('should return string of 火焰', function() {
            var result = fireState.name();
            expect(result).toBe('火焰');
        });
    });

    describe('#merge()', function() {
        it('should return poison times', function() {
            var newFireState = new FireState();
            var result = fireState.merge(newFireState);
            expect(fireState.times).toBe(3);
        });

        it('should return roundDamage', function() {
            var newFireState = new FireState();
            var result = fireState.merge(newFireState);
            expect(fireState.roundDamage).toBe(6);
        });
    });

    describe('#impact()', function() {
        it('should return string about fire impact', function() {

            var Player = require('../../src/model/player');
            var katherine = new Player('Katherine', 100, 8);
            var result = fireState.impact(katherine);
            expect(result).toBe('平民Katherine受到了2点火焰伤害，Katherine剩余生命：98\n');
        });
    });

    describe('#reduceTimes()', function() {
        it('should return number that has been reduced', function() {

            fireState.reduceTimes();
            expect(fireState.times).toBe(1);
        });
    });
});