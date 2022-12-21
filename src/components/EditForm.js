import { useContext, useState } from "react";

import { EmployeeContext } from "../contexts/EmployeeContext";
import { Button, Form } from "react-bootstrap";

const EditForm = ({ theEmployee }) => {
  const { UpdateEmployee } = useContext(EmployeeContext);

  const employee = theEmployee;
  const id = employee.id;

  const [name, setName] = useState(employee.name);
  const [email, setEmail] = useState(employee.email);
  const [address, setAdress] = useState(employee.address);
  const [phone, setPhone] = useState(employee.phone);

  const uptadedEmployee = { id, name, email, address, phone };

  const handleSubmit = (e) => {
    e.preventDefault();
    UpdateEmployee(id, uptadedEmployee);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Control
          type="text"
          placeholder="Name * "
          value={name}
          name="name"
          onChange={(e) => setName(e.target.value)}
          required
        />
      </Form.Group>
      <br />

      <Form.Group>
        <Form.Control
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="Email"
          value={email}
          name="email"
        />
      </Form.Group>
      <br />
      <Form.Group>
        <Form.Control
          onChange={(e) => setAdress(e.target.value)}
          value={address}
          as="textarea"
          rows={3}
          placeholder="Address"
          name="address"
        />
      </Form.Group>
      <br />

      <Form.Group>
        <Form.Control
          onChange={(e) => setPhone(e.target.value)}
          type="text"
          placeholder="Phone"
          name="phone"
          value={phone}
        />
      </Form.Group>
      <br />

      <Button type="submit" variant="success m-auto">
        Edit Employee
      </Button>
    </Form>
  );
};

export default EditForm;
