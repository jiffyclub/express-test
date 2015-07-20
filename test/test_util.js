var util = require('../util.js');
var should = require('chai').should();


describe('groupby_sum', function() {
  it('should do it\'s thing', function() {
    var data = [
      ['cat', 2], ['dog', 5], ['cat', 1], ['bird', 3], ['dog', 2], ['cat', 1]];
    var result = util.groupby_sum(data);
    result.should.deep.equal({'cat': 4, 'dog': 7, 'bird': 3});
  });
});
