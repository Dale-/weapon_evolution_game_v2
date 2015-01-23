jest.dontMock('../../src/effect/no-effect');
jest.dontMock('../../src/state/normal-state');

describe('NoEffect', function() {

    var NoEffect;
    var noEffect;
    var result;

    beforeEach(function() {
        NoEffect = require('../../src/effect/no-effect');
        noEffect = new NoEffect();
        result = noEffect.trigger();
    });

   describe('#trigger()', function() {
       it('should return an empty object', function() {
           expect(result.effect_string('empty')).toEqual('');
       });

       it('should return string that is NormalState of name', function() {
           expect(result.state.name()).toBe('正常');
       });
   });
});