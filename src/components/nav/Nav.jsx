import { Nav, Container, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'


const Navigation = () => {

    return (
        <Navbar bg="dark" expand="lg" variant="dark" className="mb-5">
            <Container>
                <Link to="/">
                    <Navbar.Brand as="div">HomePage</Navbar.Brand>
                </Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Link to="/beers">
                            <Nav.Link as="div">All Beers</Nav.Link>
                        </Link>
                        <Link to="/random-beer">
                            <Nav.Link as="div">Random beer</Nav.Link>
                        </Link>
                        <Link to="/new-beer">
                            <Nav.Link as="div">New beer</Nav.Link>
                        </Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Navigation