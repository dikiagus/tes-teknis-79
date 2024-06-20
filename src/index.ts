import dotenv from 'dotenv'
import app from './app'
import connect from './config/db'
import employeeModel from './models/Employee'

// dotenv library used to get environment variables
dotenv.config()

// connecting to the database
connect()

app.listen(process.env.PORT, () => {
  console.log(`server running at http://localhost:${process.env.PORT}`)
})