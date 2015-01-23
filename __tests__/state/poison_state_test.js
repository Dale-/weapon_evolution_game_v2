jest.dontMock('../../src/state/poison-state');
jest.dontMock('../../src/state/state');

describe('PoisonState', function() {

    var PoisonState;
    var poisonState;

    beforeEach(function() {
        PoisonState = require('../../src/state/poison-state');
        poisonState = new PoisonState();
    });

    describe('#name()', function() {
        it('should return string of 正常', function() {
            var result = poisonState.name();
            expect(result).toBe('毒性');
        });
    });

    describe('#expire()', function() {
        it('should return boolean of flase', function() {
            var result = normalState.expire();
            expect(result).toBe(false);
        });
    });

    describe('#impact()', function() {
        it('should return string of empty', function() {
            var result = normalState.impact();
            expect(result).toBe('');
        });
    });

    describe('#equal()', function() {
        it('should return boolean of true', function() {
            var State = require('../../src/state/state');
            var state = new State();

            state.name = jest.genMockFn();
            state.name.mockReturnValue('正常');

            var result = normalState.equal(state);
            expect(result).toBe(true);
        });
    });
});