import React from 'react';
import './Header.css'
import {Nav, NavItem, NavLink} from "reactstrap";

const Header = () => {
    return (
        <header className="h-content">
            <Nav>
                <NavItem>
                    <NavLink href="#">Link</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="#">about</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="#">projects</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="#">contact</NavLink>
                </NavItem>
            </Nav>
        </header>
    );
};

export default Header;