jest.dontMock('../../src/util/logger');
console.log = jest.genMockFn();

describe('Logger', function() {

   describe('#logger()', function() {

       it('should log to console', function() {

           var Logger = require('../../src/util/logger');
           var logger = new Logger();

           logger.log('Never Say Never.');
           var expectText = 'Never Say Never.';
           expect(console.log).toBeCalledWith(expectText);
       });
   }) ;
});