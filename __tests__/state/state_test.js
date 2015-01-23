jest.dontMock('../../src/state/state');

describe('State', function() {

    var State;
    var state;

    beforeEach(function() {
        State = require('../../src/state/state');
        state = new State();
    });

    describe('#expire()', function() {
        it('should return true that point DeadlyAttackEffect has damage', function() {
            expect(result.is_damage).toBe(true);
        });

        it('should return number that is damagePoint', function() {

            expect(result.impact(3)).toBe(9);
        });
    });
});