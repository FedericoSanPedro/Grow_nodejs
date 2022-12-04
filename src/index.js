import * as dotenv from 'dotenv' 
dotenv.config()

import express, { json } from 'express';
import cors from 'cors';

import fileUpload from 'express-fileupload';
import { dbConnect } from './config/mongo.js';

const app = express();
const port = process.env.PORT || 9000;


app.use(cors());
app.use(json());

//images
app.use(fileUpload({
    useTempFiles : true,
    tempFileDir : '/uploads'
}));

//routes
app.get('/',(req,res) => res.send("Hello"))

app.listen(port, () => {
    console.log(`App ready in http://localhost:${port}`)
})

dbConnect();