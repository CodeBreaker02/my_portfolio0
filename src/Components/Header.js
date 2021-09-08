import React, {useState} from 'react';
import './Header.css'
import Logo from '../Assets/logo.png'
import ResumeFr from '../Assets/Resume-fr.pdf'
import {Nav, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink, Collapse} from "reactstrap";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    const links = [
        { href: '#about', text: 'About' },
        { href: '#experience', text: 'Experience' },
        { href: '#projects', text: 'Projects' },
        { href: '#contact', text: 'Contact' },
    ];

    const createNavItem = ({ href, text, className }) => (
        <NavItem className="h-links p-lg-2">
            <NavLink href={href} className={className}>{text}</NavLink>
        </NavItem>
    );

    return (
        <header>
            <Navbar dark  expand="md" className="d-flex justify-content-between">
                <NavbarBrand href="/" className="h-logo"><img src={Logo} alt="Logo" width="90" height="70"/></NavbarBrand>
                <div>
                    <Collapse isOpen={isOpen} navbar>
                        <Nav className="h-content my-2 my-lg-0" navbar>
                            {links.map(createNavItem)}
                            <NavItem className="p-lg-2">
                                <button type="button" className="btn btn-outline-primary"><a href={ResumeFr} className="link-primary">Resume</a></button>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </div>
                <NavbarToggler onClick={toggle}/>
            </Navbar>
        </header>
    );
};

export default Header;