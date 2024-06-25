const router = require('express').Router();
let Employee = require('../models/Employee');

// Route to get all employees
router.route('/').get((req, res) => {
  Employee.find()
    .then(employees => res.json(employees))
    .catch(err => res.status(400).json('Error: ' + err));
});

// Route to add a new employee
router.route('/add').post((req, res) => {
  const {name, position, department} = req.body;
  const newEmployee = new Employee({name, position, department});

  newEmployee
    .save()
    .then(() => res.json("new employee has been saved successfully!"))
    .catch((err) => res.status(400).json('Error: ' + err));
});

// Route to get an employee by ID
router.route('/:id').get((req, res) => {
  Employee.findById(req.params.id)
    .then(employees => res.json(employees))
    .catch(err => res.status(400).json('Error: ' + err));
});

// Route to delete an employee by ID
router.route('/:id').delete((req, res) => {
  Employee.findByIdAndDelete(req.params.id)
    .then(() => res.json("Employee has been deleted successfully!"))
    .catch((err) => res.status(400).json('Error: ' + err));
});

// Route to update an employee by ID
router.route('/update/:id').post((req, res) => {
  Employee.findByIdAndUpdate(req.params.id)
    .then(employee => {
      employee.name = req.body.name;
      employee.position = req.body.position;
      employee.department = req.body.department;

      employee.save()
      .then(() => res.json("Employee has been updated!"))
      .catch(err => res.status(400).json("Error: " + err));
    })
    .catch(err => res.status(400).json("Error: " + err));
});

module.exports = router;
