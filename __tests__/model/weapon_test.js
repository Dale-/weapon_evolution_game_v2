jest.dontMock('../../src/model/weapon');

describe('Weapon', function() {

   describe('#weapon_string()', function() {

       it('should return one string of using weapon', function() {

           var Weapon = require('../../src/model/weapon');
           var weapon = new Weapon('weapon');
           var result = weapon.weapon_string();

           expect(result).toBe('用weapon');
       });
   });
});