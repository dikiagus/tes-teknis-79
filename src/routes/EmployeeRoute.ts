import { Router } from 'express'
import { addEmploye, removeSpecificEmployee, updateEmployee } from '../controllers/EmployeeController'

// nested route including all the work :D
const router = Router()



// i got the comments of each route from the technical document



// POST /employees: Add a new employee
router.post('/employees', addEmploye)

// PUT /employees/:id: Update an existing employee's details
router.put('/employees/:id', updateEmployee)

// DELETE /employees/:id: Delete an employee by ID
router.delete('/employees/:id', removeSpecificEmployee)


export default router