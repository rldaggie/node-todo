var express = require('express');
var router = express.Router();
var Todo = require('../models/todo');

router.get('/', function(req, res, next) {
  Todo.find({}, function(err, todos) {
    if (err) {
      res.status(500).send(err);
    } else {
      res.json(todos);
    }
  });
});

router.post('/', function(req, res, next) {
  var todo = new Todo(req.body);
  todo.save(function(err) {
    if (err) {
      res.status(500).send();
    } else {
      res.json(todo);
    }
  });
});

// Middleware for finding todo
router.use('/:id', function (req, res, next) {
  Todo.findOne({ '_id': req.params.id }, function(err, todo) {
    if (err) {
      res.json(err)
    } else {
      if (todo) {
        res.todo = todo;
        next();
      } else {
        res.status(404).send();
      }
    }
  });
});

router.get('/:id', function(req, res, next) {
  res.json(res.todo);
});

router.put('/:id', function(req, res, next) {
  Todo.findByIdAndUpdate(res.todo._id, { $set: req.body }, function(err, todo) {
    if (err) {
      res.status(500).send();
    } else {
      Todo.findOne({ '_id': req.params.id }, function(err, todo) {
        if (err) {
          res.status(500).send();
        } else {
          if (todo) {
            res.json(todo);
          } else {
            res.status(404).send();
          }
        }
      });
    }
  });
});

router.delete('/:id', function(req, res, next) {
  Todo.find({ '_id': res.todo._id }).remove(function(err) {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(204).send();
    }
  });
});

module.exports = router;
