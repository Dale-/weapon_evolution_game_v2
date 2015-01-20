jest.dontMock('../../src/effect/no-effect');

describe('NoEffect', function() {
   describe('#trigger()', function() {
       it('should return an empty object', function() {
           var NoEffect = require('../../src/effect/no-effect');
           var noEffect = new NoEffect();
           var result = noEffect.trigger();
           expect(result).toEqual({});
       });
   });
});