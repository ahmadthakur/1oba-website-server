// const { MongoMemoryServer } = require('mongodb-memory-server');
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const propertyRoutes = require('./routes/propertyRoutes');
const userRoutes = require('./routes/userRoutes');

const app = express();
app.use(express.json());
app.use(cors());


const PORT = process.env.PORT || 5000;
const startServer = async () => {
    const mongoUri = process.env.MONGODB_URI;

    mongoose.connect(mongoUri, { useNewUrlParser: true, useUnifiedTopology: true })
        .then(() => console.log('MongoDB connected'))
        .catch(err => console.log(err));

    app.use('/api/properties', propertyRoutes);
    app.use('/api/users', userRoutes);

    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
};

startServer();
