var mongoose = require('mongoose');

var Todo = mongoose.model('Todo', {
  text: {
    type: String,
    required: true, //mongoose validators
    minlength: 1,
    trim: true //remove whitespaces
  },
  completed: {
    type: Boolean,
    default: false
  },
  completedAt : {
    type: Number,
    default: null
  }
});

module.exports = {Todo}

/*
var newTodo = new Todo({
  text: 'Cook dinner'
})

newTodo.save().then((doc)=> {
  console.log('Saved todo', doc);
}, (e)=> {
  console.log('Unable to save todo')
});*/
/*
var otherTodo = new Todo({
  text: 'Animal farm',

})

otherTodo.save().then((doc)=> {
  console.log(JSON.stringify(doc, undefined, 2));
}, (e)=> {
  console.log('Unable to save todo', e)
}); */
