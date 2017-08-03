var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
// mongoose.connect('mongodb://localhost:27017/TodoApp');
mongoose.connect('mongodb://dan_todo:Abcd1234@ds034807.mlab.com:34807/todo-app');

module.exports = {mongoose};