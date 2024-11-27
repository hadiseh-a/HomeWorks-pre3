import { Navbar, Form, Button, InputGroup } from "react-bootstrap";

function Nav() {
  const today = Date.now();
  const now = new Date(today).toDateString();
  return (
    <Navbar className="flex-wrap z- gap-xl-5 align-self-start justify-content-between">
      <Form inline className="mx-5 delet-margin">
        <InputGroup>
          <Form.Control
            aria-label="Search"
            aria-describedby="basic-addon1"
            type="text"
            placeholder="Search tasks"
            className="flex-grow-5"
          />
          <InputGroup.Text id="basic-addon1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-search"
              viewBox="0 0 16 16"
            >
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
            </svg>
          </InputGroup.Text>
        </InputGroup>
      </Form>
      <section>
        <p className="span-hide">TO-DO LIST</p>
        <p className="">{now}</p>
      </section>
      <Button className=" delet-margin"
        style={{
          backgroundColor: "#712cf9",
          borderColor: "#712cf9",
          marginLeft: "10rem",
        }}
      >
        Add new task
      </Button>
    </Navbar>
  );
}

export default Nav;
