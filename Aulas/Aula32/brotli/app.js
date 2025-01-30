const express = require('express');
const compression = require('express-compression');

const app = express();
app.use(compression({
  brotli: {
    enabled: true,
    zlib:{}
  }
}));


app.get("/stringridiculamentegrande", (req, res) => {
let string = "Olá Coders eu sou uma string ridiculamente longa";
for (let i = 0; i < 1010; i++) {
  string += "Olá Coders eu sou uma string ridiculamente longa";
}
res.send(string);
console.log(string)
});

app.listen(8080, () => {
    console.log("Servidor rodando na porta 8080");
});