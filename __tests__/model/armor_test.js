jest.dontMock('../../src/model/armor');

describe('Armor', function() {

    var Armor;
    var armor;

    beforeEach(function() {
        Armor = require('../../src/model/armor');
        armor = new Armor('sun-ring', 8);
    });

    describe('#name', function() {
        it('should return an incoming string', function() {
            expect(armor.name).toBe('sun-ring');
        });
    });

    describe('#dp', function() {
        it('checks if returned dp equals to eight', function() {
            expect(armor.dp).toBe(8);
        });
    });

    describe('#armor_string()', function() {
        it('should return an empty string', function() {
            var result = armor.armor_string('defender');
            expect(result).toBe('defender用sun-ring防御了8点伤害，');
        });
    });
});