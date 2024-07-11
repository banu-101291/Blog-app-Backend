import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authroute.js";
import blogRoutes from './routes/blogRoutes.js';

import cors from "cors";

//configuAre env
dotenv.config();

//databse config
connectDB();

//rest object
const app = express();

//middelwares
app.use(cors());
app.use(express.json());


//routes
app.use("/api/v1/auth", authRoutes);

app.use("/blog", blogRoutes);




//rest api
app.get("/", (req, res) => {
  res.send("<h1>Blogger                                                                                                                                 </h1>");
});

//PORT
const PORT = process.env.PORT || 9000;

//run listen
app.listen(PORT, () => {
  console.log(
    `Server Running on ${process.env.DEV_MODE} mode on port ${PORT}`
    
  );
});