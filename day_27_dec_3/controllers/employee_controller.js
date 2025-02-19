let employees = require('../../data/employees.json');

const getAllEmployees = (req, res) => {
    res.status(200).json(employees);
}
const getEMployeeById = (req, res) => {
    let empId = +req.params.id;
    if (isNaN(empId)) {
        throw new Error('Employee id is not a number')
    } else {
        let employee = employees.find(emp => emp.id === empId);
        res.status(200).json(employee);
    }
}
const createEmployee = (req, res) => {
    const empToInsert = req.body;
    employees.push(empToInsert);
    res.status(201).json(empToInsert);
}
module.exports = {
    getAllEmployees, getEMployeeById, createEmployee
}