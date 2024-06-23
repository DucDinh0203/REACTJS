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

});

// Route to get an employee by ID
router.route('/:id').get((req, res) => {

});

// Route to delete an employee by ID
router.route('/:id').delete((req, res) => {

});

// Route to update an employee by ID
router.route('/update/:id').post((req, res) => {

});

module.exports = router;
