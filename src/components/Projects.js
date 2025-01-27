import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import projImg4 from "../assets/img/project-img4.png";
import projImg5 from "../assets/img/project-img5.png";
import projImg6 from "../assets/img/project-img6.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Functional Music Player",
      description: "API and design",
      imgUrl: projImg1,
    },
    {
      title: "OOP based Shopping cart",
      description: "OOP, CSE Core",
      imgUrl: projImg2,
    },
    {
      title: "ToDo app",
      description: "With CRUD functionality, Local Storage",
      imgUrl: projImg3,
    },{
      title:"Arabic to Roman converter",
      description: "Apply the problem solving skills from DSA and Hashmaps",
      imgUrl: projImg4
    },
    {
      title:"Palindrome Checker",
      description: "Apply the problem solving skills from DSA and Two pointer algorithms",
      imgUrl: projImg5
    },
    {
      title:"Decimal to Binary conveter",
      description: "Apply the problem solving skills from DSA and Simple recursion",
      imgUrl: projImg6
    }
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>These are some projects that demonstrate my skills as a aspiring web developer and problem solver:
                Please find the projects <a href="https://github.com/Rudraksha-007" target="_blank">here</a>
                </p>
                
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Web development</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      {/* <Nav.Link eventKey="second">Tab 2</Nav.Link> */}
                    </Nav.Item>
                    <Nav.Item>
                      {/* <Nav.Link eventKey="third">Tab 3</Nav.Link> */}
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="section">
                      {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p> */}
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
