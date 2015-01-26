jest.dontMock('../../src/state/normal-state');
jest.dontMock('../../src/state/state');

describe('NormalState', function() {

    var NormalState;
    var normalState;

    beforeEach(function() {
        NormalState = require('../../src/state/normal-state');
        normalState = new NormalState();
    });

    describe('#name()', function() {
        it('should return string of 正常', function() {
            var result = normalState.name();
            expect(result).toBe('正常');
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

    describe('#merge()', function() {
        it('should return string of 正常', function() {
            var result = normalState.merge();
            expect(result.name()).toBe('正常');
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