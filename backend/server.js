const express = require("express");
const dotenv = require("dotenv");
const chats = require("./data/data");
const connectDB = require("./config/db");
const userRoutes=require('./routes/userRoutes')
const {notFound, errorHandler}= require('./middlewares/errorMiddleware')

dotenv.config();
connectDB();
const app = express();

app.use(express.json()); // to accept json data
app.get('/', (re, res) => {
    res.send("APi is running");
})
app.use('/api/user',userRoutes)

app.use(notFound)
app.use(errorHandler)
const PORT = process.env.PORT || 4500

app.listen(4500, console.log(`server start on PORT ${PORT}`));