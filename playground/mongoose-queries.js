const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// var id = '5982138f99a743371ce6630b11';

// if(!ObjectID.isValid(id)){
//     console.log('ID not valid');
// }
// Todo.find({
//     _id: id
// }).then((todos) => console.log('Todos', todos));

// Todo.findOne({
//     _id: id
// }).then((todo) => console.log('Todo', todo));

// Todo.findById(id).then((todo) => {
//     if(!todo){
//         return console.log('Id not found');
//     }
//     console.log('Todo by id', todo)
// }).catch((e) => console.log(e));

var id = '59761abf256f3331acb9de16';

User.findById(id).then((user) => {
    if(!user){
        console.log('User not found');
    }
    else{
        console.log(user);
    }
}, (e) => {
    console.log(e);
});

