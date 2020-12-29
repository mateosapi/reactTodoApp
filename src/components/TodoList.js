import React, { useState } from 'react';
import Todo from './Todo'
import {List} from '@material-ui/core'

const TodoList = ({todos, toggleComplete, deleteTodo}) => {

    

    return(
        <div>
            <List>
                {todos.map(todo => (
                    <Todo todo={todo} toggleComplete={toggleComplete} deleteTodo={deleteTodo}/>
                ))}
            </List>
        </div>
    );
};

export default TodoList;