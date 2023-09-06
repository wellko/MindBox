import { combineReducers, configureStore } from '@reduxjs/toolkit';
import {tasksReducer} from "./TaskSlice";



const rootReducer = combineReducers({
	task: tasksReducer
});

export const store = configureStore({
	reducer: rootReducer,
});


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;