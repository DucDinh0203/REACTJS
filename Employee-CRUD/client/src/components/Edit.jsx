import React, { useState, useEffect } from "react";
import axios from "../api";
import { useParams, Link } from "react-router-dom";
import "./styles/edit.css";

const Edit = () => {
  const { id } = useParams();
  // TODO: Define state variables: name, position, department, notification
  const [name, setName] = useState("");
  const [position, setPosition] = useState("");
  const [department, setDepartment] = useState("");
  const [notification, setNotification] = useState("");

  useEffect(() => {
    // TODO: Fetch the employee details when the component mounts
    const fetchEmployee = async () => {
      try {
        const response = await axios.get(`/employees/${id}`);
        const employee = response.data;
        setName(employee.name);
        setPosition(employee.position);
        setDepartment(employee.department);
      } catch (error) {
        console.error("Error fetching employee:", error);
        setNotification("Error fetching employee.");
      }
    };

    fetchEmployee();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // TODO: Update the employee details when the form is submitted
    try {
      await axios.post(`/employees/update/${id}`, {name, position, department});
      setNotification('Employee updated successfully.');
      setTimeout(() => {
        setNotification('');
        window.location.href = '/';
      }, 1000)
    } catch (error) {
      console.error('Error updating employee');
      setNotification('Error updating employee.');
    }
  };

  return (
    <div className="edit-container">
      <h2>Edit Employee</h2>
      {/* TODO: Display notification if it exists */}
      {notification && 
        <div className={`notification ${notification === 'error' ? 'error-notification' : 'success-notification'}`}>
          {notification}
        </div>
      }
      <form onSubmit={handleSubmit}>
      <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="edit-input"
        />
        {/* TODO: Create input fields for name, position, and department */}
        <input
          type="text"
          placeholder="Position"
          value={position}
          onChange={(e) => setPosition(e.target.value)}
          className="edit-input"
        />
        <input
          type="text"
          placeholder="Department"
          value={department}
          onChange={(e) => setDepartment(e.target.value)}
          className="edit-input"
        />
        <button type="submit" className="edit-button">
          Update Employee
        </button>
        {" | "}
        <button type="button" className="edit-button">
          <Link to="/" style={{ color: "#ffffff", textDecoration: "none" }}>
            Cancel
          </Link>
        </button>
      </form>
    </div>
  );
};

export default Edit;
