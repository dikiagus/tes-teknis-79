import express, { Express, Request, Response } from 'express';
import mongoose from 'mongoose'; // Impor mongoose
import router from './routes/EmployeeRoute';

const app: Express = express();
app.use(express.json());

app.get('/', (req: Request, res: Response) => {
    res.send('hello world');
});

// Tambahkan endpoint untuk menguji koneksi database
app.get('/testdb', async (req: Request, res: Response) => {
    try {
        const db = mongoose.connection;
        if (db.readyState === 1) { // 1 berarti connected
            res.status(200).json({ message: 'Database connection is successful' });
        } else {
            res.status(500).json({ message: 'Database connection failed', readyState: db.readyState });
        }
    } catch (error) {
        res.status(500).json({ message: 'Database connection failed', error: error.message });
    }
});

// Semua pekerjaan ada di modul router, saya membuatnya modular untuk kesederhanaan
app.use('/', router);

export default app;
