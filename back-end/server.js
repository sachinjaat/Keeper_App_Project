import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import path from "path";

// require("dotenv").config();

const app=express();
const port = process.env.PORT || 8001;

app.use(cors());
app.use(express.json());

// const router = express.Router();

// const uri = process.env.MONGODB_URL;
mongoose.connect("mongodb+srv://admin-sachin:tests123@cluster0-a2qab.mongodb.net/notesDB?retryWrites=true&w=majority",{useNewUrlParser :true, useUnifiedTopology: true });

const connection = mongoose.connection;
connection.once('open', () => {
    console.log('MongoDB database connection establised successfully');
})




import noteRouter from './routes/crud.js';
app.use('/' ,noteRouter);

app.listen(port,() => {
    console.log(`Server is running on port: ${port}`);
});
