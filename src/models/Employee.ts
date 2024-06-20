import mongoose from 'mongoose'

// defining the structure of docs inside collections
const employeeSchema = new mongoose.Schema({
    // respecting the technical challenge requirements...
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    position: {
        type: String,
        required: true
    },
    departement: {
        type: String
    },
    salary: {
        type: Number
    }
})

// creating the employee model to apply ORM functions on them
const employeeModel = mongoose.model('Employee', employeeSchema)

// using default because i have only one value to export from this module :( ...
export default employeeModel