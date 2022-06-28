import React from "react";
import { Card, Table, Text, Title, Wrapper } from "./About.style";

function About() {
  return (
    <Wrapper id="about_page">
      <Title>
        About <span>Me</span>
      </Title>
      <Card>
        <Text>
          Proin volutpat mauris ac pellentesque pharetra. Suspendisse congue
          elit vel odio suscipit, sit amet tempor nisl imperdiet. Quisque ex
          justo, faucibus ut mi in, condimentum finibus dolor. Aliquam vitae
          hendrerit dolor, eget imperdiet mauris. Maecenas et ante id ipsum
          condimentum dictum et vel massa. Ut in imperdiet dolor, vel
          consectetur dui.
        </Text>
        <Table>
          <li>
            <span>Age</span> 13
          </li>
          <li>
            <span>Residence</span> Uzbekistan
          </li>
          <li>
            <span>Address</span> Samarkand, Urgut, Jartepa
          </li>
          <li>
            <span>e-mail</span>khusanmeliev@gmail.com
          </li>
          <li>
            <span>Phone</span> +998 yy xxx xx xx
          </li>
        </Table>
      </Card>
    </Wrapper>
  );
}

export default About;
