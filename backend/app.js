import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import userRoutes from './routes/userRoutes.js';

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect("mongodb+srv://ankitkushwaha90:ankitkushwahahacker99109@cluster0.lbucc1r.mongodb.net/mongospring", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const db = mongoose.connection;

db.on("error", (error) => {
  console.error("MongoDB connection error:", error);
});

db.once("open", () => {
  console.log("DB connection successful");
});

app.use('/api/users', userRoutes);

export default app;
