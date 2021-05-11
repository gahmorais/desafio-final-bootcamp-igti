import React from "react";
import FinancialData from "../components/FinancialData";
import Transaction from "../components/Transaction";

export default function Transactions(props) {
  const { transactions } = props;

  const recipesAndExpenses = {
    expenses: transactions
      .filter((transaction) => {
        return transaction.type === "-";
      })
      .reduce((acc, curr) => curr.value + acc, 0),
    recipes: transactions
      .filter((transaction) => {
        return transaction.type === "+";
      })
      .reduce((acc, curr) => curr.value + acc, 0),
    records: transactions.length,
  };

  return (
    <div>
      <FinancialData recipesAndExpenses={recipesAndExpenses} />

      {transactions &&
        transactions.map((transaction, index) => {
          return <Transaction key={index} transaction={transaction} />;
        })}
    </div>
  );
}
