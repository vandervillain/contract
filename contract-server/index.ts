import makeStore from './src/store';
import startServer from './src/server';
import { Store } from 'redux';

export const store: Store = makeStore();
startServer(store);