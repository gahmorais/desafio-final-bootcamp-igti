const mongoose = require("mongoose");
const ObjectId = mongoose.Types.ObjectId;

// Aqui havia um erro difícil de pegar. Importei como "transactionModel",
// com "t" minúsculo. No Windows, isso não faz diferença. Mas como no Heroku
// o servidor é Linux, isso faz diferença. Gastei umas boas horas tentando
// descobrir esse erro :-/
const TransactionModel = require("../models/transactionModel");

async function getDataFromPeriod(yearMonth) {
  try {
    const period = yearMonth.split("-");
    const year = period[0];
    const month = period[1];
    const searchObj = month === "00" ? { year } : { year, month };
    const dataFromPeriod = await TransactionModel.find(searchObj);
    return dataFromPeriod;
  } catch (error) {
    console.log(error);
  }
}

async function addNewTransaction(transaction) {
  try {
    const newTransaction = new TransactionModel(transaction);
    newTransaction.save();
  } catch (error) {
    console.log(error);
  }
}

async function getTransactionById(id) {
  try {
    const transactionById = TransactionModel.findOne(ObjectId(id));
    return transactionById;
  } catch (error) {
    console.log(error);
  }
}

async function updateTransaction(transaction) {
  try {
    const { _id } = transaction;
    const updatedTransaction = TransactionModel.findByIdAndUpdate(
      _id,
      transaction,
      { new: true }
    );
    return updatedTransaction;
  } catch (error) {
    console.log(error);
  }
}

async function deleteTransaction(id) {
  try {
    const deletedTransaction = TransactionModel.findByIdAndDelete(ObjectId(id));
    return deletedTransaction;
  } catch (error) {
    console.log(error);
  }
}

const allFunctions = {
  getDataFromPeriod,
  addNewTransaction,
  getTransactionById,
  updateTransaction,
  deleteTransaction,
};

module.exports = allFunctions;
