import app from './app'
const dotenv = require("dotenv");
const mongoose = require("mongoose");
dotenv.config({ path: "./config.env" });

const DB = process.env.DB_CON.replace("<password>", process.env.DB_PASS);

console.log(DB);

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("Database connection Done !");
  })
  .catch(err => {
    console.log(err);
  });

const port = process.env.CON_PORT;

app.listen(port, () => {
  console.log(`Server Started at http://localhost:8000`);
});
