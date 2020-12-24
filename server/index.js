import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import router from "./routes/api";
import connectDB from "./config/dbconfig.js";
//import {setUpSwaggerUi} from './swagger.js'
const port = process.env.PORT || 3030;

const app = express();

app.use(cors());
app.use(express.json());
dotenv.config({ path: "./config/config.env" });
connectDB();

app.use('/api', router);

app.get("/", (req, res) => {
  res.status(200).json({
    status: 200,
    message: "welcome to my api (:",
  });
});

app.use((req, res) => {
  res.status(404).json({
    status: 404,
    message: "Page not found",
  });
});

app.listen(port, () => {
  console.log("server has started at", port);
});

export default app;
