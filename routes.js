const express = require('express');
const router = express.Router();
const employee = require('./api/employee');

router.get('/employee/createEmployee', (req, res) => employee.createEmployee(req, res));

router.get('/employee/getEmployee', (req, res) => employee.getEmployee(req, res));

router.get('/employee/getAllEmployee', (req, res) => employee.getAllEmployee(req, res));

router.get('/employee/updateEmployee', (req, res) => employee.updateEmployee(req, res));

router.get('/employee/deleteEmployee', (req, res) => employee.deleteEmployee(req, res));

module.exports = router;