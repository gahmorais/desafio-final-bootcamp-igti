import styled from "styled-components";
export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 5px 0;
  margin: 5px 10px;
  color: ${(props) => (props.type === "+" ? "#208100" : "#A30000")};
  background-color: ${(props) =>
    props.type === "+" ? "#2ecc7188" : "#e74c3c88"};
  align-items: center;
  span {
    text-align: center;
    width: 500px;
  }
  div {
    display: flex;
    width: 80px;
    flex-direction: row;
    span:hover{
      cursor: pointer;
    }
  }
`;
