// const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to MongoDB Server');
    }

    console.log('Connected to MongoDB Server');

    // db.collection('Todos').find({
    //     _id: new ObjectID('59650a6159d20f5aa7fd518c')
    // }).toArray().then((docs) => {
    //     console.log('Todos');
    //     console.log(JSON.stringify(docs, undefined, 2));
    // }, (err) => {
    //     console.log('Unable to fetch', err);
    // });

    // db.collection('Todos').find().count().then((count) => {
    //     console.log('Todos');
    //     console.log('Count: ' + count);
    // }, (err) => {
    //     console.log('Unable to fetch', err);
    // });

    db.collection('Users').find({name: 'Daniel'}).toArray().then((docs) => {
        console.log('Users Daniel');
        console.log(JSON.stringify(docs, undefined, 2));
    }, (err) => {
        console.log('Unable to fetch', err);
    });

    // db.close();
});