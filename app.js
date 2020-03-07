import express from 'express'
const cors = require("cors");
const morgan = require("morgan");
const globalErrorHandler = require('./APIs/Controllers/ErrorController');
const AppErr = require('./APIs/utils/appError');
const studentRouter = require('./APIs/Routers/studentRouter');
import Router from './React/Server/index'

const app = express();
app.use(express.json());
app.use(morgan("dev"));
app.use(cors());


//===============Routers=====================
app.use("/api/v1/student", studentRouter);

app.use("/",Router)

app.all("*", (req, res, next) => {
  next(new AppErr("Can't find a route - BAD URL", 404));
});

app.use(globalErrorHandler);

export default app
