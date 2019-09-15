// const mongodb = require('mongodb')
// const MongoClient = mongodb.MongoClient
// const ObjectID = mongodb.ObjectID

const {MongoClient, ObjectID} = require('mongodb')

const connectionURL = 'mongodb://localhost:27017'
const dbName = "task-manager"


MongoClient.connect(connectionURL, {useNewUrlParser: true, 
                    useUnifiedTopology: true}, (error, client) => {

    if(error){
        return console.log('Unable to connect to database');
    }

    console.log('Connected');

    const db = client.db(dbName);

    // db.collection('users').insertOne({
    //     _id: id,
    //     user: 'bhawan0407',
    //     age: 25
    // }, (error, result) => {

    //     if(error){
    //         return console.log("Unable to insert user.");
    //     }

    //     console.log(result.ops);

    // });

    // db.collection('users').insertMany([{
    //     user: 'bhawandtu',
    //     age: 25
    // }, {
    //     user: 'firoz_di',
    //     age: 25
    // }], (error, result) => {

    //     if(error){
    //         return console.log('Unable to insert users');
    //     }

    //     console.log(result.ops);

    // });


    // db.collection('tasks').insertMany([{
    //     description: 'Task1',
    //     completed: false
    // }, {
    //     description: 'Task2',
    //     completed: true,
    // }, {
    //     description: 'Task3',
    //     completed: true
    // }], (error, result) => {

    //     if(error){
    //         return console.log('Unable to add tasks');
    //     }

    //     console.log(result.ops);
    // })


    db.collection('users').findOne({_id: new ObjectID("5d7cec5a48fa78435ce0467c")}, (error, user) => {
        if (error){
            return console.log(error);
        }

        console.log(user);
    })

    db.collection('users').find({age: 25}).toArray((error, users) => {
        if(error){
            return console.log(error);
        }

        console.log(users);
    })

    db.collection('users').find({age: 25}).count((error, count) => {
        console.log(count);
    })


    db.collection('users').updateOne({
        _id : new ObjectID("5d7ce66dfd79734310726497")
    }, {
        $set: {
            user: 'James'
        }
    }).then((result) => {
        console.log(result);
    }).catch((error) => {
        console.log(error);
    });
})

