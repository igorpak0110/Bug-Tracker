import express from "express"; // allows us to create a web application
import cors from "cors"; // helps connect the frontend with the backend
import dotenv from "dotenv"; // loads values into the .env file
import mongoose from "mongoose"; // allows us to connect to MongoDB
import bugRoutes from "./routes/bugRoutes.js";

dotenv.config(); // load the .env file

mongoose
    .connect(process.env.MONGO_URI)
    .then(() => console.log("MongoDB connected"))
    .catch((err) => console.log(err));

const app = express(); // create an instance of express

app.use(cors()); // allows us to connect the frontend with the backend
app.use(express.json()); // allows us to send JSON data
app.use("/api/bugs", bugRoutes); // use the bug routes for any requests to /api/bugs

// main code
app.get("/", (req, res) => { // request, response; GET prompt
    res.send("Bug Tracker API is running...");
    });

const PORT = process.env.PORT || 5000; // create the port for localhost:port
app.listen(PORT, () => console.log(`Server running on port ${PORT}`)); // runs the server