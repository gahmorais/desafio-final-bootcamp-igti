const express = require("express");
const allFunctionsFromService = require("../services/transactionService");
const transactionRouter = express.Router();

transactionRouter.get("/", async (req, res) => {
  const period = req.query.period;
  const regexRule = "[0-2][0-2][0-2][0-9]-[0-1][0-9]";
  if (period !== undefined && period.match(regexRule)) {
    const dataReceive = await allFunctionsFromService.getDataFromPeriod(period);
    res.send(dataReceive);
  }
  res
    .status(400)
    .send(
      "É necessário informar o parâmetro periodo, cujo valo deve estar no formato yyyy-mm"
    );
});
transactionRouter.get("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const transaction = await allFunctionsFromService.getTransactionById(id);
    res.send(transaction);
  } catch (erro) {
    console.log(erro);
  }
});

transactionRouter.put("/", async (req, res) => {
  try {
    const transaction = req.body;
    const updatedTransaction = await allFunctionsFromService.updateTransaction(transaction)
    res.send(updatedTransaction)
  } catch (error) {}
});

transactionRouter.post("/", async (req, res) => {
  try {
    const newTransaction = req.body;
    await allFunctionsFromService.addNewTransaction(newTransaction);
    res.send("Operação concluida com sucesso");
  } catch (erro) {
    res.status(500).send(erro);
  }
});

transactionRouter.delete("/:id", async (req, res) => {
  res.send("DELETE");
});

module.exports = transactionRouter;
