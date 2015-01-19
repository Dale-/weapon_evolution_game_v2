function Logger() {

}

Logger.prototype.log = function(message) {
  console.log(message);
};

module.exports = Logger;