jest.dontMock('../src/game');
jest.dontMock('../src/util/logger');
jest.dontMock('../src/model/player');

describe('Game', function() {
    describe('#fight()', function() {
        it('should be logger player vs player message', function() {

            var Game = require('../src/game');
            var Logger = require('../src/util/logger');
            var Player = require('../src/model/player');

            var logger = new Logger();

            var stefan = new Player('Stefan', 30, 10);
            var katherine = new Player('Katherine', 30, 8);
            var game = new Game(stefan, katherine, logger);

            game.fight();
            logger.log = jest.genMockFn();
            var expectText = 'Stefan攻击了Katherine，Katherine受到了10点伤害，Katherine剩余生命：20\n' +
                             'Katherine攻击了Stefan，Stefan受到了8点伤害，Stefan剩余生命：22\n' +
                             'Stefan攻击了Katherine，Katherine受到了10点伤害，Katherine剩余生命：10\n' +
                             'Katherine攻击了Stefan，Stefan受到了8点伤害，Stefan剩余生命：14\n' +
                             'Stefan攻击了Katherine，Katherine受到了10点伤害，Katherine剩余生命：0\n' +
                             'katherine被打败了';
            //expect(logger.log).toBe(expectText);
        });
    });
});