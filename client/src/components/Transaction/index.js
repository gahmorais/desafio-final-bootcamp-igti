import React from "react";
import { Container } from "./styles";
import { FaEdit, FaTrash } from "react-icons/fa";

export default function Transaction(props) {
  const {
    description,
    value,
    category,
    yearMonthDay,
    type,
  } = props.transaction;

  return (
    <Container type={type}>
      <span>{description}</span>
      <span>{value}</span>
      <span>{category}</span>
      <span>{yearMonthDay}</span>
      <span>{type === "+" ? "Receita" : "Despesa"}</span>
      <div>
        <span onClick={(e) => console.log("Editar")}>
          <FaEdit />
        </span>
        <span onClick={(e) => console.log("Excluir")}>
          <FaTrash />
        </span>
      </div>
    </Container>
  );
}
