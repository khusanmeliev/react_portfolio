import React from "react";
import Flexbox from "../../components/Flexbox/Flexbox";
import { Certificates, CodingSkills, Wrapper } from "./Resume.style";

function Resume() {
  return (
    <Wrapper id="resume_page">
      <CodingSkills></CodingSkills>
    </Wrapper>
  );
}

export default Resume;
