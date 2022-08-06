const express = require("express");
const app = express();

app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send(`
  <form action="/" method="POST">
   Nome do Cliente: <input type="text" name="nome">
  <button>Olá Mundo</button>
  </form>
  `);
});

app.get("/testes/:idUsuarios", (req, res) => {
  // /profiles/3
  // /profiles/?chave1=valor1&chave2=valor2&chave3=valor3
  //
  console.log(req.params);
  console.log(req.query);
  res.send(req.query.facebookprofile);
});

app.post("/", (req, res) => {
  console.log(req.body);
  res.send(`O que voce me enviou foi: ${req.body.qualquercoisa}`);
});

app.listen(3000, () => {
  console.log("Acessar http://localhost:3000");

  console.log("Servidor executando na porta 3000");
});
