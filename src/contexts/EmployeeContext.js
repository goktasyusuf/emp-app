import { createContext, useState } from "react";
import { v4 as uuidv4 } from 'uuid';

export const EmployeeContext = createContext();

const EmployeContextProvider = (props) => {
  const [employee,setEmployee] = useState([
    {
      id: uuidv4(),
      name: "Thomas Hardy10",
      email: "thomashardy@mail.com",
      address: "89 Chiaroscuro Rd, Portland, USA",
      phone: "(171) 555-2222",
    },
    {
      id: uuidv4(),
      name: "Dominique Perrier",
      email: "dominiqueperrier@mail.com",
      address: "Obere Str. 57, Berlin, Germany",
      phone: "(313) 555-5735",
    },
    {
      id: uuidv4(),
      name: "Maria Anders",
      email: "mariaanders@mail.com",
      address: "25, rue Lauriston, Paris, France",
      phone: "(503) 555-9931",
    },
    {
      id: uuidv4(),
      name: "Fran Wilson",
      email: "franwilson@mail.com",
      address: "C/ Araquil, 67, Madrid, Spain",
      phone: "(204) 619-5731",
    },
    {
      id: uuidv4(),
      name: "Martin Blank",
      email: "martinblank@mail.com",
      address: "Via Monte Bianco 34, Turin, Italy",
      phone: "(480) 631-2097",
    },
  ]);



  
  const AddEmployee = (name,email,address,phone)=> {
    setEmployee([...employee,{id:uuidv4(),name,email,address,phone}])
  }

 
const DeleteEmployee = (id)=> {
  setEmployee(employee.filter((employee)=>employee.id!==id))
}

const UpdateEmployee = (id,updatedEmployee)=>{
  setEmployee(employee.map((employee)=>employee.id === id ? updatedEmployee : employee ))
}

  return (
    <EmployeeContext.Provider value={{employee , AddEmployee , DeleteEmployee , UpdateEmployee}}>
      {props.children}
    </EmployeeContext.Provider>
  );
};

export default EmployeContextProvider;
