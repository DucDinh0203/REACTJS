import React, { useEffect, useState } from "react";
import axios from "../api";
import { Link } from "react-router-dom";
import "./styles/index.css";

const Index = () => {
  // TODO: Define the employees state using useState hook

  useEffect(() => {
    // TODO: Fetch employees data from the API when the component mounts
  }, []);

  return (
    <div>
      <h2>Employee List</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Position</th>
            <th>Department</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {/* TODO: Map over employees state to render each employee's data */}
        </tbody>
      </table>
    </div>
  );
};

export default Index;
