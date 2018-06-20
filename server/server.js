var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');


var Todo = mongoose.model('Todo', {
  text: {
    type: String
  },
  completed: {
    type: Boolean
  },
  completedAt:{
    type: Number
  }
});


// var newTodo = new Todo({
//   text : 'cook Dinner'
// });
//
// newTodo.save().then((doc)=>{
//   console.log('Saved Todo',doc)
// }, (e)=>{
//   console.log('Unable to save todo')
// });

var otherTodo = new Todo({
  text: 'complete Course',
  completed: false,
  completedAt: 123
});
otherTodo.save().then((doc)=>{
  console.log('Saved TOdo',doc)
},(e)=>{
  console.log('unable to save Todo',e);
});
