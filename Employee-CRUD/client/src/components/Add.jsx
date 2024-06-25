import React, { useState } from "react";
import { toast } from "react-toastify";
import axios from "../api"; // Import Axios
import "./styles/add.css";

const Add = () => {
  // State for employee data
  const [employee, setEmployee] = useState({});

  // Function to handle input changes
  const handleChange = (e) => {
    const {name, value} = e.target;
    setEmployee((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Function to handle form submission
  const handleSubmit = async () => {
    console.log("handleSubmit");
    // e.preventDefault();
    try {
      // TODO: Send a POST request to add employee
      await axios.post("/employees/add", employee);
      toast.success("Employee added successfully!");
      // TODO: Reset form fields after successful submission
      setEmployee({
        name: "",
        position: "",
        department: "",
        });
      // TODO: Redirect to homepage after successful submission
    } catch (error) {
      toast.error("Failed to add employee. Please try again.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Input fields for employee data */}
      <input
        type="text"
        placeholder="Name"
        name="name"
        value={employee.name} //name is columns of table Employee in the collection
        onChange={handleChange}
        className="form-input"
      />
      <input
        type="text"
        placeholder="Position"
        name="position"
        value={employee.position} //name is columns of table Employee in the collection
        onChange={handleChange}
        className="form-input"
      />
      <input
        type="text"
        placeholder="Department"
        name="department"
        value={employee.department} //name is columns of table Employee in the collection
        onChange={handleChange}
        className="form-input"
      />
      {/* Type more input fields for employee data here*/}
      <button type="submit" className="form-button">Add Employee</button>
    </form>
  );
};

export default Add;
