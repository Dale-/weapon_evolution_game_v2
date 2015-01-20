jest.dontMock('../../src/model/no-armor');

describe('NoArmor', function() {

    describe('#dp', function() {
        it('should return an incoming dp', function() {

            var NoArmor = require('../../src/model/no-armor');
            var noArmor = new NoArmor();

            expect(noArmor.dp).toBe(0);
        });
    });
});