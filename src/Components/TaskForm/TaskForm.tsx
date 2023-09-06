import React from "react";
import {Button, Grid, TextField} from "@mui/material";


interface TaskProps {
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
	onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
	state?: string;
}

const TaskForm: React.FC<TaskProps> = ({onChange, onSubmit, state}) => {
	return (
		<form onSubmit={onSubmit}>
			<Grid container gap={2}>
				<TextField sx={{width: '80%'}} fullWidth label="new Task" variant="filled" onChange={onChange} value={state}/>
				<Button type="submit" variant="contained">Ok</Button>
			</Grid>

		</form>
	);
};

export default TaskForm;