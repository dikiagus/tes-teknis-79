import dotenv from 'dotenv';
import app from './app';
import connect from './config/db';

// Memuat variabel lingkungan dari file .env
dotenv.config();

// Menghubungkan ke database
connect();

// Mendapatkan port dari variabel lingkungan atau menggunakan port default 3001
const port = process.env.PORT || 3001;
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});

export default app;
