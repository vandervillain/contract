"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const contract_1 = require("../models/contract");
function get(req, res) {
    contract_1.default.find({}, function (err, contracts) {
        if (err)
            res.send(err);
        res.json(contracts);
    });
}
exports.get = get;
;
function getOne(req, res) {
    contract_1.default.findById(req.params.contractId, function (err, contract) {
        if (err)
            res.send(err);
        res.json(contract);
    });
}
exports.getOne = getOne;
;
function create(req, res) {
    var newContract = new contract_1.default(req.body);
    newContract.save(function (err, contract) {
        if (err)
            res.send(err);
        res.json(contract);
    });
}
exports.create = create;
;
function update(req, res) {
    contract_1.default.findOneAndUpdate({ _id: req.params.contractId }, req.body, { new: true }, function (err, contract) {
        if (err)
            res.send(err);
        res.json(contract);
    });
}
exports.update = update;
;
function remove(req, res) {
    contract_1.default.remove({ _id: req.params.contractId }, function (err) {
        if (err)
            res.send(err);
        res.json({ message: 'Task successfully deleted' });
    });
}
exports.remove = remove;
;
