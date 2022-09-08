db.produtos.find({
    "valoresNutricionais.0": { $elemMatch: { quantidade: { $lt: 500 } },
    },
  }, {
    _id: 0,
    nome: 1,
    "valoresNutricionais.0": 1,
  });