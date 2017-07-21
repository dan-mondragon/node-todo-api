var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');

var Todo = mongoose.model('Todo', {
    text: {
        type: String
    },
    completed: {
        type: Boolean
    },
    completedAt: {
        type: Number
    }
});

var newTodo = new Todo({
    text: 'Cook breakfast',
    completed: true,
    completedAt: 10
});

newTodo.save().then((doc) => {
    console.log('Saved ', doc);
}, (e) => {
    console.log(e);
});