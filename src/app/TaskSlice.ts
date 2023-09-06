import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {TaskTypes} from "../types";
import {RootState} from "./store";
import {nanoid} from "nanoid";



interface tasksState {
	tasks: TaskTypes[];

}

const initialState: tasksState = {
	tasks: [],
};

export const tasksSlice = createSlice({
	name: 'tasks',
	initialState,
	reducers: {
		addNewTask: (state, action: PayloadAction<string>) => {
			const newTask = {
				taskText: action.payload,
				done: false,
				id: nanoid(16),
			}
			state.tasks = [...state.tasks, newTask];
		},
		taskDoneToggle: (state, action: PayloadAction<string>) => {
			const taskId = state.tasks.findIndex(task => task.id === action.payload);
			if (taskId !== -1){
				state.tasks[taskId].done = !state.tasks[taskId].done;
			}
		},
		deleteCompleted: (state) => {
			const result = state.tasks.filter(el => !el.done);
			state.tasks = [...result];
		}
	},
});

export const tasksReducer = tasksSlice.reducer;
export const selectTasks = (state: RootState) => state.task.tasks;
export const {addNewTask, taskDoneToggle, deleteCompleted} = tasksSlice.actions;