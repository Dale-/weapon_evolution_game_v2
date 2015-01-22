function NoEffect() {

}

NoEffect.prototype.trigger = function() {
  return {
    effect_string: function(name) {
      return '';
    }
  };
};

module.exports = NoEffect;
