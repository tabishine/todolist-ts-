import React, { useState } from 'react';
import './App.css';
import { Todolist } from './Todolist';

//берем фиксированные строки
import { v4 as uuid4} from 'uuid';
export type FilterValuesType = "all" | "completed" | "active"; 

function App() {
  //функция которая принимает данные и которая возвращает массив
  //useState(tasks1);
  // let arr = useState(initTasks);
  // let tasks = arr[0];
  // let setTasks = arr[1];
  //массив ТАсок, который мы передаем useState

  let [tasks, setTasks] = useState([
    {id: uuid4(), title: "CSS", isDone: true},
    {id: uuid4(), title: "JS", isDone: true},
    {id: uuid4(), title: "React", isDone: false},
    {id: uuid4(), title: "Redux", isDone: true},
    {id: uuid4(), title: "GraphQL", isDone:  false},
  ]);
  

  //setFIlter-что мы фильтруем
  let [filter, setFilter] = useState<FilterValuesType>("all") // стартовый стейт
  // тут функция по удалению таски-РОДИТЕЛЬ он хранит данные и отрисовывает их -мы ее потом вызываем в todolist  с правильной типизацией  
  function removeTask(id: any) {
    let filteredTasks = tasks.filter( t => t.id !== id)
    setTasks(filteredTasks);
  } 

  function addTask(id: any) {
    let newTask = {id: v1(), title: "New Task", isDone: false};
    let newTasks = [newTask, ...tasks]; // деструктуризация-новый объект массива
    setTasks(newTasks);
  }

  function changeFilter(value: FilterValuesType) {
    setFilter(value);
  }

  let tasksForTodolist = tasks;
  if(filter === "completed") {
    tasksForTodolist = tasks.filter(t => t.isDone === true);
  }
  if(filter === "active") {
    tasksForTodolist = tasks.filter(t => t.isDone === false);
  }

  //компонент принимает пропсы - 1) потому что среди пропсов есть данные 
  //2) передаем callbacks -> отрисовывает разные тайпс/ 
  //3) callbacks должен отрисовать и что ты должен вызввать при нажатии=сообщить наверх, что хочется 
  return (
    <div className="App">
      <Todolist title = "What to learn" 
                tasks = {tasksForTodolist} //таск после фильтряции/ а не просто tasks
                removeTask = {removeTask}
                changeFilter = {changeFilter} //вызывает наш callback
                addTask = {addTask}
      />
    </div>
  );
}

export default App;
