import React from 'react';
import {ListItem, Checkbox, Typography, IconButton} from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';

const Todo = ({todo, toggleComplete, deleteTodo}) => {

    const handleCheckbox = () =>{
        toggleComplete(todo.title);
    }

    const handleDelete = () => {
        deleteTodo(todo.title);
    }

    return(
        <ListItem style = {{display: "flex"}}>
            <Checkbox checked={todo.completed} onClick={handleCheckbox} />
            <Typography
                variant="body1"
                style={{textDecoration: todo.completed ? "line-through" : null}}
            >
                {todo.title}
            </Typography>
            <IconButton onClick={handleDelete}>
                <CloseIcon/>
            </IconButton>
        </ListItem>

    );
};

export default Todo;