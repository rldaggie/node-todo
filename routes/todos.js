var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.json([]);
});

router.post('/', function(req, res, next) {
  res.json(req.body);
});

// Middleware for finding todo
router.use('/:id', function (req, res, next) {
  next();
});

router.get('/:id', function(req, res, next) {
  res.json(res.todo);
});

router.put('/:id', function(req, res, next) {
  res.json({});
});

router.delete('/:id', function(req, res, next) {
  res.status(204).send();
});

module.exports = router;
