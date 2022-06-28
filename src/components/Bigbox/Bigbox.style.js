import styled from "styled-components";
import Flexbox from "../Flexbox/Flexbox";

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  background-color: blue;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const Dashboard = styled(Flexbox)`
  width: 93%;
  height: 80%;
  flex-direction: row;

  @media (max-width: 500px) {
    width: 100%;
    height: 100%;
  }
`;

export const Card = styled(Flexbox)`
  width: 92%;
  height: 100%;
  border-radius: 35px;
  flex-direction: row;
  border: 2px solid white;

  @media (max-width: 500px) {
    
    border: none;
    border-radius: 0;
  }
`;

export const Introduce = styled(Flexbox)`
  width: 35%;
  height: 100%;
  border: 2px solid black;

  @media (max-width: 500px) {
    display: none;
  }
`;

export const Image = styled.img`
  width: 55%;
  height: 85%;
  border-radius: 50%;
`;

export const Heading = styled(Flexbox)`
  width: 100%;
  height: 50%;
  color: white;
`;

export const SocialMedias = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
  align-items: flex-start;
  justify-content: center;

  li {
    list-style-type: none;
    margin: 20px;
    font-size: 20px;
    cursor: pointer;

    a {
      text-decoration: none;
      color: white;
    }
  }
`;

export const Pages = styled(Flexbox)`
  width: 65%;
  height: 100%;

  @media (max-width: 500px) {
    width: 100%;
    height: 100%;
  }
`;

export const NavMenu = styled(Flexbox)`
  width: 8%;
  height: 100%;
  background-color: pink;
  justify-content: space-between;

  @media (max-width: 500px) {
    display: none;
  }
`;

export const PagesLink = styled(Flexbox)`
  width: 70%;
  height: 65%;
  background-color: red;
  justify-content: space-around;
  border-radius: 40px;

  li {
    list-style-type: none;
    font-size: 30px;
  }
`;

export const NextPage = styled(Flexbox)`
  width: 70%;
  height: 25%;
  background-color: red;
  border-radius: 40px;

  li {
    list-style-type: none;
    font-size: 30px;
  }
`;
