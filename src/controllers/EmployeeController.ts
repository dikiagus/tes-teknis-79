import { Request, Response } from 'express'
import employeeModel from './../models/Employee'

// controller to add a unique new employee
export async function addEmploye(req: Request, res: Response) {
    try {
        // defined the interface of type for employee body (missing for tomorrow)
        const employeeBody = req.body

        // employee body validation with express validator

        const employee = new employeeModel(employeeBody)

        // adding new employee to the collection
        const newEmployee = await employee.save()

        // no new employee means that is not added from orm save method !
        if (!newEmployee) {
            res.status(404).json({
                message: "the employee not existing after trying to create"
            })
        }

        // created user if the user exists with 201 http code and message showing that is created :D
        res.status(201).json({
            message: "employee created",
            newEmployee
        })

    } catch (error) {
        console.error(`error: POST /employees, ${error.messages}`)
    }
}

// Controller to update a specific employee by its id
export async function updateEmployee(req: Request, res: Response) {
    try {
        // getting id param from url
        const id: string = req.params.id

        // defined the interface of type for employee body (missing for tomorrow)
        const employeeBody = req.body

        // employee body validation with express validator

        const updatedEmployee = await employeeModel.findByIdAndUpdate({ _id: id }, employeeBody)

        if (!updatedEmployee) {
            res.status(400).json({
                message: "the employee is not updated"
            })
        }

        return res.status(200).json({
            message: "the employee is updated",
            updatedEmployee
        })

    } catch (error) {
        console.error(`error: PUT /employees/:id, ${error.messages}`)
    }
}

// controller to delete a specific employee by its id
export async function removeSpecificEmployee(req: Request, res: Response) {
    try {
        // getting id param from url
        const id: string = req.params.id
        const deletedEmployee = await employeeModel.findByIdAndDelete(id)

        if (!deletedEmployee) {
            res.status(400).json({
                message: "the employee is not found for deletion"
            })
        }

        // ive found that status 204 on reddit, it is suitable for deletion!
        res.status(204).json({
            message: "deleted employee",
            deletedEmployee
        })

    } catch (error) {
        // other unexpected errors ...
        console.error(`error: DELETE /employees/:id, ${error.messages}`)
    }
}
