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
        it('should return string of 正常', function() {
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
});