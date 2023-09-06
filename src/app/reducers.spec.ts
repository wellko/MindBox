import { configureStore } from '@reduxjs/toolkit';
import { tasksReducer, addNewTask, taskDoneToggle, deleteCompleted } from './TaskSlice';

describe('tasksSlice', () => {
	it('should add new task', () => {
		const store = configureStore({ reducer: tasksReducer });
		const taskText = 'created new task';

		store.dispatch(addNewTask(taskText));

		const state = store.getState();
		expect(state.tasks).toHaveLength(1);
		expect(state.tasks[0].taskText).toBe(taskText);
		expect(state.tasks[0].done).toBe(false);
	});

	it('should toggle done status', () => {
		const initialState = {
			tasks: [{ id: '1', taskText: 'first task', done: false }],
		};
		const store = configureStore({ reducer: tasksReducer, preloadedState: initialState });

		store.dispatch(taskDoneToggle('1'));

		const state = store.getState();
		expect(state.tasks[0].done).toBe(true);
	});

	it('should delete all uncompleted tasks', () => {
		const initialState = {
			tasks: [
				{ id: '1', taskText: 'first task', done: true },
				{ id: '2', taskText: 'second task', done: false },
			],
		};
		const store = configureStore({ reducer: tasksReducer, preloadedState: initialState });

		store.dispatch(deleteCompleted());

		const state = store.getState();
		expect(state.tasks).toHaveLength(1);
		expect(state.tasks[0].taskText).toBe('second task');
	});
});