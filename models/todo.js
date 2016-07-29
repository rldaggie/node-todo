var mongoose = require('mongoose');

var todoSchema = {
  task: String,
  completed: Boolean,
  userId: String
}

var Todo = mongoose.model('Todo', todoSchema);

module.exports = Todo;
