const mongoose = require('mongoose');

async function testConnection() {
    try {
        const uri = 'mongodb+srv://dikiagus1096:0809@cluster0.11uvg.mongodb.net/employee_management?retryWrites=true&w=majority&appName=Cluster0';
        console.log("Testing connection to MongoDB...");
        const connection = await mongoose.connect(uri, {
            serverSelectionTimeoutMS: 10000,
            socketTimeoutMS: 45000,
            bufferCommands: false,
            autoIndex: false,
        });
        console.log(`Connected to MongoDB: ${connection.connection.host}`);
    } catch (error) {
        console.error(`Error connecting to MongoDB: ${error.message}`);
    }
}

testConnection();
