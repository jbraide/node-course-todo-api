
// const MongoClient = require('mongodb').MongoClient;
const {MongoClient,ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
  if(err){
    return console.log('unable to connect to MongoDB Server')
  }
  console.log('Connected to MongoDB server');
  // deleteMany
  // db.collection('Todos').deleteMany({text:'eat lunch'}).then((result)=>{
  //   console.log(result);
  // });
  //deleteOne
  // db.collection('Todos').deleteOne({text:'Eat lunch'}).then((result)=>{
  //   console.log(result);
  // });
  //findOneAndDelete
  // db.collection('Todos').findOneAndDelete({completed: false}).then((result)=>{
  //   console.log(result);
  // });

  // Deleting from the users collection
  // db.collection('users').deleteMany({name:'Joseph'}).then((result)=>{
  //   console.log(result);
  // });
  // db.collection('users').deleteOne({name:'Joseph'}).then((result)=>{
  //   console.log(result);
  // });
  db.collection('users').findOneAndDelete({_id:ObjectID('5b28ab7d6f4a3e63fc04ff28')}).then((result)=>{
    console.log(result);
  });

  // db.close();
});
