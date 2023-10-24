var express = require("express");
var router = express.Router();

router.get("/cadastrar", function (req, res, next) {
  res.render("viagens/cadastrar");
});

module.exports = router;
