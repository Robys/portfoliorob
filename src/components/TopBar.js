import {Navbar,NavLink,Nav} from 'react-bootstrap'

export default function TopBar (){

    return (
        <Navbar collapseOnSelect expand="lg" bg="light" sticky="top"> 
            <Navbar.Brand href="/">Robert Oliveira</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
                <NavLink href="/projects">Meus Projetos</NavLink>
                <NavLink href="/contact">Contato</NavLink>

            </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}