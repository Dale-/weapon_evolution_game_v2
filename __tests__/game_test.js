jest.dontMock('../src/game');
jest.dontMock('../src/util/logger');
jest.dontMock('../src/model/player');
jest.dontMock('../src/model/soldier');
jest.dontMock('../src/model/weapon');
jest.dontMock('../src/model/armor');
jest.dontMock('../src/model/no-armor');


describe('Game', function() {

    var Game;
    var Logger;
    var Player;
    var Soldier;
    var Weapon;
    var Armor;
    var logger;
    var stefan;
    var katherine;
    var weapon;
    var armor;
    var damon;
    var klaus;

    beforeEach(function() {

        Game = require('../src/game');
        Logger = require('../src/util/logger');
        Player = require('../src/model/player');
        Soldier = require('../src/model/soldier');
        Weapon = require('../src/model/weapon');
        Armor = require('../src/model/armor');

        logger = new Logger();
        armor = new Armor('Armor', 2);
        weapon = new Weapon('Weapon', 2);
        stefan = new Player('Stefan', 30, 10);
        katherine = new Player('Katherine', 30, 8);
        damon = new Soldier('Damon', 30, 12, weapon, armor);
        klaus = new Soldier('Klaus', 30, 14, weapon);
    });

    describe('#fight()', function() {
        it('should be logger player vs player message', function() {

            var game = new Game(stefan, katherine, logger);
            //game.fight();
            logger.log = jest.genMockFn();
            var expectText = '平民Stefan攻击了平民Katherine，Katherine受到了10点伤害，Katherine剩余生命：20\n' +
                             '平民Katherine攻击了平民Stefan，Stefan受到了8点伤害，Stefan剩余生命：22\n\n' +
                             '平民Stefan攻击了平民Katherine，Katherine受到了10点伤害，Katherine剩余生命：10\n' +
                             '平民Katherine攻击了平民Stefan，Stefan受到了8点伤害，Stefan剩余生命：14\n\n' +
                             '平民Stefan攻击了平民Katherine，Katherine受到了10点伤害，Katherine剩余生命：0\n' +
                             'katherine被打败了';
            //expect(logger.log).toBe(expectText);
        });

        it('should be logger player vs soldier message', function() {

            var game = new Game(stefan, damon, logger);
            //game.fight();
            logger.log = jest.genMockFn();
            var expectText;
            expectText = '平民Stefan攻击了士兵Damon，Damon用Armor防御了2点伤害，Damon受到了8点伤害，Damon剩余生命：22\n' +
                         '士兵Damon用Weapon攻击了平民Stefan，Stefan受到了14点伤害，Stefan剩余生命：16\n\n' +
                         '平民Stefan攻击了士兵Damon，Damon用Armor防御了2点伤害，Damon受到了8点伤害，Damon剩余生命：14\n' +
                         '士兵Damon用Weapon攻击了平民Stefan，Stefan受到了14点伤害，Stefan剩余生命：2\n\n' +
                         '平民Stefan攻击了士兵Damon，Damon用Armor防御了2点伤害，Damon受到了8点伤害，Damon剩余生命：6\n' +
                         '士兵Damon用Weapon攻击了平民Stefan，Stefan受到了14点伤害，Stefan剩余生命：-12\n\n' +
                         'Stefan被打败了';
            //expect(logger.log).toBe(expectText);
        });

        it('should be logger soldier vs soldier message', function() {

            var game = new Game(klaus, damon, logger);
            //game.fight();
            logger.log = jest.genMockFn();
            var expectText = '士兵Klaus用Weapon攻击了士兵Damon，Damon用Armor防御了2点伤害，' +
                             'Damon受到了14点伤害，Damon剩余生命：16\n' +
                             '士兵Damon用Weapon攻击了士兵Klaus，Klaus受到了14点伤害，Klaus剩余生命：16\n\n' +
                             '士兵Klaus用Weapon攻击了士兵Damon，Damon用Armor防御了2点伤害，' +
                             'Damon受到了14点伤害，Damon剩余生命：2\n' +
                             '士兵Damon用Weapon攻击了士兵Klaus，Klaus受到了14点伤害，Klaus剩余生命：2\n\n' +
                             '士兵Klaus用Weapon攻击了士兵Damon，Damon用Armor防御了2点伤害，' +
                             'Damon受到了14点伤害，Damon剩余生命：-12\n' +
                             'Damon被打败了';
            //expect(logger.log).toBe(expectText);
        });
    });
});