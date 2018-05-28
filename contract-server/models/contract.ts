import * as Mongoose from 'mongoose';
//import Clause from './clause';

export const ContractSchema = new Mongoose.Schema({
    name: String,
    version: String,
    created: { type: Date, default: Date.now },
    updated: { type: Date, default: Date.now }
  });

const Contract = Mongoose.model('contract', ContractSchema);
export default Contract;