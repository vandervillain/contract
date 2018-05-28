"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Mongoose = require("mongoose");
//import Clause from './clause';
exports.ContractSchema = new Mongoose.Schema({
    name: String,
    version: String,
    created: { type: Date, default: Date.now },
    updated: { type: Date, default: Date.now }
});
const Contract = Mongoose.model('contract', exports.ContractSchema);
exports.default = Contract;
