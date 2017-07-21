// const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to MongoDB Server');
    }

    console.log('Connected to MongoDB Server');

    // db.collection('Todos').deleteMany({text: 'Eat lunch'}).then((result) => {
    //     console.log(result);
    // });

    // db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((result) => {
    //     console.log(result);
    // });

    // db.collection('Todos').findOneAndDelete({completed: true}).then(result => console.log(result));

    // db.collection('Users').deleteMany({name: 'Daniel'}).then(result => console.log(result));
    db.collection('Users').findOneAndDelete({_id: ObjectID('59650f9a59d20f5aa7fd5386')}).then(result => console.log(JSON.stringify(result, undefined, 2)));
    // db.close();
});