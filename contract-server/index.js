"use strict";
//import makeStore from './src/store';
//import startServer from './src/server';
//import { Store } from 'redux';
Object.defineProperty(exports, "__esModule", { value: true });
//export const store: Store = makeStore();
//startServer(store);
const express = require("express");
const bodyParser = require("body-parser");
const socketIO = require("socket.io");
const routes_1 = require("./routes/routes");
const mongoose = require("mongoose");
var app = express(), port = process.env.PORT || 1337;
mongoose.connect('mongodb://localhost:27017/contract', function (err) {
    if (err)
        throw err;
    console.log('db connection success');
});
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
routes_1.apiRoutes(app);
var server = app.listen(port);
var io = socketIO(server);
io.on('connection', (socket) => {
    //socket.emit('state', store.getState().toJS());
    //socket.on('action', store.dispatch.bind(store));
    console.log('socket io connection ' + socket.id);
});
console.log('RESTful API server started on: ' + port);
