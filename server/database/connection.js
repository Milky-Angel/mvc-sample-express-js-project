const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        // mongodb connection string
        const dbOptions = {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        };

        await mongoose.connect(process.env.MONGO_URL, dbOptions);

        console.log('MongoDB connected!');
    } catch (err) {
        console.error('Error connecting to MongoDB:', err.message);
        process.exit(1);
    }
};

module.exports = connectDB;
