import React, { useEffect, useState } from "react";
import periods from "../../util/periods";
import transactionService from "../../service/transactionService";
import Transactions from "../Transactions";
import Select from "../../components/Select/index";
import { Container, Header, Title } from "./styles";
import Search from "../../components/Search";

export default function App(props) {
  const [transactions, setTransactions] = useState([]);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    transactionService
      .getTransactionByPeriod(2019, "00")
      .then((res) => {
        return res.data;
      })
      .then((json) => {
        setTransactions(json);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const retrieveData = (e) => {
    const selectedPeriod = e.target.value.split("/");
    const year = selectedPeriod[0];
    const month = selectedPeriod[1];

    transactionService
      .getTransactionByPeriod(year, month)
      .then((res) => {
        return res.data;
      })
      .then((json) => {
        setTransactions(json);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleFilter = (e) => {
    setFilter(e.target.value);
  };

  return (
    <Container>
      <Header>
        <Title>Desafio Final do Bootcamp Full Stack</Title>
        <div>
          <Select event={retrieveData} items={periods} />
          <span>
            Filtrar Categoria: 
            <Search event={handleFilter} value={filter} />
          </span>
          <span>
            Filtrar Descrição: 
            <Search />
          </span>
        </div>
      </Header>
      {transactions && (
        <Transactions
          transactions={transactions.filter((transaction) =>
            transaction.category.toLowerCase().includes(filter)
          )}
        />
      )}
    </Container>
  );
}
