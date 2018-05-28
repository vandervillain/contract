"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Mongoose = require("mongoose");
const clause = new Mongoose.Schema({});
exports.default = Mongoose.model('clause', clause);
