// const MongoClient = require('mongodb').MongoClient;
const {MongoClient,ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
  if(err){
    return console.log('unable to connect to MongoDB Server')
  }
  console.log('Connected to MongoDB server');
  // findOneandUpdate
  // db.collection('Todos').findOneAndUpdate({
  //   _id: new ObjectID('5b2895716f4a3e63fc04fb37')
  // },
  // {
  //   $set: {completed: true}
  // },{
  //   returnOriginal:false
  // }).then((result)=>{
  //   console.log(result);
  // }) ;

  db.collection('users').findOneAndUpdate({
    name: 'Jamie'
  },
  {
    $set:{name:'Joseph'},
    $inc: {age: 2}
  },
  {
    returnOriginal: false
  }).then((result)=>{
    console.log(result);
  });
  // db.close();
});
