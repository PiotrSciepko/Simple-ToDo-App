export const ADD_TASK = 'ADD_TASK';
export const REMOVE_TASK = 'REMOVE_TASK';
export const SET_IS_DONE = 'SET_DONE';
export const REMOVE_OPERATION = 'REMOVE_OPERATION';
export const ADD_OPERATION = 'ADD_OPERATION';

export const addTask = newTask => ({type: ADD_TASK, payload: newTask});
export const removeTask = id => ({type: REMOVE_TASK, payload: id});
export const setIsDone = id => ({type: SET_IS_DONE, payload: id});
export const removeOperation = id => ({type: REMOVE_OPERATION, payload: id});
export const addOperation = operation => ({type: ADD_OPERATION, payload: operation});