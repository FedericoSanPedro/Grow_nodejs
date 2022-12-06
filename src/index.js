import * as dotenv from 'dotenv' 
dotenv.config()

import express, { json } from 'express';
import cors from 'cors';

import fileUpload from 'express-fileupload';
import { dbConnect } from './config/mongo.js';

import categoryRouter from './routes/categories.js';
import userRouter from './routes/users.js';
import productRouter from './routes/products.js';
import orderRouter from './routes/orders.js';
import loginRouter from './routes/login.js';

const app = express();
const port = process.env.PORT || 9000;


app.use(cors());
app.use(json());

//images
app.use(fileUpload({
    useTempFiles : true,
    tempFileDir : './uploads'
}));

//routes
app.use('/api/categories', categoryRouter);
app.use('/api/users', userRouter);
app.use('/api/products', productRouter);
app.use('/api/orders', orderRouter);
app.use('/api/login', loginRouter);

app.listen(port, () => {
    console.log(`App ready in http://localhost:${port}`)
})

dbConnect();
