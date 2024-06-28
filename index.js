import express from "express";
import 'dotenv/config'
import { dbconnection } from "./config/db.js";
import { addStatement } from "./controllers/statement_controller.js";
import statementsRouter from "./routes/statements.js";

// create express app
const app = express();


app.use(express.json());
app.use(statementsRouter);

dbconnection()


app.listen (3500, () => {
    console.log('app is listening on port 3500');
});