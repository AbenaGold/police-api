import mongoose from "mongoose";
import 'dotenv/config'


const connectionstring = process.env.Mongo_url



export const dbconnection = () =>{
    mongoose.connect(connectionstring).then(() => {
        console.log('database is connected');
    });
}
