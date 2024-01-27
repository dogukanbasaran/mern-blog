import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoutes from './routes/user.route.js';
import authRoutes from './routes/auth.routes.js';

dotenv.config();

mongoose.connect(process.env.MONGO)
.then(
    () => {
        console.log("MongoDB is connected");
    },
)
.catch(
    (err) => {
        console.log(err);
    }
)

const app = express();

app.use(express.json());

app.listen(3001, () => {
    console.log("Server is running on port 3001");
});

app.use('/server/user', userRoutes);
app.use('/server/auth', authRoutes);