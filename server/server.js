import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import dbConnection from './database/dbConnection.js';
import router from './routes/Route.js';
import errorMiddleware from './middlewares/errorMiddleware.js';

dotenv.config({ path: './config/config.env' });

const app = express();

// CORS Setup
app.use(cors({
  origin: [process.env.FRONTEND_URL],
  methods: ['POST'],
  credentials: true,
}));

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/api/v1/reservation', router);

// Error Middleware (should be before listen)
app.use(errorMiddleware);

// DB Connection
dbConnection();

// Start Server
app.listen(process.env.PORT, () => {
  console.log(`🚀 Server Running On Port ${process.env.PORT}`);
});
