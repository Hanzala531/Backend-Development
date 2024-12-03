import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config({ path: './.env' });

const app = express();
const port = process.env.PORT || 3000;

// MongoDB connection string
const uri = process.env.MONGODB_URI;

const connectDB = async () => {
  try {
    await mongoose.connect(`mongodb+srv://Hanzala:11223344@VideoTube.h0u7a.mongodb.net/VideoTube?retryWrites=true&w=majority`);
    console.log('MongoDB connected successfully');
  } catch (err) {
    console.error('Error connecting to MongoDB', err);
    process.exit(1);
  }
};

// Connect to MongoDB
connectDB();

// Define a simple route
app.get('/', (req, res) => {
  res.send('Hello, world!');
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});