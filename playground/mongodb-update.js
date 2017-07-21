// const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to MongoDB Server');
    }

    console.log('Connected to MongoDB Server');

    // db.collection('Todos').findOneAndUpdate({ _id: new ObjectID('596512e759d20f5aa7fd54e9') },
    //     {
    //         $set: {
    //             completed: true
    //         }
    //     }, {
    //         returnOriginal: false
    //     }).then(result => console.log(result));

    db.collection('Users').findOneAndUpdate({ _id: new ObjectID('59650f8f59d20f5aa7fd5382') }, {
        $set: {
            name: 'Daniel'
        },
        $inc: {
            age: 10
        }
    }, {
            returnOriginal: false
        }).then(result => console.log(result));

    // db.close();
});