import { createStore } from 'redux';
import base from './reducers/base';

let store = createStore(base);

export default store;