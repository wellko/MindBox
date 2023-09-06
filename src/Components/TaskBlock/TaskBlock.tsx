import React from 'react';
import {useAppSelector} from "../../app/hooks";
import {deleteCompleted, selectTasks} from "../../app/TaskSlice";
import TaskElement from "./TaskElement";
import {TabContext, TabList, TabPanel} from "@mui/lab";
import {Box, Button, Grid, Tab} from "@mui/material";
import {TaskTypes} from "../../types";
import {useDispatch} from "react-redux";

const TaskBlock = () => {
	const dispatch = useDispatch();

	const [value, setValue] = React.useState('all');

	const handleChange = (e: React.SyntheticEvent, newValue: string) => {
		e.preventDefault();
		setValue(newValue);
	};

	const tasks = useAppSelector(selectTasks);

	const doneTasks = tasks.filter((task) => task.done);

	const unDoneTasks = tasks.filter((task) => !task.done);

	const renderTasks = (tasks: TaskTypes[]) => {
		if (tasks.length === 0) {
			return 'No tasks yet';
		}

		return tasks.map((tasks) => <TaskElement key={tasks.id} {...tasks} />);
	}

	return (
		<div>
			<TabContext value={value}>
				<Box height='500px' overflow='scroll'>
					<TabPanel value="all">{renderTasks(tasks)}</TabPanel>
					<TabPanel value="done">{renderTasks(doneTasks)}</TabPanel>
					<TabPanel value="not done">{renderTasks(unDoneTasks)}</TabPanel>
				</Box>

				<Box sx={{borderBottom: 1, borderColor: 'divider'}}>
					<TabList onChange={handleChange} aria-label="lab API tabs example">
						<Tab label="All" value="all"/>
						<Tab label="done" value="done"/>
						<Tab label="not done" value="not done"/>
					</TabList>
				</Box>
			</TabContext>
			<Grid container justifyContent="space-between" alignItems="center" mt='10px'>
				{unDoneTasks.length + ' left'}
				<Button color='error' variant='outlined' onClick={() => dispatch(deleteCompleted())}>delete completed</Button>
			</Grid>
		</div>
	);
};

export default TaskBlock;