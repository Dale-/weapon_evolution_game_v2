jest.dontMock('lodash');
jest.dontMock('../../src/state/state');
jest.dontMock('../../src/model/player');
jest.dontMock('../../src/state/dizzy-state');

describe('DizzyState', function() {

    var DizzyState;
    var dizzyState;

    beforeEach(function() {
        DizzyState = require('../../src/state/dizzy-state');
        dizzyState = new DizzyState(2, 2, 0);
    });

    describe('#name()', function() {
        it('should return string of 眩晕', function() {
            var result = dizzyState.name();
            expect(result).toBe('眩晕');
        });
    });

    describe('#merge()', function() {
        it('should return poison times', function() {
            var newDizzyState = new DizzyState();
            var result = dizzyState.merge(newDizzyState);
            expect(dizzyState.times).toBe(3);
        });
    });

    describe('#impact()', function() {
        it('should return string about dizzy impact', function() {

            var Player = require('../../src/model/player');
            var katherine = new Player('Katherine', 100, 8);
            var result = dizzyState.impact(katherine);
            expect(result).toBe('平民Katherine晕倒了，无法攻击，眩晕还剩：1轮\n');
        });
    });

    describe('#reduceTimes()', function() {
        it('should return number that has been reduced', function() {

            dizzyState.reduceTimes();
            expect(dizzyState.times).toBe(1);
        });
    });
});