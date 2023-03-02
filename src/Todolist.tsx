import React, {FC} from "react";
import {TaskType} from "./App";

type TodolistPropsType = {
    title: string
    tasks: Array<TaskType>
    classCss: string
    remove: Function
    filter: Function
}

// const Todolist: FC
export function Todolist(props: TodolistPropsType) {
    let isAllnotDone= true
    props.tasks.forEach(stat => {if (stat.isDone === true) isAllnotDone = false})
    const todoClasses = isAllnotDone ? 'todolistemty' : 'todolist'
    return (
        <div className={todoClasses} >
            <h3>{props.title}</h3>
            <div>
                <input/>
                <button>+</button>
            </div>
            <ul className={props.classCss}>
                {
                    props.tasks.map(
                        (el)=><li key={el.id}><input type="checkbox" checked={el.isDone}/>
                        <span>{el.title}</span> <button onClick={() => {props.remove(el.id)}}> X </button></li>
                    )
                }
                {/*<li>{props.tasks[0].id}<input type="checkbox" checked={props.tasks[0].isDone}/> <span>{props.tasks[0].title}</span></li>*/}
                {/*<li>{props.tasks[1].id}<input type="checkbox" checked={props.tasks[1].isDone}/> <span>{props.tasks[1].title}</span></li>*/}
                {/*<li>{props.tasks[2].id}<input type="checkbox" checked={props.tasks[2].isDone}/> <span>{props.tasks[2].title}</span></li>*/}
            </ul>
            <div>
                <button onClick={()=>props.filter("All")}>All</button>
                <button onClick={()=>props.filter("Active")}>Active</button>
                <button onClick={()=>props.filter("Completed")}>Completed</button>
            </div>
        </div>

    );
}