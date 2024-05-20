import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import projImg4 from "../assets/img/project-img4.png";
import projImg5 from "../assets/img/project-img5.png";
import projImg6 from "../assets/img/project-img6.png";
import projImg7 from "../assets/img/project-img7.png";
import projImg8 from "../assets/img/project-img8.png";
import projImg9 from "../assets/img/project-img9.png";


import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
  const projectsTab1 = [
    {
      title: "a talent marketplace website",
      description: "React/RTK/TypeScipt",
      imgUrl: projImg1,
      link:"www.tribaja.co"
    },
    {
      title: "Automation Hardware Company Webstie",
      description: "React/Redux Saga/JS",
      imgUrl: projImg2,
      link:"www.botics.dev"
    },
    {
      title: "Omnifood landing page",
      description: "HTML/SASS/Advanced Animations",
      imgUrl: projImg3,
      link:"https://rococo-kulfi-9c7edb.netlify.app"
    },
  ];
  const projectsTab2 = [
    {
      title: "a website for roboust protection for every deal",
      description: "Next/TS/RTK Query/Ant Design",
      imgUrl: projImg4,
      link:"https://victorious-bay-0aa1c2903.5.azurestaticapps.net/"

    },
    {
      title: "Business Startup",
      description: "UI/UX Development",
      imgUrl: projImg5,
      link:"www.dispatch.aero"

    },
    {
      title: "A website for box packaging company",
      description: "Next/MUI ",
      imgUrl: projImg6,
      link:"https://nexa-packaging.vercel.app/"

    },
  ];
  const projectsTab3 = [
    {
      title: "Tourist website landing page",
      description: "Html/CSS/JS",
      imgUrl: projImg7,
      link:"https://ephemeral-elf-84c095.netlify.app"

    },
    {
      title: "Booking company landing page",
      description: "Html/Css/Sass",
      imgUrl: projImg8,
      link:"https://fabulous-biscochitos-679f5c.netlify.app"

    },
    {
      title: "Property landing page",
      description: "HTML/SASS/JS",
      imgUrl: projImg9,
      link:"https://cool-bienenstitch-cc6d64.netlify.app"

    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Projects</h2>
                  <p>
                    Over the past 2 years, I have successfully delivered complex
                    projects, exceeding client expectations, and increasing test
                    coverage up-to 90%.My focus on code quality and strong
                    communication skills make me a valuable asset to any
                    project.
                  </p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">Tab 1</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Tab 2</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Tab 3</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projectsTab1.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                          <Row>
                          {projectsTab2.map((project, index) => {
                          return <ProjectCard key={index} {...project} />;
                        })}
                          </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <Row>
                          {projectsTab3.map((project, index) => {
                          return <ProjectCard key={index} {...project} />;
                        })}
                          </Row>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img
        className="background-image-right"
        src={colorSharp2}
        alt="bg-img"
      ></img>
    </section>
  );
};
