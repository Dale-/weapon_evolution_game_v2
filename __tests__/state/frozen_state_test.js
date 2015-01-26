jest.dontMock('lodash');
jest.dontMock('../../src/state/state');
jest.dontMock('../../src/model/player');
jest.dontMock('../../src/state/frozen-state');

describe('FrozenState', function() {

    var FrozenState;
    var frozenState;

    beforeEach(function() {
        FrozenState = require('../../src/state/frozen-state');
        frozenState = new FrozenState(1, 3, 0);
    });

    describe('#name()', function() {
        it('should return string of 冰冻', function() {
            var result = frozenState.name();
            expect(result).toBe('冰冻');
        });
    });

    describe('#merge()', function() {
        it('should return poison times', function() {
            var newFrozenState = new FrozenState();
            var result = frozenState.merge(newFrozenState);
            expect(frozenState.frozenStatus.length).toBe(2);
        });
    });

    describe('#impact()', function() {
        it('should return string about dizzy impact', function() {

            var Player = require('../../src/model/player');
            var katherine = new Player('Katherine', 100, 8);
            frozenState.frozenStatus = [2];
            var result = frozenState.impact(katherine);
            expect(result).toBe('平民Katherine冻得直哆嗦，没有击中\n');
        });
    });

    describe('#addTimes()', function() {
        it('should return array that has been add', function() {
            frozenState.addTimes();
            expect(frozenState.frozenStatus[0]).toBe(1);
        });
    });

    describe('#reduceTimes()', function() {
        it('should return number that has been reduced', function() {
            frozenState.reduceTimes();
            expect(frozenState.frozenStatus.length).toBe(0);
        });
    });
});