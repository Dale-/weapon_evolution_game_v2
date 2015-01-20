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

        it('should return an incoming dp', function() {

            expect(armor.dp).toBe(8);
        });
    });
});