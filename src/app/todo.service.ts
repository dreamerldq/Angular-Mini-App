import { Injectable } from '@angular/core';
import { Todo } from './Todo'
import { Observable} from 'rxjs';
@Injectable()
export class TodoService {
  todoList:Todo[] = []
  constructor() { }
  addTodo(item:Todo){
    console.log("这是添加的todo",item)
      this.todoList = [...this.todoList,item]
      return Observable.of(this.todoList)
  }
  removeTodo(id:number){
    this.todoList = this.todoList.filter((item)=>{
      return item.id !== id
    })
    return Observable.of(this.todoList)
  }
  getTodo(){
    return Observable.of(this.todoList)
  }
  toggleTodo(id:number){
    this.todoList = this.todoList.map((item)=>{
      if(item.id === id){
        return {...item,toggle:!item.toggle}
      }else{
        return item
      }
    })
    return Observable.of(this.todoList)
  }
}
