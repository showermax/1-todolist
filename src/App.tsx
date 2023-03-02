import React, {useState} from 'react';
import './App.css';
import {Todolist} from "./Todolist";

export type TaskType = {
    id: number
    title: string
    isDone: boolean
}
function App(): JSX.Element {
    let [arrofTasks, setStateTasks] = useState<TaskType[]>(
        [
        {id: 1, title: "HTML&CSS", isDone: true},
        {id: 2, title: "CSS&SCSS", isDone: true},
        {id: 3, title: "ES6/TS", isDone: false},
        {id: 4, title: "ES6/TS", isDone: false},
    ]
    )

    // const arrofTasks2: TaskType[] = [
    //     {id: 1, title: "HTML&CSS", isDone: false},
    //     {id: 2, title: "CSS&SCSS", isDone: false},
    //     {id: 3, title: "ES6/TS", isDone: false},
    // ]
    // let [stateTasks, setStateTasks] = useState(arrofTasks)
    function removeTask(id:number) {
        let newTasks = arrofTasks.filter((el) => el.id != id)
        setStateTasks(newTasks)
    }
    function filterTasks(f: string) {
        if (f=="Active") {
            let newTasks = arrofTasks.filter((el) => el.isDone == true)
            setStateTasks(newTasks)
        }
    }
    return (
        <div className="App">
        <Todolist title = {"What to do"} tasks = {arrofTasks} classCss={"to-do"} remove={removeTask} filter={filterTasks}/>
        {/*<Todolist title = {"In progress"} tasks = {arrofTasks2} classCss={"in-progress"}/>*/}
        </div>
    );
}

export default App;
