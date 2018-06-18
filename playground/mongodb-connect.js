// const MongoClient = require('mongodb').MongoClient;
const {MongoClient,ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
  if(err){
    return console.log('unable to connect to MongoDB Server')
  }
  console.log('Connected to MongoDB server');
  // db.collection('Todos').insertOne({
  //   test : 'something to do',
  //   completed: false
  // },(err,result)=>{
  //   if(err){
  //     return console.log('Unable to insert to do',err);
  //   }
  //   console.log(JSON.stringify(result.ops,undefined, 2));
  // });

// db.collection('users').insertOne({
//   name:'Joseph',
//   age:21,
//   location: 'Nigeria'
// }, (err,result)=>{
//   if(err){
//     return console.log('Unable to insert User',err)
//   }
//   // console.log(JSON.stringify(result.ops,undefined, 2));
//   console.log(result.ops[0]._id.getTimestamp());
// });
  db.close();
});
