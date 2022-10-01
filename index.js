
import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

import postRoutes from './routes/posts.js';
import userRouter from "./routes/user.js";

const app = express();

app.use(express.json({ limit: '30mb', extended: true }))
app.use(express.urlencoded({ limit: '30mb', extended: true }))
app.use(express.json())
app.use(express.urlencoded())
app.use(cors());


const CONNECTION_URL = 'mongodb+srv://abbascloud21:abbascloud21@cluster0.b1qz6a6.mongodb.net/?retryWrites=true&w=majority';
const PORT = process.env.PORT|| 5000;
app.use(favicon(path.join(dirname, "build", "favicon.ico")));
app.use(express.static(path.join(dirname, "build")));
app.use('/posts', postRoutes);
app.use('/user', userRouter);
app.get("/",(req,res)=>{
res.send("Welcome to Memories API Backend!")
})

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`)))
  .catch((error) => console.log(`${error} did not connect`));
  


mongoose.set('useFindAndModify', false);

