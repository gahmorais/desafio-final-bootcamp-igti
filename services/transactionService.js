const mongoose = require("mongoose");
const ObjectId = mongoose.Types.ObjectId;

// Aqui havia um erro difícil de pegar. Importei como "transactionModel",
// com "t" minúsculo. No Windows, isso não faz diferença. Mas como no Heroku
// o servidor é Linux, isso faz diferença. Gastei umas boas horas tentando
// descobrir esse erro :-/
const TransactionModel = require("../models/transactionModel");

async function getDataFromPeriod(yearMonth) {
  const period = yearMonth.split("-");
  const year = period[0];
  const month = period[1];
  try {
    const dataFromPeriod = await TransactionModel.find({ year, month });
    return dataFromPeriod;
  } catch (erro) {
    throw new Error("Erro ao buscar periodo");
  }
}

async function addNewTransaction(transaction) {
  try {
    const newTransaction = new TransactionModel(transaction);
    newTransaction.save();
  } catch (erro) {
    console.log(erro);
  }
}

async function getTransactionById(id) {
  try {
    const transactionById = TransactionModel.findOne(ObjectId(id));
    return transactionById;
  } catch (erro) {
    console.log(erro);
  }
}

async function updateTransaction(transaction) {
  const { _id } = transaction;
  const updatedTransaction = TransactionModel.findByIdAndUpdate(
    _id,
    transaction,
    { new: true }
  );
  return updatedTransaction
}

const allFunctions = {
  getDataFromPeriod,
  addNewTransaction,
  getTransactionById,
  updateTransaction,
};

module.exports = allFunctions;
