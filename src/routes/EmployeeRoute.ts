import { Router } from 'express'
import { addEmploye, removeSpecificEmployee, updateEmployee } from '../controllers/EmployeeController'
import { body, param } from 'express-validator'

// nested route including all the work :D
const router = Router()



// i got the comments of each route from the technical document


// added validation middleware for post request :) 
// POST /employees: Add a new employee
router.post('/employees',
    body('name').notEmpty(), // required thing or the express validator suppose that it is a string
    body('email').isEmail(), // isEmail() method replace the notEmpty() also and give validation of a pattern that matches the email
    body('position').notEmpty(),
    body('salary').isInt().notEmpty(), // a salary could be just an integer not long or whatever xd
    addEmploye
)


// PUT /employees/:id: Update an existing employee's details
router.put('/employees/:id',
    param('id').notEmpty(), // param should exist
    body('name').optional(), // other body props is optional to change because in the document there are no obligations to make the attributes required i hope you kindly understand the point ^^
    body('email').optional().isEmail(),
    body('position').optional(),
    body('salary').optional().isInt(),
    updateEmployee
)

// DELETE /employees/:id: Delete an employee by ID
router.delete('/employees/:id',
    param('id').notEmpty(), // only validation of id param, its just a deletion!
    removeSpecificEmployee
)


export default router