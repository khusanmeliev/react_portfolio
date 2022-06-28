import styled from "styled-components";
import Flexbox from "../../components/Flexbox/Flexbox";

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  background-color: red;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const PortfolioBox = styled(Flexbox)`
  width: 90%;
  height: 100%;
  background-color: green;
  font-size: 40px;
  flex-direction: column;
`;

export const Title = styled(Flexbox)`
  width: 100%;
  height: 20%;
  background-color: blue;
  align-items: flex-start;
  font-weight: 700;
`;

export const Card = styled.div`
  width: 100%;
  height: 80%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: pink;
  flex-wrap: wrap;
  box-sizing: border-box;
`;

export const Box = styled.div`
  width: 180px;
  height: 200px;
  background-color: green;
  margin: 20px;
`;
