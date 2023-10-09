var express = require('express');
var router = express.Router();
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

router.get('/', async function(req, res, next) { 
    const linhas = await prisma.linha.findMany();
    res.json(linhas);
});

module.exports = router;
