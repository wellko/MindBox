import React from 'react';
import {TaskTypes} from "../../types";
import {Checkbox, Paper, Typography} from "@mui/material";
import DoneIcon from '@mui/icons-material/Done';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import {taskDoneToggle} from "../../app/TaskSlice";
import {useAppDispatch} from "../../app/hooks";


const TaskElement: React.FC<TaskTypes> = ({id, taskText, done}) => {
	const dispatch = useAppDispatch();
	return (
		<Paper style={{marginBottom:'5px', padding:'10px'}}>
			<Checkbox disabled={done} checked={done} onChange={() => dispatch(taskDoneToggle(id))} value={done} icon={<RadioButtonUncheckedIcon />} checkedIcon={<DoneIcon />} />
			<Typography sx={done? {textDecoration: 'line-through', color: 'grey'} : {}}>
				{taskText}
			</Typography>
		</Paper>
	);
};

export default TaskElement;