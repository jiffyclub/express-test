var _ = require('lodash-fp');


module.exports.groupby_sum =  _.flow(
  _.groupBy(_.first),
  _.mapValues(_.map(_.last)),
  _.mapValues(_.sum)
);
