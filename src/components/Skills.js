import { Container, Row, Col } from "react-bootstrap";
import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import colorSharp from "../assets/img/color-sharp.png";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="skill" id="skills">
      <Container>
        <Row>
          <Col>
            <div className="skill-bx">
              <h2>Skills</h2>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="owl-carousel owl-theme skill-slider"
              >
                <div className="item">
                  <img src={meter1} alt="skill-img" />
                  <h5>Web Development</h5>
                </div>
                <div className="item">
                  <img src={meter1} alt="skill-img" />
                  <h5>JavaScript</h5>
                </div>
                <div className="item">
                  <img src={meter1} alt="skill-img" />
                  <h5>TypeScript</h5>
                </div>
                <div className="item">
                  <img src={meter1} alt="skill-img" />
                  <h5>React</h5>
                </div>
                <div className="item">
                  <img src={meter1} alt="skill-img" />
                  <h5>Next</h5>
                </div>
                <div className="item">
                  <img src={meter1} alt="skill-img" />
                  <h5>CSS/SASS</h5>
                </div>
                <div className="item">
                  <img src={meter1} alt="skill-img" />
                  <h5>Responsive Designs</h5>
                </div>
                <div className="item">
                  <img src={meter1} alt="skill-img" />
                  <h5>Git/Github</h5>
                </div>
                <div className="item">
                  <img src={meter1} alt="skill-img" />
                  <h5>Material UI core</h5>
                </div>
                <div className="item">
                  <img src={meter1} alt="skill-img" />
                  <h5>Ant Design</h5>
                </div>
                <div className="item">
                  <img src={meter1} alt="skill-img" />
                  <h5>CSS Frameworks</h5>
                </div>
                <div className="item">
                  <img src={meter1} alt="skill-img" />
                  <h5>Redux</h5>
                </div>
                <div className="item">
                  <img src={meter2} alt="skill-img" />
                  <h5>Firebase</h5>
                </div>
                <div className="item">
                  <img src={meter2} alt="skill-img" />
                  <h5>SQL</h5>
                </div>
                <div className="item">
                  <img src={meter3} alt="skill-img" />
                  <h5>RESTful web services</h5>
                </div>
                <div className="item">
                  <img src={meter3} alt="skill-img" />
                  <h5>JS Testing Framweworks</h5>
                </div>
                <div className="item">
                  <img src={meter2} alt="skill-img" />
                  <h5>Amazon S3 buckets</h5>
                </div>
                <div className="item">
                  <img src={meter2} alt="skill-img" />
                  <h5>Azure Blob Storage</h5>
                </div>
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>

      <img className="background-image-left" src={colorSharp} alt="skill-bg-img" />
    </section>
  );
};
