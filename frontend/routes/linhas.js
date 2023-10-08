var express = require('express');
var router = express.Router();

router.get('/cadastrar', function(req, res, next) {
  res.render('linhas/cadastrar');
});

module.exports = router;
