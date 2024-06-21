import express, { Express, Request, Response } from 'express';
import router from './routes/EmployeeRoute';

const app: Express = express()

app.get('/', (req: Request, res: Response) => {
    res.send('hello world')
})

app.use(express.json())

// all the work is in router module, i made it modular for simplicity
app.use('/', router)

export default app