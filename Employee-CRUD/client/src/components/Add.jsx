import React, { useState } from "react";
import { toast } from "react-toastify";
import axios from "../api"; // Import Axios
import "./styles/add.css";

const Add = () => {
  // State for employee data
  const [employee, setEmployee] = useState({});

  // Function to handle input changes
  const handleChange = (e) => {};

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // TODO: Send a POST request to add employee
      await axios.post("/employees/add", employee);
      toast.success("Employee added successfully!");
      // TODO: Reset form fields after successful submission
      setEmployee({});
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
      />
      {/* Type more input fields for employee data here*/}
      <button type="submit">Add Employee</button>
    </form>
  );
};

export default Add;
