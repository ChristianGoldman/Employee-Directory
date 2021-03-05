import React, {useState} from "react";
import employeesJson from "../../utils/employees.json";

function Body() {
  const [employees, setEmployees] = useState(employeesJson);
  return (
    <form className="empform">
      <div className="banner">
        <h2>Picture</h2>
        <h2>Name</h2>
        <h2>Phone Number</h2>
        <h2>Email</h2>
      </div>

      <div className="formBody">
        {employees.map((employee) => (
          <div className="employeesInfo" key={employee.id}>
            <img className="employeeImage" src={ employee.image } alt="employees"></img>
            <p className="name">{ employee.name }</p>
            <p className="phone">{ employee.phone }</p>
            <p className="email">{ employee.email }</p>
          </div>
        ))}
      </div>
    </form>
  );
}

export default Body;
