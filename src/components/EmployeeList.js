import Employee from "./Employee";
import React, { useContext, useEffect, useState } from "react";
import { EmployeeContext } from "../contexts/EmployeeContext";
import { Button, Modal } from "react-bootstrap";
import AddForm from "./AddForm";
import Pagination from "./Pagination";

function EmployeeList() {
  const { employee } = useContext(EmployeeContext);

  const [currentPage, setCurrentPage] = useState(1);
  const [employeesPerPage] = useState(3);

  const lastIndexOfPage = currentPage * employeesPerPage;
  const firstIndexOfPage = lastIndexOfPage - employeesPerPage;
  const currentEmployees = employee.slice(firstIndexOfPage, lastIndexOfPage);
  const totalPages = Math.ceil(employee.length / employeesPerPage);
  const totalEmployee = employee.length;
  const showingEmployee = currentEmployees.length;

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    handleClose();
  }, [employee]);

  return (
    <>
      <div className="table-title">
        <div className="row">
          <div className="col-sm-6">
            <h2>
              Manage <b>Employees</b>
            </h2>
          </div>
          <div className="col-sm-6">
            <Button
              onClick={handleShow}
              className="btn btn-success text-white"
              data-toggle="modal"
            >
              <i className="material-icons">&#xE147;</i>{" "}
              <span>Add New Employee</span>
            </Button>
          </div>
        </div>
      </div>
      <table className="table table-striped table-hover">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Address</th>
            <th>Phone</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {currentEmployees
            .sort((a, b) => a.name.localeCompare(b.name))
            .map((employee) => (
              <tr key={employee.id}>
                <Employee employee={employee} />
              </tr>
            ))}
        </tbody>
      </table>

      <Pagination
        page={totalPages}
        setCurrentPage={setCurrentPage}
        totalEmployee={totalEmployee}
        showingEmployee={showingEmployee}
      />

      <Modal show={show} onHide={handleClose}>
        <Modal.Header className="modal-header" closeButton>
          <Modal.Title>Add Employee</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <AddForm />
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleClose} variant="secondary">
            Close Modal
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
export default EmployeeList;
