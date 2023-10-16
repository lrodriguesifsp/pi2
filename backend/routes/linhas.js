var express = require("express");
var router = express.Router();
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

router.get("/listar", async function (req, res, next) {
  const linhas = await prisma.linha.findMany();
  res.json(linhas);
});

router.post("/cadastrar", async (req, res, next) => {
  try {
    const { nome, origem, destino, horarioPartida, duracao } = req.body;

    console.log(req.body);

    const novaLinha = await prisma.linha.create({
      data: {
        nome,
        origem,
        destino,
        horarioPartida: `1970-01-01T${horarioPartida}:00Z`,
        duracao: parseInt(duracao)
      },
    });

    res.json(novaLinha);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Erro ao criar a linha." });
  }
});

router.get("/qtd-horarios-por-linha", async function (req, res, next) {
  try {
    const linhas = await prisma.linha.groupBy({
      by: ["nome"],
      _count: true,
      orderBy: {
        _count: {
          nome: "desc",
        },
      },
    });

    res.json(linhas);
  } catch (error) {
    res.status(500).json({ error: "Erro ao realizar consulta." });
  }
});

module.exports = router;
