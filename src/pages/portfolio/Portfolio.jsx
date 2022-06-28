import React from "react";
import { projects } from "../../mock/portfolios";
import { Box, Card, PortfolioBox, Title, Wrapper } from "./Portfolio.style";

function Portfolio() {
  return (
    <Wrapper id="portfolio_page">
      <PortfolioBox>
        <Title>Portfolio</Title>
        <Card>
          {projects.map((project) => (
            <Box key={project.id}></Box>
          ))}
        </Card>
      </PortfolioBox>
    </Wrapper>
  );
}

export default Portfolio;
