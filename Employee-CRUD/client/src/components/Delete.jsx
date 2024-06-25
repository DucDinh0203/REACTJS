import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "../api";
import "./styles/delete.css";

const Delete = () => {
  const { id } = useParams();
  // TODO: Define state variables: employee, error, message, isDeleted
  const [employee, setEmployees] = useState(null);
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');
  const [isDeleted, setIsDeleted] = useState(false);

  useEffect(() => {
    // TODO: Fetch the employee details when the component mounts
    const fetchEmployee = async () => {
      try {
        const response = await axios.get(`/employees/${id}`);
        console.log(response.data);
        setEmployees(response.data);
      } catch (err) {
        console.error("error when fetching data", err);
        setError("Error fetching employee");
      }
    }
    fetchEmployee();
  }, [id]);

  const handleDelete = async () => {
    // TODO: Delete the employee when the button is clicked
    try{
      await axios.delete(`/employees/${id}`);
      setIsDeleted(true);
      setMessage('Employees deleted successfully');
      setTimeout(() => {
        window.location.href = '/';
      }, 1000);
    } catch(error) {
      console.error('Error deleting employee:', error);
      setError('Error deleting employee.');
    }
  };

  // TODO: Render loading message, error message, or delete confirmation
  if (error) {
    return <div className="notification error">{error}</div>;
  }

  if (!employee && !isDeleted) {
    return <div>Loading...</div>;
  }

  return (
    <div className="delete-container">
      {isDeleted ? (
        <div className="notification success">{message}</div>
      ) : (
        <div className="employee-details">
          <h2 className="title">Delete Employee</h2>
          <p className="confirmation-message">
            Are you sure you want to delete this employee?
          </p>
          <div className="employee-info">
            <div className="employee-info-item">
              <strong>Name:</strong> {employee?.name}
            </div>
            <div className="employee-info-item">
              <strong>Position:</strong> {employee?.position}
            </div>
            <div className="employee-info-item">
              <strong>Department:</strong> {employee?.department}
            </div>
          </div>
          <div className="button-container">
            <button className="delete-button" onClick={handleDelete}>Confirm Delete</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Delete;
