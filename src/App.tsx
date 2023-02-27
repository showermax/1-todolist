import React from 'react';
import './App.css';
import {Todolist} from "./Todolist";

export type TaskType = {
    id: number
    title: string
    isDone: boolean
}
function App(): JSX.Element {
    const arrofTasks: TaskType[] = [
        {id: 1, title: "HTML&CSS", isDone: true},
        {id: 2, title: "CSS&SCSS", isDone: true},
        {id: 3, title: "ES6/TS", isDone: false},
    ]
    const arrofTasks2: TaskType[] = [
        {id: 1, title: "HTML&CSS", isDone: false},
        {id: 2, title: "CSS&SCSS", isDone: false},
        {id: 3, title: "ES6/TS", isDone: false},
    ]
    return (
        <div className="App">
        <Todolist title = {"What to do"} tasks= {arrofTasks}/>
        <Todolist title = {"In progress"} tasks= {arrofTasks2}/>
        {/*<Todolist title = {"What to use"}/>*/}
        </div>
    );
}

export default App;
