import styled from "styled-components";
import Flexbox from "../../components/Flexbox/Flexbox";

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 35px;

  @media (max-width: 500px) {
    width: 100%;
    height: 100%;
  }
`;

export const Text = styled(Flexbox)`
  width: 100%;
  height: 30%;
  color: white;

  h1 {
    font-size: 40px;
  }
  h4 {
    font-size: 20px;
  }

  @media (max-width: 500px) {
    width: 100%;
    height: 100%;
    text-align: center;
  }
`;
