import React from 'react';
import { FilterValuesType } from './App';
// function sum(a:number, b:number ) {
//   alert(a+b);
// }
// sum(12, 14); 
export type TaskType = {
  id: string
  title: string
  isDone: boolean
}

type PropsType = {
  title: string
  tasks: Array<TaskType>
  removeTask: (id: string) => void  //не возвращает ничего 
  changeFilter: (value: FilterValuesType) => void  // что принимает в валуе
  addTask: (title: string) => void
}

export function Todolist(props: PropsType) { //свойство title
  
  return (
    <div>
      <h3> {props.title} </h3>
      <div>
        <input />
        <button onClick={() => {props.addTask}}> + </button>
      </div>
      <ul>
        {
          //можно брать функцию и вызывать ее 
          //map-метод массива, который на основе каждого объекта в массиве создает новый элемент
          props.tasks.map ((t) => {
            return <li key={t.id}>
              <input type = "checkbox" checked = {t.isDone}/>
              <span> {t.title}</span>
              <button onClick={ () => { props.removeTask(t.id) } }>x</button> 
            </li>
          })
          // тут в button props -> ребенок 
        }
      </ul>
      <div>
        <button onClick={ () => {props.changeFilter("all")}}> All </button>
        <button onClick = {() => {props.changeFilter("active")}}> Active </button>
        <button onClick = {() => {props.changeFilter("completed")}}> Completed </button>
      </div>
    </div>
  );
}
