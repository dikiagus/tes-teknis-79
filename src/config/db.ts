import mongoose from 'mongoose';

export default async function connect() {
    try {
        if (process.env.MONGODB_URI) {
            const e = await mongoose.connect(process.env.MONGODB_URI, {
                serverSelectionTimeoutMS: 10000, // Adjust the timeout for server selection
                socketTimeoutMS: 45000, // Adjust the socket timeout
                bufferCommands: false, // Disable mongoose buffering
                autoIndex: false, // Disable auto-indexing (for performance)
            });
            console.info(`Cluster destination: ${e.connection.host}`);
        } else {
            console.error('MONGODB_URI is not defined in environment variables');
        }
    } catch (error) {
        console.error(`Error connecting to MongoDB: ${error.message}`);
    }
}
