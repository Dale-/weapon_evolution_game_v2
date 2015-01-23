var NormalState = require('../state/normal-state');

function NoEffect() {

}

NoEffect.prototype.trigger = function() {
  return {
    state: new NormalState(),

    effect_string: function(name) {
      return '';
    }
  };
};

module.exports = NoEffect;
