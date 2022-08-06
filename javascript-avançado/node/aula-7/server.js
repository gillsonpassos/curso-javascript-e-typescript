const express = require("express");
const app = express();
//         criar  ler   atualizar     apagar
// CRUD -> CREAT, READ,  UPDATE,      DELET
//         post    get    put         delet

// http://meusite.com/ <- GET -> navegador entregar pagina /
// http://meusite.com/sobre <- GET -> entrega pagina / sobre
// http://meusite.com/contato <- GET -> entrega pagina / sobre

app.get("/", (req, res) => {
  res.send(`
  <form action="/" method="post">
   Nome do Cliente: <input type="text" name="nome">
  <button>Formigão</button>
  </form>
  `);
});

app.post("/", (rec, res) => {
  res.send("Recebi o Formulário");
});

app.listen(3000, () => {
  console.log("Acessar http://localhost:3000");

  console.log("Servidor executando na porta 3000");
});
