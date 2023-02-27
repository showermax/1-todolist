import React, {FC} from "react";
import {TaskType} from "./App";

type TodolistPropsType = {
    title: string
    tasks: Array<TaskType>
}

// const Todolist: FC
export function Todolist(props: TodolistPropsType) {
    let isAllnotDone= true
    for (let i = 0; i < props.tasks.length; i++) {
        if (props.tasks[i].isDone === true) {
            isAllnotDone = false
        }
    }

    const todoClasses = isAllnotDone ? 'todolistemty' : 'todolist'
    return (
        <div className={todoClasses} >
            <h3>{props.title}</h3>
            <div>
                <input/>
                <button>+</button>
            </div>
            <ul>
                <li>{props.tasks[0].id}<input type="checkbox" checked={props.tasks[0].isDone}/> <span>{props.tasks[0].title}</span></li>
                <li>{props.tasks[1].id}<input type="checkbox" checked={props.tasks[1].isDone}/> <span>{props.tasks[1].title}</span></li>
                <li>{props.tasks[2].id}<input type="checkbox" checked={props.tasks[2].isDone}/> <span>{props.tasks[2].title}</span></li>
            </ul>
            <div>
                <button>All</button>
                <button>Active</button>
                <button>Completed</button>
            </div>
        </div>

    );
}