import React, { useState, useEffect } from "react";
import axios from "../api";
import { useParams, Link } from "react-router-dom";
import "./styles/edit.css";

const Edit = () => {
  const { id } = useParams();
  // TODO: Define state variables: name, position, department, notification

  useEffect(() => {
    // TODO: Fetch the employee details when the component mounts
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // TODO: Update the employee details when the form is submitted
  };

  return (
    <div className="edit-container">
      <h2>Edit Employee</h2>
      {/* TODO: Display notification if it exists */}
      <form onSubmit={handleSubmit}>
      <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="edit-input"
        />
        {/* TODO: Create input fields for name, position, and department */}
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
