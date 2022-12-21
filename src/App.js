import { useContext } from "react";
import EmployeeList from "./components/EmployeeList";
import EmployeContextProvider from "./contexts/EmployeeContext";
import { ThemeContext } from "./contexts/ThemeContext";

function App() {
  const { theme, changeTheme } = useContext(ThemeContext);

  const currentTheme = theme ? "#222529" : "#F8F9FA";
  return (
    <div>
      <div
        className="d-flex"
        style={{
          height: "100vh",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          backgroundColor: currentTheme,
        }}
      >
        <button onClick={changeTheme} className="btn btn-danger">
          Change Theme
        </button>
        <br />
        <div className="container-xl">
          <div className="table-responsive">
            <div className="table-wrapper">
              <EmployeContextProvider>
                <EmployeeList />
              </EmployeContextProvider>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
