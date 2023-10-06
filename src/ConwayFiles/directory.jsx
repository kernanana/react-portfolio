import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './directory.css'

class NavComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      show: true,
      prevScrollY: 0,
    };
  }

  controlNavbar() {
    const { prevScrollY } = this.state;
    const currentScrollY = window.scrollY;

    if (currentScrollY > prevScrollY) {
      // Scrolling down
      this.setState({ show: false, prevScrollY: currentScrollY });
    } else {
      // Scrolling up
      this.setState({ show: true, prevScrollY: currentScrollY });
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.controlNavbar.bind(this));
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.controlNavbar.bind(this));
  }

  render() {
    const { show } = this.state;

    return (
      <Navbar
        className={show ? `navbarBG`: 'hideNav navbarBG'}>
        <Container className="separateNav">
          <Navbar.Brand className="navHeader" href="#home">
            Kernan Lee
          </Navbar.Brand>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto navContainer">
              {/* <Nav.Link to="/Portfolio/aboutMe" className="navButton">
                About Me
              </Nav.Link>
              <Nav.Link className="navButton" href="src/Portfolio/Skill.jsx">
                Skills
              </Nav.Link>
              <Nav.Link className="navButton" href="#home">
                Work Experience
              </Nav.Link>
              <Nav.Link className="navButton" href="#home">
                Projects
              </Nav.Link> */}
              {this.props.simulateButton}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}

export default NavComponent;
