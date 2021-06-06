import {combineReducers} from "redux";
import {ADD_OPERATION, ADD_TASK, REMOVE_OPERATION, REMOVE_TASK, SET_IS_DONE} from "./actions";

const initialState = [{id: 1, name: "Task1"}, {id: 2, name: "Task2"}, {id: 3, name: "Task3"}];

const tasks = (state = initialState, {type, payload}) => {
    switch (type) {
        case ADD_TASK:
            return payload !== '' ? [...state, {id: state.length + 1, name: payload}] : state;
        case REMOVE_TASK:
            return state.filter((el, index) => el.id !== payload);
        default:
            return state;
    }
}

const initialOps = [{id: 1, taskID: 2, name: "operation1", isDone: false},
    {id: 2, taskID: 2, name: "operation2", isDone: true},
    {id: 3, taskID: 3, name: "operation3", isDone: false}];

const operations = (state = initialOps, {type, payload}) => {
    switch (type) {
        case SET_IS_DONE:
            return state.map(operation => operation.id === payload ? {
                ...operation,
                isDone: !operation.isDone
            } : operation);
        case REMOVE_OPERATION:
            return state.filter(op => op.id !== payload);
        case ADD_OPERATION:
            return payload.name.length ? [...state, {...payload, id: state.length + 1}] : state;
        default:
            return state;
    }
}

export default combineReducers({tasks, operations});