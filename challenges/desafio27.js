db.produtos.count({
  nome: {
    $regex: /mc/gi,
  },
});
