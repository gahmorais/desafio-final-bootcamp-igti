import styled from "styled-components";

export const Title = styled.h1`
  grid-area: "title";
  width: 100%;
  color: red;
  text-align:center;
`;

export const Container = styled.div``;

export const Header = styled.div`
  grid-area: "title title title" "search search search";
  grid-template-rows: 1fr 50px;
  display: grid;

  div{
    grid-area:'search';
    display:flex;
    flex-direction:row;
    justify-content:space-around;
    align-items:center;
  }
`;
