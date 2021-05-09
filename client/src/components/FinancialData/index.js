import React from "react";
import currencyConvert from '../../util/currency'
import { Container } from "./styles";

export default function FinancialData(props) {
  const { recipesAndExpenses } = props;
  const { recipes, expenses, records } = recipesAndExpenses;
  const balance = recipes - expenses;
  return (
    <Container>
      <span><strong>Receitas: </strong>{currencyConvert(recipes)}</span>
      <span><strong>Despesas: </strong>{currencyConvert(expenses)}</span>
      <span><strong>Saldo: </strong>{currencyConvert(balance)}</span>
      <span><strong>Quantidade de Registros: </strong>{records}</span>
    </Container>
  );
}
