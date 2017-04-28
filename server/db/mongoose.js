var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI || 'mongodb://guptapankaj1993:gupta1993@ds121091.mlab.com:21091/nodejscourse')

module.exports = {mongoose};
