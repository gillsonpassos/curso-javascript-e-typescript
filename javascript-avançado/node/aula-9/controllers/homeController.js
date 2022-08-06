exports.paginaInicial = (req, res) => {
  res.send(`
    <form action="/" method="POST">
     Nome do Cliente: <input type="text" name="nome">
     Outro campo: <input type="text" nome="aquioutrocampo">
    <button>Olá Mundo</button>
    </form>
    `);
};

exports.trataPost = (req, res) => {
  res.send("Ei, sou sua nova rota de  POST");
};
