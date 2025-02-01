import { Request, Response } from 'express';
import employeeModel from './../models/Employee';
import { validationResult } from 'express-validator';
import { Employee, EmployeeOptionalProps } from '../types/EmployeTypes';

// Controller untuk mendapatkan semua employees
export async function getEmployees(req: Request, res: Response) {
    try {
        const employees = await employeeModel.find();
        res.status(200).json(employees);
    } catch (error) {
        console.error(`Error: GET /employees, ${error.message}`);
        res.status(500).json({ error: "Internal Server Error" });
    }
}

// Controller to add a unique new employee
export async function addEmploye(req: Request, res: Response) {
    try {
        console.log("Received request:", req.body); // Logging for debugging

        // Employee body validation with express validator
        const result = validationResult(req);
        if (!result.isEmpty()) {
            return res.status(400).json({ errors: result.array() });
        }
        
        // Defined the interface of type for employee body
        const employeeBody: Employee = req.body;
        const employee = new employeeModel(employeeBody);

        // Adding new employee to the collection
        const newEmployee = await employee.save();

        // No new employee means that it is not added from ORM save method
        if (!newEmployee) {
            return res.status(404).json({
                message: "The employee not existing after trying to create"
            });
        }

        // Created user if the user exists with 201 HTTP code and message showing that is created
        res.status(201).json({
            message: "Employee created",
            newEmployee
        });

    } catch (error) {
        console.error(`Error: POST /employees, ${error.message}`); // Ensure error.message is used
        return res.status(500).json({ error: "Internal Server Error" });
    }
}

// Controller to update a specific employee by its id
export async function updateEmployee(req: Request, res: Response) {
    try {
        // Param id validation or optional body props validation here :)
        const result = validationResult(req);
        if (!result.isEmpty()) {
            return res.status(400).json({ errors: result.array() });
        }

        // Getting id param from url
        const id: string = req.params.id;
        // Defined the interface of type for employee body
        const employeeBody: EmployeeOptionalProps = req.body;

        // Employee body validation with express validator
        const updatedEmployee = await employeeModel.findByIdAndUpdate({ _id: id }, employeeBody, { new: true });

        if (!updatedEmployee) {
            return res.status(400).json({
                message: "The employee is not updated"
            });
        }

        return res.status(200).json({
            message: "The employee is updated",
            updatedEmployee
        });

    } catch (error) {
        console.error(`Error: PUT /employees/:id, ${error.message}`); // Ensure error.message is used
        res.status(500).json({ error: "Internal Server Error" });
    }
}

// Controller to delete a specific employee by its id
export async function removeSpecificEmployee(req: Request, res: Response) {
    try {
        // Only the array will give the validation error of param id if not existing...
        const result = validationResult(req);
        if (!result.isEmpty()) {
            return res.status(400).json({ errors: result.array() });
        }

        // Getting id param from url
        const id: string = req.params.id;

        // While testing I discovered that this async call always gives empty stuff...
        const deletedEmployee = await employeeModel.findByIdAndDelete(id);

        if (!deletedEmployee) {
            return res.status(400).json({
                message: "The employee is not found for deletion"
            });
        }

        // Status 204 is suitable for deletion
        res.status(204).json({
            message: "Deleted employee",
            deletedEmployee
        });

    } catch (error) {
        // Other unexpected errors...
        console.error(`Error: DELETE /employees/:id, ${error.message}`); // Ensure error.message is used
        res.status(500).json({ error: "Internal Server Error" });
    }
}
