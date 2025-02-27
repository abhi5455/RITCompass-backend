import mongoose from 'mongoose';

const connectDB = async () => {
    if(!process.env.MONGO_URI) {
        console.error('No MongoDB URI specified in env file');
        process.exit(1);
    }

    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log('MongoDB connected successfully');
    } catch (error) {
        console.error('MongoDB connection error:', error);
        process.exit(1);
    }
};

export default connectDB;
