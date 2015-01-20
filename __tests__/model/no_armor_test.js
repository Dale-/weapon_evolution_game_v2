jest.dontMock('../../src/model/no-armor');

describe('NoArmor', function() {

    var NoArmor;
    var noArmor

    beforeEach(function() {
        NoArmor = require('../../src/model/no-armor');
        noArmor = new NoArmor();
    });

    describe('#dp', function() {
        it('should return an incoming dp', function() {
            expect(noArmor.dp).toBe(0);
        });
    });

    describe('#armor_string()', function() {
       it('should return an empty string', function() {
           var result = noArmor.armor_string();
           expect(result).toBe('');
       });
    });
});