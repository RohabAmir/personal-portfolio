import { Container, Row, Col } from "react-bootstrap";
// import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import githubLogo from "../assets/img/github.svg"
import leetcodeLogo from "../assets/img/leetcode.svg"

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            <img className="footerLogo" src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
          <div className="social-icon">
                <a href="https://www.linkedin.com/in/rohab-aamir2/"><img src={navIcon1} alt="" /></a>
                <a href="https://github.com/RohabAmir"><img src={githubLogo} alt="" /></a>
                <a href="https://leetcode.com/u/rohabamir2/"><img src={leetcodeLogo} alt="" /></a>
              </div>
            <p>Copyright 2024. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}