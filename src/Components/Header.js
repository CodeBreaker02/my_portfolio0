import './Header.css'
import Logo from '../Assets/logo.png'
import ResumeFr from '../Assets/Resume-fr.pdf'
import {Icon, Navbar, NavItem} from "react-materialize";

const Header = () => {
    const links = [
        { href: '#about', text: 'About' },
        { href: '#experience', text: 'Experience' },
        { href: '#projects', text: 'Projects' },
        { href: '#contact', text: 'Contact' },
    ];

    const createNavItem = ({ href, text, className }) => (
        <NavItem href={href} className={className}>{text}</NavItem>
    );

    return (
        <header>
            <Navbar
                alignLinks="right"
                brand={<a className="brand-logo" href="#"><img src={Logo} alt="Logo" width="90" height="70"/></a>}
                id="mobile-nav"
                menuIcon={<Icon>menu</Icon>}
                options={{
                    draggable: true,
                    edge: 'right',
                    inDuration: 250,
                    onCloseEnd: null,
                    onCloseStart: null,
                    onOpenEnd: null,
                    onOpenStart: null,
                    outDuration: 200,
                    preventScrolling: true
                }}
                sidenav={<li>Custom node!</li>}
                className="transparent z-depth-0"
            >
                {links.map(createNavItem)}
                <button>
                    <NavItem href={ResumeFr} className="link-primary">
                        Resume
                    </NavItem>
                </button>
            </Navbar>
{/*            <Navbar dark  expand="md" className="d-flex justify-content-between">
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
            </Navbar>*/}
        </header>
    );
};

export default Header;