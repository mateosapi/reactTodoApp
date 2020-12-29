import React, { useState } from 'react';
import {TextField, Button} from '@material-ui/core';

const Form = ({todos, setTodos}) => {
    const [text, setText] = useState("");

    const changeHandler = (event) => {
        setText(event.target.value);
    };
    const submitHandler = (event) => {
        event.preventDefault();
        //alert(text);
        setTodos([
            {title: text, completed: false}, ...todos
        ]);
        setText("");
    };

    return(
        <form onSubmit={submitHandler}>
            <TextField value={text} onChange={changeHandler} type="text"/>
            <Button type="submit">add</Button>
        </form>
    );
};

export default Form;