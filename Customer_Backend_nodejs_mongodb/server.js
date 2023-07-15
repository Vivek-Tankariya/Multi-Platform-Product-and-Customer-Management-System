const express = require("express");
const app = express();

const dotenv = require("dotenv");
dotenv.config();

const cors = require("cors");
app.use(cors())

const mongoose = require("mongoose");

const custRouter = require("./routes/custRoute")

mongoose.connect(process.env.URI).then(() => {app.listen(process.env.PORT);});

app.use(express.json());

app.use(custRouter)

