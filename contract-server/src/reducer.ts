import {INITIAL_STATE} from './core';
import { Action } from 'redux';
import * as Actions from './actions';

export default function reducer(state = INITIAL_STATE, action: Action) {
    switch(action.type)
    {
        case Actions.ActionA:
            return state;
        default:
            return state;
    }
}