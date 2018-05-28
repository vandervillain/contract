//import makeStore from './src/store';
//import startServer from './src/server';
//import { Store } from 'redux';

//export const store: Store = makeStore();
//startServer(store);
import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as socketIO from  'socket.io';
import {apiRoutes} from './routes/routes';
import * as mongoose from 'mongoose';

var app = express(),
    port = process.env.PORT || 1337;

mongoose.connect('mongodb://localhost:27017/contract', function(err) {
    if (err) throw err;
    console.log('db connection success');
}); 

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

apiRoutes(app);

var server = app.listen(port);
var io = socketIO(server)
io.on('connection', (socket) => {
    //socket.emit('state', store.getState().toJS());
    //socket.on('action', store.dispatch.bind(store));
    console.log('socket io connection ' + socket.id);
});

console.log('RESTful API server started on: ' + port);