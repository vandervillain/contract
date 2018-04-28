import Server from 'socket.io';
import { Store } from 'redux';
import {Mongoose} from 'mongoose';

export default function startServer(store: Store) {
    const io = new Server().attach(8090);

    Mongoose.connect('mongodb://localhost/1337')
        .then(() =>  console.log('connection succesful'))
        .catch((err) => console.error(err));

    store.subscribe(() => io.emit('state', store.getState().toJS()));

    io.on('connection', (socket) => {
        socket.emit('state', store.getState().toJS());
        socket.on('action', store.dispatch.bind(store));
    })
}