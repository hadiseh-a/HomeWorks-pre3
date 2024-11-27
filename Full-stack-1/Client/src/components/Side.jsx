import { Container, Nav, Button, NavDropdown, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";

function Side() {
  return (
    <Navbar id="navbar" expand="md" className="z-3" >
      <Container className="d-flex align-items-start bg-body justify-content-start flex-column">
        <Navbar.Brand href="/" className="align-self-center hide my-3">
          TO-DO LIST
        </Navbar.Brand>
        <div className="d-grid gap-2 mb-3"></div>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto flex-column " style={{ width: "12rem" }}>
            <Button
              style={{
                backgroundColor: "#712cf9",
                borderColor: "#712cf9",
                marginBottom: 35,
              }}
            >
              Add new task
            </Button>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? " nav-link bg-danger bg-opacity-10 text-danger border-end border-4 border-danger"
                  : "hover-color nav-link"
              }
              to="/"
            >
              All tasks
            </NavLink>
            <NavLink
              to="/ImportantTasks"
              className={({ isActive }) =>
                isActive
                  ? " nav-link bg-danger bg-opacity-10 text-danger border-end border-4 border-danger"
                  : "hover-color nav-link"
              }
            >
              Important tasks
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? " nav-link bg-danger bg-opacity-10 text-danger border-end border-4 border-danger"
                  : "hover-color nav-link"
              }
              to="/CompletedTasks"
            >
              Completed tasks
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? " nav-link bg-danger bg-opacity-10 text-danger border-end border-4 border-danger"
                  : "hover-color nav-link"
              }
              to="/UnCompletedTasks"
            >
              UnCompleted tasks
            </NavLink>
            <NavDropdown title="Directories" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1" className="hover-color">
                Secondary
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2" className="hover-color">
                Main
              </NavDropdown.Item>
              <NavDropdown.Item
                href="#action/3.2"
                style={{
                  border: "solid",
                  borderColor: "gray",
                  borderWidth: 1,
                  width: 70,
                }}
              >
                +New
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Side;
