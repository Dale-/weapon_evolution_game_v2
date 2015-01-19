jest.dontMock('../../src/model/player');
//张三攻击了李四,李四受到了8点伤害,李四剩余生命：12
describe('Player', function() {

    var Player;
    var stefan;
    var katherine;

    beforeEach(function() {
        Player = require('../../src/model/player');
        stefan = new Player('Stefan', 100, 10);
        katherine = new Player('Katherine', 100, 8);
    });

    describe('#attack'), function() {
        it('attack reduce hp', function() {

            var result = katherine.attack(stefan);
            expect(stefan.hp).toBe(92);
        });
        it('player vs player attack string', function() {

            var result = katherine.attack(stefan);
            expect(result).toBe('Katherine攻击了Stefan,Stefan受到了8点伤害,Stefan剩余生命：92');
        });
    }
});