import React, {useState} from 'react';
import {useAppDispatch} from "./app/hooks";
import {addNewTask} from "./app/TaskSlice";
import {Container, Paper} from "@mui/material";
import TaskBlock from "./Components/TaskBlock/TaskBlock";
import TaskForm from "./Components/TaskForm/TaskForm";

function App() {
	const dispatch = useAppDispatch();
	const [task, setTask] = useState('');

	const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setTask(e.target.value);
	}

	const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (task.length > 0) {
			dispatch(addNewTask(task));
			setTask('');
		}
	}


	return (
		<Container sx={{margin: 'auto'}}>
			<Paper>
				<TaskForm state={task} onChange={onChange} onSubmit={onSubmit}/>
				<TaskBlock/>
			</Paper>
		</Container>
	)
}

export default App;
