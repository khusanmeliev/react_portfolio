import styled from "styled-components";
import Flexbox from "../../components/Flexbox/Flexbox";

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  background-color: red;
  display: flex;
  align-items: flex-end;
  flex-direction: column;
`;

export const CodingSkills = styled(Flexbox)`
  width: 90%;
  height: 100%;
  background-color: green;
`;
