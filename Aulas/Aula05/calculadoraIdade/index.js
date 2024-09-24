const moment = require("moment");

const main = () => {
  const dataAtual = moment();

  const dataAniversario = moment("25/12/87", "DD/MM/YYYY");
  if (!dataAniversario.isValid()) return console.log("Data Inválida");

  const day = dataAtual.diff(dataAniversario, "day");
  console.log(day);

  const month = dataAtual.diff(dataAniversario, "month");
  console.log(month);

  const year = dataAtual.diff(dataAniversario, "year");
  console.log(year);
}

main();