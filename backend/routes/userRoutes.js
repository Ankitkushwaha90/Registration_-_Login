import express from 'express';
import User from '../models/User.js';

const router = express.Router();

router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      if (password === existingUser.password) {
        res.send({ message: "Login Successfully", existingUser });
      } else {
        res.send({ message: "Incorrect Password" });
      }
    } else {
      res.send({ message: "User not registered" });
    }
  } catch (error) {
    console.error("Error occurred:", error);
    res.status(500).send({ message: "Internal server error" });
  }
});

router.post("/register", async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).send({ message: "User already registered" });
    }
    const newUser = new User({ name, email, password });
    await newUser.save();
    res.status(201).send({ message: "User registered successfully, Please Login Now" });
  } catch (error) {
    console.error("Error occurred:", error);
    res.status(500).send({ message: "Internal server error" });
  }
});

export default router;
