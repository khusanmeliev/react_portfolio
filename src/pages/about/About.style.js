import styled from "styled-components";
import Flexbox from "../../components/Flexbox/Flexbox";

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  background-color: pink;
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  flex-direction: column;
  border-radius: 35px;
`;

export const Title = styled(Flexbox)`
  width: 90%;
  height: 40%;
  justify-content: flex-start;
  flex-direction: row;
  color: white;
  font-size: 40px;

  span {
    color: #fca072;
    margin: 10px;
  }

  @media (max-width: 500px) {
    width: 100%;
    height: 100%;
    background-color: green;
  }
`;

export const Card = styled(Flexbox)`
  width: 90%;
  height: 60%;
  flex-direction: row;
  align-items: flex-start;

  @media (max-width: 500px) {
    flex-direction: column;
  }
`;

export const Text = styled(Flexbox)`
  width: 50%;
  height: 70%;
  color: white;
`;

export const Table = styled(Flexbox)`
  width: 50%;
  height: 70%;
  align-items: flex-start;

  li {
    list-style-type: none;
    margin: 10px;
    color: #fff;
  }

  span {
    color: #fca072;
  }

  @media (max-width: 500px) {
    width: 100%;
    height: 100%;
    background-color: red;
  }
`;
