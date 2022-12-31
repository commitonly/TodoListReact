import React from "react";
import TodoItem from "./TodoItem";

function TodoBoard(props){

    console.log("todoBoard", props.todoList)
    return(
        <div>
            <h1>Todo List</h1>
            <TodoItem/>
        </div>
    )
}

export default TodoBoard