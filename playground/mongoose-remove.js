const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');



Todo.findByIdAndRemove('59835981746b9e70509ef980').then((todo) => {
    console.log(todo);
});

Todo.findOneAndRemove({_id: '59835981746b9e70509ef980'}).then((todo) => {
    console.log(todo);
});