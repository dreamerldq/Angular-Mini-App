import { Injectable } from '@angular/core';
import { TodoFilter } from './Todo'
import { Observable} from 'rxjs';
import { TodoService } from './todo.service'
@Injectable()
export class TodofilterService {
 currentState:TodoFilter = TodoFilter.ALL
 todoList = []
  constructor(
    private todoService:TodoService
  ) { }
  changeState(state:TodoFilter){
    switch(state){
      case TodoFilter.ALL:
      this.todoList = this.todoService.todoList
      break;
      case TodoFilter.Complete:
      this.todoList = this.todoService.todoList.filter((item)=>{
        return item.toggle === true
      })
      break;
      case TodoFilter.Uncomplete:
      this.todoList = this.todoService.todoList.filter((item)=>{
        return item.toggle === false
      })
    }
    return Observable.of({data:this.todoList})
  }
}
