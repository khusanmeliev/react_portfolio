import React from "react";
import Home from "../../pages/home/Home";
import Flexbox from "../Flexbox/Flexbox";
import { FaInstagram, FaFacebookF, FaLinkedinIn, FaHome } from "react-icons/fa";

import {
  Card,
  Dashboard,
  Heading,
  Image,
  Introduce,
  NavMenu,
  NextPage,
  Pages,
  PagesLink,
  SocialMedias,
  Wrapper,
} from "./Bigbox.style";
import About from "../../pages/about/About";
import Resume from "../../pages/resume/Resume";
import Portfolio from "../../pages/portfolio/Portfolio";

function Bigbox() {
  return (
    <Wrapper>
      <Dashboard>
        <Card>
          <Introduce>
            <Flexbox width="80%" height="80%">
              <Flexbox width="100%" height="50%">
                <Image
                  src="https://lmpixels.com/demo/breezycv/dark/4/img/main_photo.jpg"
                  alt=""
                />
              </Flexbox>
              <Flexbox width="100%" height="50%">
                <Heading>
                  <h1>Khusan Meliev</h1>
                  <h5>Full Stack Developer</h5>
                </Heading>
                <SocialMedias>
                  <li>
                    <a
                      href="https://www.linkedin.com/in/khusan-meliev/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FaLinkedinIn />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.facebook.com/profile.php?id=100075372702764"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FaFacebookF />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.instagram.com/khusanmeliev/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FaInstagram />
                    </a>
                  </li>
                </SocialMedias>
              </Flexbox>
            </Flexbox>
          </Introduce>
          <Pages>
            {/* <Home /> */}
            <About />
            {/* <Resume /> */}
            {/* <Portfolio /> */}
          </Pages>
        </Card>
        <NavMenu>
          <PagesLink>
            <li>
              <a href="#home_page">
                <FaHome />
              </a>
            </li>
            <li>
              <a href="#about_page">
                <FaHome />
              </a>
            </li>
            <li>
              <a href="resume_page">
                <FaHome />
              </a>
            </li>
            <li>
              <a href="portfolio_page">
                <FaHome />
              </a>
            </li>
            <li>
              <FaHome />
            </li>
            <li>
              <FaHome />
            </li>
          </PagesLink>
          <NextPage>
            <li>
              <FaHome />
            </li>
            <li>
              <FaHome />
            </li>
          </NextPage>
        </NavMenu>
      </Dashboard>
    </Wrapper>
  );
}

export default Bigbox;
