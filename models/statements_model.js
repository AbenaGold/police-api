import { Schema, model } from "mongoose";

const StatementSchema = new Schema({
    incidentType: { type: String, 
        enum: ['non-criminal', 'criminal']  },
    civilianStatus : {type: String, 
        enum: ['suspect', 'complainant', 'witness'] },
    statement: { type: String},
    caseStatus: {type: String, 
        enum: [ 'open', 'closed']},
    createdAt: { type: Date, default: Date.now()},
    updatedAt: { type: Date, default: Date.now()},
});

export const statementModel = model('statement', StatementSchema);