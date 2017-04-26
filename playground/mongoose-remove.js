const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

/*
//remove all documents
Todo.remove({}).then((result) => {
  console.log(result);
}); */

Todo.findOneAndRemove({_id: 'dsds'}).then((todo)=>{
  console.log(todo);
});

Todo.findByIdAndRemove('5900a2c5b9f9271ac82dbb34').then((todo)=> {
  console.log(todo);
});
