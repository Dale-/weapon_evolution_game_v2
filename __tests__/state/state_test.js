jest.dontMock('../../src/state/state');

describe('State', function() {

    var State;
    var state;

    beforeEach(function() {
        State = require('../../src/state/state');
        state = new State();
    });

    describe('#expire()', function() {
        it('should return true or false that show expireState', function() {
            var result = state.expire();
            expect(result).toBe(false);
        });
    });
});