const mongoose = require('mongoose');

const connectDB = async ()=>{

    const MONGODB_URI = 'mongodb+srv://AmanPathan:Pathan123@cluster0.tdmuvd3.mongodb.net/?retryWrites=true&w=majority';
    try {
        const conn = await mongoose.connect(MONGODB_URI);
        console.log('Database Connected Successfully!');
    } catch (error) {
        console.log('Error while connecting with the Database',error.message);
        process.exit(1);
    }
}

module.exports = connectDB;