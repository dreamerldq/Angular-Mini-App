import { Component, OnInit } from '@angular/core';
import {TodoService} from '../todo.service'
import { Todo } from '../Todo'
import { TodofilterService } from '../todofilter.service';
@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {
  title:string = "TodoList"
  idSeq:number = 0
  todoList = []
  constructor(
    private todoService: TodoService
  ) { }

  ngOnInit() {
  }
  addTodo(value){
    const todo = {
      id:this.idSeq++,
      content:value,
      toggle:false
    }
    this.todoService.addTodo(todo)
    .subscribe((value)=>this.todoList = value)
  }
  toggleTodo(id){
    this.todoService.toggleTodo(id)
    .subscribe((value)=>this.todoList = value)
  }
  removeTodo(id){
    console.log("这是获取的id",id)
    this.todoService.removeTodo(id)
    .subscribe((value)=>this.todoList = value)
  }
}
