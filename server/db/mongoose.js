var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI);
// mongoose.connect('mongodb://dan_todo:Abcd1234@ds034807.mlab.com:34807/todo-app');

module.exports = {mongoose};