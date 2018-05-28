import * as mongoose from 'mongoose';
import Contract from '../models/contract';

export function get(req, res) {
    Contract.find({}, function(err, contracts) {
        if (err) res.send(err);
        res.json(contracts);
    });
};

export function getOne(req, res) {
    Contract.findById(req.params.contractId, function(err, contract) {
        if (err) res.send(err);
        res.json(contract);
    });
};

export function create(req, res) {
    var newContract = new Contract(req.body);
    newContract.save(function(err, contract) {
        if (err) res.send(err);
        res.json(contract);
    });
};

export function update(req, res) {
    Contract.findOneAndUpdate({_id: req.params.contractId}, req.body, {new: true}, function(err, contract) {
        if (err) res.send(err);
        res.json(contract);
    });
};


export function remove(req, res) {
    Contract.remove({_id: req.params.contractId}, function(err) {
        if (err) res.send(err);
        res.json({ message: 'Task successfully deleted' });
    });
};