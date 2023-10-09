var express = require("express");
var router = express.Router();
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

router.get("/", async function (req, res, next) {
  const linhas = await prisma.linha.findMany();
  res.json(linhas);
});

router.post("/criar", async (req, res, next) => {
  try {
    const { nome, origem, destino, horarioPartida, horarioChegada } = req.body;

    const novaLinha = await prisma.linha.create({
      data: {
        nome,
        origem,
        destino,
        horarioPartida,
        horarioChegada,
      },
    });

    res.json(novaLinha);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Erro ao criar a linha." });
  }
});

module.exports = router;
