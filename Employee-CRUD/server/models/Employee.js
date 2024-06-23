// Import the required module
const mongoose = require('mongoose');

// Define the schema
const { Schema } = mongoose;
const employeeSchema = new Schema({
  name: { type: String, required: true },
  position: { type: String, required: true },
  department: { type: String, required: true },
}, {
  timestamps: true,
});

// Create the model
const Employee = mongoose.model('Employee', employeeSchema);

// Export the model
module.exports = Employee;
