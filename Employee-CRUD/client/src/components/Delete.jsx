import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "../api";
import "./styles/delete.css";

const Delete = () => {
  const { id } = useParams();

  // TODO: Define state variables: employee, error, message, isDeleted

  useEffect(() => {
    // TODO: Fetch the employee details when the component mounts
  }, [id]);

  const handleDelete = async () => {
    // TODO: Delete the employee when the button is clicked
  };

  // TODO: Render loading message, error message, or delete confirmation
  if (error) {
  }

  if (!employee && !isDeleted) {
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
            <div className="employee-info-item"></div>
            <div className="employee-info-item"></div>
            <div className="employee-info-item"></div>
          </div>
          <div className="button-container"></div>
        </div>
      )}
    </div>
  );
};

export default Delete;
