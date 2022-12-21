import { useContext, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { EmployeeContext } from "../contexts/EmployeeContext";

const AddForm = () => {
  const { AddEmployee } = useContext(EmployeeContext);

  const [newEmployee, setNewEmployee] = useState({
    name: "",
    email: "",
    address: "",
    phone: "",
  });

  const { name, email, address, phone } = newEmployee;

  const OnInputChange = (e) => {
    setNewEmployee({
      ...newEmployee,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    AddEmployee(name, email, address, phone);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Control
          type="text"
          placeholder="Name * "
          name="name"
          required
          onChange={(e) => OnInputChange(e)}
        />
      </Form.Group>
      <br />

      <Form.Group>
        <Form.Control
          type="email"
          placeholder="Email"
          name="email"
          onChange={(e) => OnInputChange(e)}
        />
      </Form.Group>
      <br />

      <Form.Group>
        <Form.Control
          onChange={(e) => OnInputChange(e)}
          as="textarea"
          rows={3}
          placeholder="Address"
          name="address"
        />
      </Form.Group>
      <br />

      <Form.Group>
        <Form.Control
          type="text"
          placeholder="Phone"
          name="phone"
          onChange={(e) => OnInputChange(e)}
        />
      </Form.Group>
      <br />

      <Button type="submit" variant="success m-auto">
        Add New Employee
      </Button>
    </Form>
  );
};

export default AddForm;
