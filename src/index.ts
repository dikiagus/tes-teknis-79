import dotenv from 'dotenv'
import app from './app'

dotenv.config()

app.listen(process.env.PORT, () => {
  console.log(`server running at http://localhost:${process.env.PORT}`)
})