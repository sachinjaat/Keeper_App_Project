import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import path from "path";
import ("dotenv").config();
import noteRouter from './routes/crud.js';

const app=express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const url = process.env.MONGODB_URL;
mongoose.connect(url,{useNewUrlParser :true, useUnifiedTopology: true, useCreateIndex: true });

const connection = mongoose.connection;
connection.once('open', () => {
    console.log('MongoDB database connection establised successfully');
})


app.use('/' ,noteRouter);

app.listen(port,() => {
    console.log(`Server is running on port: ${port}`);
});
