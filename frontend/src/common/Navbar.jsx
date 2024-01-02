import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import './navbar.css';

function SalesNavbar() {
    return (
        <Navbar collapseOnSelect expand="lg" className="text-bg-primary">
            <Container>
                <Link className='nav-link navbar-brand' to='/'>SALES APP</Link>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Link className='nav-link' to='/' >ADD SALES</Link>
                        <Link className='nav-link' to='/top5sales'>TOP 5 SALES</Link>
                        <Link className='nav-link'to='/totalrevenue' >TODAY'S TOTAL REVENUE</Link>
                        <Link className='nav-link'to='/login'>LOGIN</Link>
                        <Link className='nav-link' to='/ragister'>RAGISTER</Link>
                        <Link className='nav-link disabled' >LOGOUT</Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default SalesNavbar;