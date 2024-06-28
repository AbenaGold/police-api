import { statementModel } from "../models/statements_model.js";

// function to store data in the database
export const addStatement = async (req, res) => {

    try {
        console.log('request', req.body);
    const addData = await statementModel.create(req.body);
    res.status(200).json(addData);

    } catch (error) {
     console.log(error)   
    }
};

export const getStatement = async (req, res) => {
    try {
        // get all statement from database
        const allStatement = await statementModel.find();
        // Return all recipes as response
        res.status(200).json(allStatement);

    } catch (error) {
      console.log(error);  
    }
};
export const updateStatement= async (req, res) => {
    try {
        const status= req.body.caseStatus;
        console.log("request", status);
        const updatedStatement = await statementModel.findByIdAndUpdate(req.params.id, {caseStatus: status });
        res.status(200).send(updatedStatement);
    }catch (error) {
        console.log(error);
    }
};

// delete Recipe
export const deleteStatement = async (req, res, next) => {
    try {
        // Delete recipe by id
        const deletedRecipe = await RecipeModel.findByIdAndDelete(req.params.id);
        // Return response
        res.status(200).send(updatedStatement);

    } catch (error) {
        next(error);
    }
}



// get Recipes
// export const getStatements = (req, res) => {
//     res.json(`Recipe with ID ${req.params.id} statement recieved`);
// }
