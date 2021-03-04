import React from "react";
import { useState } from "react";

function Body() {
  const [employee, setEmployee] = useState([
    {
      image:
        "https://pbs.twimg.com/profile_images/690430942867914752/ifBQsqS9.jpg",
      name: "Bruce Wayne",
      phone: "952-234-1267",
      email: "Bruce@email.com",
      id: 1,
    },
    {
      image:
        "https://pbs.twimg.com/profile_images/713997376378310656/abljOCjI_400x400.jpg",
      name: "Clark Kent",
      phone: "612-345-9756",
      email: "Clark@email.com",
      id: 2,
    },
    {
      image:
        "https://www.meme-arsenal.com/memes/e2569cbffaff2b9e9e3c4e6784bd0218.jpg",
      name: "Peter Parker",
      phone: "893-907-1234",
      email: "Peter@email.com",
      id: 3,
    },
    {
      image:
        "https://pbs.twimg.com/profile_images/680042601693732865/rW4LJDkG.jpg",
      name: "Anakin Skywalker",
      phone: "714-111-1111",
      email: "Anakin@email.com",
      id: 4,
    },
    {
      image: "https://i.ytimg.com/vi/ir8l3GudrgE/mqdefault.jpg",
      name: "Alex Jones",
      phone: "911",
      email: "Alex@email.com",
      id: 5,
    },
  ]);
  return (
    <form className="empform">
      <div className="banner">
        <h2>Picture</h2>
        <h2>Name</h2>
        <h2>Phone Number</h2>
        <h2>Email</h2>
      </div>

      <div className="formBody">
        {employee.map((employee) => (
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
