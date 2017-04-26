var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://guptapankaj1993:gupta1993@ds121091.mlab.com:21091/nodejscourse' || 'mongodb://localhost:27017/TodoApp')

module.exports = {mongoose};
