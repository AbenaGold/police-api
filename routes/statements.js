import { Router } from "express";
import { addStatement, deleteStatement, getStatement, updateStatement } from "../controllers/statement_controller.js";

// create Router
const statementsRouter = Router();


// Define Routes
// statementsRouter.get('/', (req, res) => {
//     res.json("complain submitted");
// });

statementsRouter.post("/statement",addStatement);

statementsRouter.get('/statement', getStatement);

statementsRouter.patch('/statement/:id', updateStatement);

statementsRouter.delete('/statement/:id',deleteStatement)

// export router
export default statementsRouter;