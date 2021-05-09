import React from "react";
import { Container } from "./styles";

export default function Select(props) {
  const { event, items } = props;

  return (
    <Container onChange={event}>
      {items.map(({ value, description }, index) => {
        return <option key={index} value={value}>{description}</option>;
      })}
    </Container>
  );
}
