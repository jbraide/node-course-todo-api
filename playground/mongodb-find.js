// const MongoClient = require('mongodb').MongoClient;
const {MongoClient,ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
  if(err){
    return console.log('unable to connect to MongoDB Server')
  }
  console.log('Connected to MongoDB server');
  // db.collection('Todos').find({
  //   _id: ObjectID('5b27a191f7964cc5ee920981')
  // }).toArray().then((docs)=>{
  //   console.log('Todos');
  //   console.log(JSON.stringify(docs,undefined, 2));
  // },(err)=>{
  //   console.log('unable to fetch todos',err);;
  // });
  // db.collection('Todos').find().count().then((count)=>{
  //   console.log(`Todos count: ${count}`);
  // },(err)=>{
  //   console.log('unable to fetch todos',err);;
  // });
  db.collection('users').find({name:'Joseph'}).count().then((count)=>{
    console.log(`User(s) count: ${count}`);
  },(err)=>{
    console.log('unable to fetch todos',err);;
  });
  db.collection('users').find({name:'Joseph'}).toArray().then((docs)=>{
    console.log('Users')
    console.log(JSON.stringify(docs,undefined,2))
  })
  // db.close();
});
