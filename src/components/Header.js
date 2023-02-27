import { useState, useEffect } from 'react';
import { NavLink } from "react-router-dom";
import logo from '../assets/images/logo.png';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
    const [scrolled, seScrolled] = useState(false);
    const [backgroundColor, setBackgroundColor] = useState("rgba(1, 1, 1, 0)");
    const [isToggled, setIsToggled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                seScrolled(true);
            } else {
                seScrolled(false);
            }
        }

        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll);
    }, [])
  
    useEffect(() => {
      if (isToggled) {
        setBackgroundColor("rgba(1, 1, 1, 0.5)");
      } else {
        setBackgroundColor("rgba(1, 1, 1, 0)");
      }
    }, [isToggled]);

    return (
        <header className={scrolled ? "scrolled" : ""} style={{ backgroundColor }}>
            <div className="d-flex justify-content-between align-items-center">
                <NavLink className="logo nav-link" to="/"><img className="logo" src={logo} alt="logo" /></NavLink>
                <Navbar expand="lg">
                    <Container>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={() => setIsToggled(!isToggled)} />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">
                                <NavLink to="/">Home</NavLink>
                                <NavLink to="/about">About</NavLink>
                                <NavLink to="/projects">Projects</NavLink>
                                <NavLink to="/contact">Contact</NavLink>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
        </header>
    )
}

export default Header;