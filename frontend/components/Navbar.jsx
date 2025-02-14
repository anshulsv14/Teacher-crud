import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import{Link} from 'react-router-dom'

const Topnav = () => {
  return (
<>

<Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home"></Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="home">Home</Nav.Link>
            <Nav.Link as={Link} to="insert">Insert Employee </Nav.Link>
            <Nav.Link as={Link} to="display">Display</Nav.Link>
            <Nav.Link as={Link} to="salarysum">Salary Summery</Nav.Link>
            <Nav.Link as={Link} to="search">Search Employee</Nav.Link>
            <Nav.Link as={Link} to="update">Update</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
     
</>
  )
}

export default Topnav
